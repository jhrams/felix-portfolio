import { useNavbarHeight } from '../../context/NavbarHeightContext';
import {
  VIEW_RECENT_WORK,
  TESTIMONIALS,
  GET_STARTED,
  HOME_TITLE,
  HOME_DESCRIPTION,
  LETS_WORK_TOGETHER,
  FAQ,
  FRACTIONAL
} from '../../copies';
import { renderText } from '../../utils/text';
import AboutFractional from './AboutFractional';

import './styles.css'

const Home: React.FC = () => {
  const { navbarHeight } = useNavbarHeight();

  return (
    <div style={{ marginTop: `${navbarHeight}px` }}>
      <AboutFractional />
    </div>
  );
}

export default Home;