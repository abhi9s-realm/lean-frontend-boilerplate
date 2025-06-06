import React from 'react';
import styles from '@/styles/Loading.module.css';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ size = 'medium', message = 'Loading...' }) => {
  return (
    <div className={`${styles.loadingContainer} ${styles[size]}`}>
      <div className={styles.spinner}></div>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default Loading;
