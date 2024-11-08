import PageLinks from "../PageLinks";
import "./styles.css"

interface NavProps {
  title: string;
}

const Nav: React.FC<NavProps> = ({ title }) => {
  return (
    <nav>
      <p>{title}</p >
      <PageLinks />
    </nav>
  );
};

export default Nav;
