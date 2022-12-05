import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="container">
      <div>
        <FontAwesomeIcon className="calculator" icon="calculator" />
      </div>
      <h2>React Counter</h2>
    </header>
  );
};
export default Header;
