import { WHY_FRACTIONAL } from '../../../copies';
import { renderText } from '../../../utils/text';
import "./styles.css"

const {
  title,
  title1,
  description1,
  title2,
  description2,
  title3,
  description3
} = WHY_FRACTIONAL;

const AboutFractional = () => {
  return (<div className='about-container'>
    <p className='about-title'>{renderText(title)}</p>
    <div className='reasons-container'>
      <div className='reason-container'>
        <p className='reason-title'>{title1}</p>
        <p className='reason-description'>{description1}</p>
      </div>
      <div className='reason-container'>
        <p className='reason-title'>{title2}</p>
        <p className='reason-description'>{description2}</p>
      </div>
      <div className='reason-container'>
        <p className='reason-title'>{title3}</p>
        <p className='reason-description'>{description3}</p>
      </div>
    </div>
  </div>)
}

export default AboutFractional;