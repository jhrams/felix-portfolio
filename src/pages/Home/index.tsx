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
import { renderText } from '../../utils/text';

import './styles.css'

const Home: React.FC = () => {
  const { navbarHeight } = useNavbarHeight();

  return (
    <div style={{ marginTop: `${navbarHeight}px` }}>
      <div className='about-container'>
        <p className='about-title'>{renderText(WHY_FRACTIONAL.title)}</p>
        <div className='reasons-container'>
          <div className='reason-container'>
            <p className='reason-title'>{WHY_FRACTIONAL.title1}</p>
            <p className='reason-description'>{WHY_FRACTIONAL.description1}</p>
          </div>
          <div className='reason-container'>
            <p className='reason-title'>{WHY_FRACTIONAL.title2}</p>
            <p className='reason-description'>{WHY_FRACTIONAL.description2}</p>
          </div>
          <div className='reason-container'>
            <p className='reason-title'>{WHY_FRACTIONAL.title3}</p>
            <p className='reason-description'>{WHY_FRACTIONAL.description3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;