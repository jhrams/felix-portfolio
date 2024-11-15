import { GET_STARTED } from '../../../copies';
import { renderText } from '../../../utils';
import "./styles.css"

const {
  title,
  title1,
  description1,
  title2,
  description2,
  title3,
  description3
} = GET_STARTED;

const GetStarted = () => (
  <div className='get-started-container'>
    <p className='get-started-title'>{renderText(title)}</p>
    <div className='steps-container'>
      <div className='step-container'>
        <p className='step-title'>{title1}</p>
        <p className='step-description'>{renderText(description1)}</p>
      </div>
      <div className='step-container'>
        <p className='step-title'>{title2}</p>
        <p className='step-description'>{renderText(description2)}</p>
      </div>
      <div className='step-container'>
        <p className='step-title'>{title3}</p>
        <p className='step-description'>{renderText(description3)}</p>
      </div>
    </div>
  </div>
)

export default GetStarted;