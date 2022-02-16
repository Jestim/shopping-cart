import './cart.css';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi';

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h1 className="cart-header">In your shopping cart</h1>
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
                    <button className="change-quantity-button" type="button">
                      <AiOutlineMinusCircle />
                    </button>
                    <button className="change-quantity-button" type="button">
                      <AiOutlinePlusCircle />
                    </button>
                  </div>
                </div>
                <p className="item-price">{`$${item.price * item.quantity}`}</p>
                <button className="remove-item-button" type="button">
                  <HiOutlineTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
