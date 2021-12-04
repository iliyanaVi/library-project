import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

import "./header.css";
import "../../utils.css";

function Header() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="widh-50-pc" id="logo">
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <span className="logo">Totally Awesome Library</span>
          </Link>
        </div>
        {user && (
          <div className="nav-wrapper">
            <nav className="navigation">
              <Link className="nav-link" to="#">
                Books I want to read
              </Link>
              <Link className="nav-link" to="#">
                My profile
              </Link>
              <button className="btn btn-primary" onClick={logout}>
                Logout
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
export default Header;
