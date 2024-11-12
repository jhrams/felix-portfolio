import { useNavbarHeight } from '../../context/NavbarHeightContext';
import {
  WHY_FRACTIONAL,
  VIEW_RECENT_WORK,
  TESTIMONIALS,
  GET_STARTED,
  HOME_TITLE,
  HOME_DESCRIPTION,
  LETS_WORK_TOGETHER,
  FAQ,
  FRACTIONAL
} from '../../copies';

import './styles.css'

const Home: React.FC = () => {
  const { navbarHeight } = useNavbarHeight();

  return (
    <div style={{ marginTop: `${navbarHeight}px` }}>
      <div className='about-container'>
        <p>{WHY_FRACTIONAL.title}</p>
        <div className='reasons-container'>
          <div className='reason-container'>
            <p className='reason-title'></p>
            <p className='reason-description'></p>
          </div>
          <div className='reason-container'>
            <p className='reason-title'></p>
            <p className='reason-description'></p>
          </div>
          <div className='reason-container'>
            <p className='reason-title'></p>
            <p className='reason-description'></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;