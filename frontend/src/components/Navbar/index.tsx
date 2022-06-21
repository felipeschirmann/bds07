import './styles.css';
import 'bootstrap/js/src/collapse.js';

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-primary navbar-expand-md navbar-light bg-primary main-nav">
        <div className="container-fluid">
          <a href="/" className="nav-logo-text">
            <h3>Carros Top</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#carrostop-navbar"
            aria-controls="carrostop-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="carrostop-navbar">
            <ul className="navbar-nav offset-md-3 main-menu">
              <li>
                <a href="/" className="active">
                  HOME
                </a>
              </li>
              <li>
                <a href="link">CATÁLOGO</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
