import products from '../../data/data';
import './shop.css';

function Shop({ handleAddToCart }) {
  return (
    <div className="shop">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img className="product-img" src={product.img} alt={product.name} />
          <p className="product-name">
            {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
          </p>
          <p className="prudct-price">${product.price}</p>
          <button
            className="add-to-cart-button"
            onClick={handleAddToCart}
            type="button"
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Shop;
