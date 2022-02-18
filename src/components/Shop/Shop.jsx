import products from '../../data/data';
import './shop.css';

function Shop({ handleAddToCart }) {
  return (
    <div className="shop">
      {products.map((product) => (
        <div
          className="product-card"
          key={product.id}
          data-testid={`product-${product.id}`}
        >
          <img className="product-img" src={product.img} alt={product.name} />
          <p className="product-name">
            {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
          </p>
          <p className="prudct-price">${product.price}</p>
          <input
            id={`quantity-input-${product.id}`}
            className="quantity-input"
            type="number"
            defaultValue="1"
            min="1"
          />
          <button
            className="add-to-cart-button"
            onClick={() =>
              handleAddToCart(
                product,
                document.getElementById(`quantity-input-${product.id}`).value
              )
            }
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
