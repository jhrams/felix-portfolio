import { useLocation } from 'react-router-dom';
import "./styles.css"

const PageLinks = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div>
      <a href="/" className={currentPath === '/' ? 'active' : ''}>Home</a>
      <a href="/structure" className={currentPath === '/structure' ? 'active' : ''}>Structure</a>
      <a href="/contact" className={currentPath === '/contact' ? 'active' : ''}>Contact</a>
    </div>
  );
}

export default PageLinks;