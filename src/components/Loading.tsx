import { FC } from 'react';
import styles from '@/styles/Loading.module.css';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  message?: string;
}

const Loading: FC<LoadingProps> = ({ 
  size = 'medium', 
  message = 'Loading...' 
}) => {
  return (
    <div className={`${styles.loadingContainer} ${styles[size]}`}>
      <div 
        className={styles.spinner}
        data-testid="loading-spinner"
        data-size={size}
      />
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default Loading;