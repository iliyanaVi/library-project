import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

import "../../utils.css";
import styles from "./header.module.css";
import {Button} from "react-bootstrap"

function Header() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className="widh-50-pc" >
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <span className={styles.logo}>Totally Awesome Library</span>
          </Link>
        </div>
        {user && (
          <div className={styles.navWrapper}>
            <nav className={styles.navigation}>
              <Link className={styles.navLink} to="myBooksList">
                Books I want to read
              </Link>
              <Link className={styles.navLink} to="#">
                My profile
                {/* in my profile there will be the comments and likes*/}
              </Link>
              <Button onClick={logout}>
                Logout
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
export default Header;
