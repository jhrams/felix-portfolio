import { useNavbarHeight } from '../../context/NavbarHeightContext';
import {
  VIEW_RECENT_WORK,
  TESTIMONIALS,
  HOME_TITLE,
  HOME_DESCRIPTION,
  FAQ,
} from '../../copies';

import AboutFractional from './AboutFractional';
import GetStarted from './GetStarted';
import WhyFractional from './WhyFractional';

import './styles.css'

const Home: React.FC = () => {
  const { navbarHeight } = useNavbarHeight();

  return (
    <div style={{ marginTop: `${navbarHeight}px` }}>
      <AboutFractional />
      <GetStarted />
      <WhyFractional />
    </div>
  );
}

export default Home;