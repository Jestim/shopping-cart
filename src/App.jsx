import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { cloneDeep, toInteger } from 'lodash';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import './app.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (e, product, quantityInput) => {
    console.log('handleAddToCart called');
    e.preventDefault();
    const quantity = toInteger(quantityInput);

    const cartItemsUpdated = cloneDeep(cartItems);

    for (let i = 0; i < cartItemsUpdated.length; i += 1) {
      if (cartItemsUpdated[i].id === product.id) {
        cartItemsUpdated[i].quantity += quantity;
        setCartItems(cartItemsUpdated);
        return;
      }
    }

    const addedProduct = cloneDeep(product);
    addedProduct.quantity += quantity;
    setCartItems([...cartItems, addedProduct]);
  };

  const handleIncreseItemQuantity = (product) => {
    const cartItemsUpdated = cloneDeep(cartItems);

    for (let i = 0; i < cartItemsUpdated.length; i += 1) {
      if (cartItemsUpdated[i].id === product.id) {
        cartItemsUpdated[i].quantity += 1;
        setCartItems(cartItemsUpdated);
        return;
      }
    }
  };

  const handleDecreseItemQuantity = (product) => {
    if (product.quantity === 1) {
      handleRemoveItem(product);
      return;
    }

    const cartItemsUpdated = cloneDeep(cartItems);

    for (let i = 0; i < cartItemsUpdated.length; i += 1) {
      if (cartItemsUpdated[i].id === product.id) {
        cartItemsUpdated[i].quantity -= 1;
        setCartItems(cartItemsUpdated);
        return;
      }
    }
  };

  const handleRemoveItem = (product) => {
    const cartItemsUpdated = cloneDeep(cartItems);

    for (let i = 0; i < cartItemsUpdated.length; i += 1) {
      if (cartItemsUpdated[i].id === product.id) {
        cartItemsUpdated.splice(i, 1);
        setCartItems(cartItemsUpdated);
        return;
      }
    }
  };

  const getNumberOfCartItems = () => {
    let cartItemsLength = 0;
    cartItems.forEach((item) => {
      cartItemsLength += item.quantity;
    });
    return cartItemsLength;
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  return (
    <BrowserRouter>
      <div className="main-container">
        <Header cartItemsLength={getNumberOfCartItems()} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                handleIncreseItemQuantity={handleIncreseItemQuantity}
                handleDecreseItemQuantity={handleDecreseItemQuantity}
                handleRemoveItem={handleRemoveItem}
                getTotalPrice={getTotalPrice}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
