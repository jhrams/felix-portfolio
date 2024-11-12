import { InlineWidget } from "react-calendly";
import { useNavbarHeight } from '../../context/NavbarHeightContext';
import { GET_IN_TOUCH, CONTACT_DESCRIPTION } from '../../copies'
import { renderText } from '../../utils/text';
import './styles.css'

const Contact: React.FC = () => {
  const { navbarHeight } = useNavbarHeight();

  return (
    <div>
      <div className='contact-title-container'>
        <h1 className='contact-title' style={{ marginTop: `${navbarHeight}px` }}>{GET_IN_TOUCH}</h1>
        <p className='contact-description'>{renderText(CONTACT_DESCRIPTION)}</p>
      </div>
      <InlineWidget url="https://calendly.com/felix-lau" />
    </div>
  );
}

export default Contact;