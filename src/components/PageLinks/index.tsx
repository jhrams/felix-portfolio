import { useLocation } from 'react-router-dom';
import "./styles.css"

const PageLinks = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div>
      <a href="/" className={`page-link${currentPath === '/' ? ' active' : ''}`}>Home</a>
      <a href="/structure" className={`page-link${currentPath === '/structure' ? ' active' : ''}`}>Structure</a>
      <a href="/contact" className={`page-link${currentPath === '/contact' ? ' active' : ''}`}>Contact</a>
    </div>
  );
}

export default PageLinks;