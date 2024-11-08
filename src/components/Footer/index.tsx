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
      <p>{title}</p>
      <PageLinks />
      <div className="container">
        <p>{email}</p>
        <p>{copyright}</p>
      </div>
    </footer>
  )
}

export default Footer