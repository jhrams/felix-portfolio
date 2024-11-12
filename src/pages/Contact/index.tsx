import { GET_IN_TOUCH, CONTACT_DESCRIPTION } from '../../copies'
import { renderText } from '../../utils/text';
import './styles.css'

const Contact: React.FC = () => {
  return (
    <div>
      <h1>{GET_IN_TOUCH}</h1>
      <p>{renderText(CONTACT_DESCRIPTION)}</p>
    </div>
  );
}

export default Contact;