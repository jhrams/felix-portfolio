import {
  FRACTIONAL,
  LETS_WORK_TOGETHER
} from "../../../copies"
import { renderText } from '../../../utils';
import { BASE_URL } from '../../../constants';

import "./styles.css"

const FractionalContact: React.FC = () => (
  <div className="fractional-contact">
    <h2>{renderText(FRACTIONAL)}</h2>
    <a href={`${BASE_URL}/#/contact`} className="button">{LETS_WORK_TOGETHER}</a>
    <img src="fractional-contact-left-dot.png" alt="Fractional-contact-left-dot" className="fractional-contact-left-dot" />
    <img src="fractional-contact-l-right-dot.png" alt="Fractional-contact-l-right-dot" className="fractional-contact-l-right-dot" />
    <img src="fractional-contact-xl-right-dot.png" alt="Fractional-contact-xl-right-dot" className="fractional-contact-xl-right-dot" />
  </div>
);


export default FractionalContact;