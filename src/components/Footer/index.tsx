import PageLinks from "../PageLinks";
import useWindowWidth from '../../hooks/useWindowWidth';

import "./styles.css"

interface FooterProps {
  title: string;
  email: string;
  copyright: string;
}

const Footer: React.FC<FooterProps> = ({ title, email, copyright }) => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 1023; // Example breakpoint for mobile

  return (
    <footer>
      {isMobile ? (
        <>
          <div className="row">
            <a href="/" className="footer-title">{title}</a>
            <div className="links-container">
              <PageLinks />
            </div>
          </div>
          <div className="container">
            <strong>{email}</strong>
            <p>{copyright}</p>
          </div>
        </>
      ) : (
        <>
          <a href="/" className="footer-title">{title}</a>
          <div className="links-container">
            <PageLinks />
          </div>
          <div className="container">
            <strong>{email}</strong>
            <p>{copyright}</p>
          </div>
        </>

      )}
    </footer >
  )
}

export default Footer