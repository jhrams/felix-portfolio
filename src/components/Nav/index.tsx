import "./styles.css"

interface NavProps {
    title: string;
}

const Nav: React.FC<NavProps> = ({ title }) => {
  return (
    <nav>
        <p>{title}</p >
        <div className="links">
          <a href="#home">Home</a>
          <a href="#structure">Structure</a>
          <a href="#contact">Contact</a>
        </div>
    </nav>
  );
}; 

export default Nav;
