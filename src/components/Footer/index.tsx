import PageLinks from "../PageLinks";
import "./styles.css"

interface FooterProps {
  title: string;
  email: string;
  copyright: string;
}

const Footer: React.FC<FooterProps> = ({ title, email, copyright }) => {
  return (
    <footer>
      <p className="title">{title}</p>
      <div className="links-container">
        <PageLinks />
      </div>
      <div className="container">
        <strong>{email}</strong>
        <p>{copyright}</p>
      </div>
    </footer>
  )
}

export default Footer