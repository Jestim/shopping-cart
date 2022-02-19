import './cart.css';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi';

function Cart({
  cartItems,
  handleIncreseItemQuantity,
  handleDecreseItemQuantity,
  handleRemoveItem,
  getTotalPrice,
}) {
  return (
    <div className="cart">
      {cartItems.length !== 0 ? (
        <h1 className="cart-header">In your shopping cart</h1>
      ) : (
        <h1 className="cart-header">Your cart is empty</h1>
      )}
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item-card" key={item.id}>
            <img className="item-img" src={item.img} alt={item.name} />
            <div className="item-info">
              <div className="item-desciprtion">
                <p className="item-name">
                  {`${item.name.charAt(0).toUpperCase() + item.name.slice(1)}:`}
                </p>
                <div className="item-quantity-container">
                  <p className="item-quantity">{`Quantity: ${item.quantity}`}</p>
                  <div className="change-quantity-buttons">
                    <button
                      className="change-quantity-button"
                      onClick={() => handleDecreseItemQuantity(item)}
                      type="button"
                    >
                      <AiOutlineMinusCircle />
                    </button>
                    <button
                      className="change-quantity-button"
                      onClick={() => handleIncreseItemQuantity(item)}
                      type="button"
                    >
                      <AiOutlinePlusCircle />
                    </button>
                  </div>
                </div>
                <p className="item-price">{`$${item.price * item.quantity}`}</p>
                <button
                  className="remove-item-button"
                  onClick={() => handleRemoveItem(item)}
                  type="button"
                >
                  <HiOutlineTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length !== 0 ? (
        <div className="total-price-container">
          <p>{`Total price: $${getTotalPrice()}`}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Cart;
