import {
  FRACTIONAL,
  LETS_WORK_TOGETHER
} from "../../../copies"
import { renderText } from '../../../utils';

import "./styles.css"

const FractionalContact: React.FC = () => (
  <div className="fractional-contact">
    <h2>{renderText(FRACTIONAL)}</h2>
    <a href="/contact">{LETS_WORK_TOGETHER}</a>
    <img src="/src/assets/fractional-contact-left-dot.png" alt="Fractional-contact-left-dot" className="fractional-contact-left-dot" />
    <img src="/src/assets/fractional-contact-right-dot.png" alt="Fractional-contact-right-dot" className="fractional-contact-right-dot" />
  </div>
);


export default FractionalContact;