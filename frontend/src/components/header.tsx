import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  const handleLogout = () => {
    // logout code
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link className="a" to="/">
          <h1 className="header-title">DaddyPlanner Pro</h1>
        </Link>
      </div>
      <div className="header-right">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
    </header>
  );
};

export default Header;
