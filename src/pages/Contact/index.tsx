import { InlineWidget } from "react-calendly";
import { useNavbarHeight } from '../../context/NavbarHeightContext';
import { GET_IN_TOUCH, CONTACT_DESCRIPTION } from '../../copies'
import { renderText } from '../../utils';

import './styles.css'

const Contact: React.FC = () => {
  const { navbarHeight } = useNavbarHeight();

  return (
    <div style={{ marginTop: `${navbarHeight}px` }}>
      <div className='contact-title-container'>
        <h1 className='contact-title'>{GET_IN_TOUCH}</h1>
        <p className='contact-description'>{renderText(CONTACT_DESCRIPTION)}</p>
      </div>
      <InlineWidget url="https://calendly.com/felix-lau/30min" />
      <img src={`contact-dots.png`} alt="contact-dots" className="contact-dots" />
      <img src={`contact-line.png`} alt="contact-line" className="contact-line" />
    </div>
  );
}

export default Contact;