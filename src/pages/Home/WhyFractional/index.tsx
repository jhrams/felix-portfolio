import {
  FRACTIONAL,
  LETS_WORK_TOGETHER
} from "../../../copies"
import { renderText } from '../../../utils/text';

import "./styles.css"

const WhyFractional: React.FC = () => (
  <div className="why-fractional">
    <h2>{renderText(FRACTIONAL)}</h2>
    <a href="/contact">{LETS_WORK_TOGETHER}</a>
  </div>
);


export default WhyFractional;