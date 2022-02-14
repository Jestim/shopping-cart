import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import './header.css';

function Header({ cartItemsLength }) {
  return (
    <div className="header">
      <h1 className="header-text">Fruit Shop</h1>
      <nav className="header-links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/shop">
          Shop
        </Link>
        <Link className="link" to="/cart">
          <div className="cart">
            <FiShoppingCart className="cart-icon" />
            <span className="cart-icon-badge" data-testid="cart-icon-badge">
              {cartItemsLength}
            </span>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
