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
  </div>
);


export default FractionalContact;