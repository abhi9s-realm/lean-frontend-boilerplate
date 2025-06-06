import { useApi } from '@/hooks/useApi';
import { env } from '@/config/config';
import styles from '@/styles/Home.module.css';
import Loading from '../components/Loading';
import ErrorBoundary from '../components/ErrorBoundary';

interface Post {
  id: number;
  title: string;
}

const Home = () => {
  const { data: posts, loading, error } = useApi<Post[]>('/posts');

  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>Welcome to {env.appName}</h1>
      <p>Your modern frontend development environment is ready!</p>
      
      <div className={styles.section}>
        <h2>Quick Start</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>Edit <code>src/pages/Home.tsx</code> to update this page</li>
          <li className={styles.listItem}>Add new routes in <code>src/App.tsx</code></li>
          <li className={styles.listItem}>Create new components in <code>src/components</code></li>
          <li className={styles.listItem}>API services go in <code>src/api</code></li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>API Example</h2>
        <ErrorBoundary>
          {loading && <Loading size="medium" message="Loading posts..." />}
          {error && (
            <div className={styles.error}>
              {error.message}
              <div className={styles.errorHint}>
                Make sure the mock API is running. Try running:
                <br />
                <code>npm run mock</code>
              </div>
            </div>
          )}
          {!loading && !error && posts && (
            <div className={styles.postsContainer}>
              <ul className={styles.list}>
                {posts.map(post => (
                  <li key={post.id} className={styles.listItem}>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Home;
