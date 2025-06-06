import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import styles from '@/styles/Layout.module.css';
import { env } from '@/config/config';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className={styles.appLayout}>
          <header>
            <nav className={styles.nav}>
              <Link to="/" className={styles.link}>Home</Link>
              <Link to="/about" className={styles.link}>About</Link>
            </nav>
          </header>
          <main className={styles.main}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <footer className={styles.footer}>
            <p>© {new Date().getFullYear()} {env.appName}</p>
          </footer>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;