import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';

const Header = () => {
  return (
    <header className="main-header">
      <div className="container with-flex">
        <Link to="/" className="logo">
          <img src={Logo} alt="Company logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">Video</Link>
            </li>
            <li>
              <Link to="/">Reviews</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
