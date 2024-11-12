import { useNavbarHeight } from '../../context/NavbarHeightContext';
import {
  STRUCTURE_TITLE,
  RETAINER_MODEL,
  SINGLE_PROJECT_MODEL,
  TRIAL_MODEL,
  GET_IN_TOUCH
} from '../../copies'
import { renderText } from '../../utils/text'

import './styles.css'

const Structure: React.FC = () => {
  const { navbarHeight } = useNavbarHeight();

  return (
    <div className='structure-page'>
      <h1 className='structure-title' style={{ marginTop: `${navbarHeight}px` }}>{STRUCTURE_TITLE}</h1>
      <div className='project-trial-button-container'>
        <div className='retainer-box'>
          <div className='retainer-title-container'>
            <h2 className='retainer-title'>{RETAINER_MODEL.title}</h2>
            <div className='retainer-title-button-container'>
              <p className='retainer-title-button'>{RETAINER_MODEL.monthly}</p>
              <p className='retainer-title-button'>{RETAINER_MODEL.flatFee}</p>
            </div>
          </div>
          <p className='retainer-description-1'>{RETAINER_MODEL.description1}</p>
          <p className='retainer-description-2'>{renderText(RETAINER_MODEL.description2)}</p>
        </div>
        <div className='project-trial-container'>
          <div className='single-project-box'>
            <div className='single-project-title-container'>
              <h2 className='single-project-title'>{SINGLE_PROJECT_MODEL.title}</h2>
              <div className='single-project-title-button-container'>
                <p className='single-project-title-button'>{SINGLE_PROJECT_MODEL.monthly}</p>
                <p className='single-project-title-button'>{SINGLE_PROJECT_MODEL.flatFee}</p>
              </div>
            </div>
            <p className='single-project-description-1'>{SINGLE_PROJECT_MODEL.description1}</p>
            <p className='single-project-description-2'>{SINGLE_PROJECT_MODEL.description2}</p>
            <p className='single-project-description-3'>{SINGLE_PROJECT_MODEL.description3}</p>
          </div>
          <div className='trial-box'>
            <div className='trial-title-container'>
              <h2 className='trial-title'>{TRIAL_MODEL.title}</h2>
              <div className='trial-title-button-container'>
                <p className='trial-title-button'>{TRIAL_MODEL.weekly}</p>
                <p className='trial-title-button'>{TRIAL_MODEL.flatFee}</p>
              </div>
            </div>
            <p className='trial-description-1'>{renderText(TRIAL_MODEL.auditDescription)}</p>
            <p className='trial-description-2'>{renderText(TRIAL_MODEL.deckDescription)}</p>
          </div>
        </div>
        <div className='structure-button-container'>
          <a className='structure-button' href='/contact'>{GET_IN_TOUCH}</a>
        </div>
      </div>
    </div>
  )
}

export default Structure