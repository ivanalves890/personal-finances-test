import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <>
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Dashboard
            </Link>

            <Link to="/items" className="navbar-item">
              Items
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
