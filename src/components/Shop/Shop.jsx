import products from '../../data/data';
import './shop.css';

function Shop({ handleAddToCart }) {
  const resetInputValue = (productId) => {
    document.getElementById(`quantity-input-${productId}`).value = '1';
  };

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
          <form
            className="add-to-cart-form"
            onSubmit={(e) => {
              handleAddToCart(
                e,
                product,
                document.getElementById(`quantity-input-${product.id}`).value
              );
              resetInputValue(product.id);
            }}
          >
            <input
              id={`quantity-input-${product.id}`}
              className="quantity-input"
              type="number"
              defaultValue="1"
              min="1"
              onClick={() => {
                document
                  .getElementById(`quantity-input-${product.id}`)
                  .select();
              }}
            />
            <button className="add-to-cart-button" type="submit">
              Add to cart
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default Shop;
