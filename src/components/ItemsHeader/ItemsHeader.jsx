import { Link } from "react-router-dom";

export default function ItemsHeader() {
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
            <Link to="/items" className="navbar-item">
              Lista de itens
            </Link>

            <Link to="/items/new" className="navbar-item">
              Novo item
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
