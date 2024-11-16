import { useLocation } from 'react-router-dom';
import { BASE_URL } from '../../constants';

import "./styles.css"

const PageLinks: React.FC = (): JSX.Element => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div>
      <a href={`${BASE_URL}/`} className={`page-link${currentPath === '/' ? ' active' : ''}`}>Home</a>
      <a href={`${BASE_URL}/structure`} className={`page-link${currentPath === '/structure' ? ' active' : ''}`}>Structure</a>
      <a href={`${BASE_URL}/contact`} className={`page-link${currentPath === '/contact' ? ' active' : ''}`}>Contact</a>
    </div>
  );
}

export default PageLinks;