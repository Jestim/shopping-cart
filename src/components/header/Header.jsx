import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <h1 className="header-text">Fake Shop</h1>
        <nav className="header-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
