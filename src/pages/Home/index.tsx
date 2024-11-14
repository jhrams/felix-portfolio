import { useNavbarHeight } from '../../context/NavbarHeightContext';
import {
  VIEW_RECENT_WORK,
  TESTIMONIALS,
  HOME_TITLE,
  HOME_DESCRIPTION,
  LETS_WORK_TOGETHER,
  FAQ,
  FRACTIONAL
} from '../../copies';

import AboutFractional from './AboutFractional';
import GetStarted from './GetStarted';

import './styles.css'

const Home: React.FC = () => {
  const { navbarHeight } = useNavbarHeight();

  return (
    <div style={{ marginTop: `${navbarHeight}px` }}>
      <AboutFractional />
      <GetStarted />
    </div>
  );
}

export default Home;