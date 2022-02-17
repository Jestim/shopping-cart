import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { cloneDeep } from 'lodash';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import './app.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  const handleAddToCart = (product) => {
    console.log('handleAddToCart called');

    const cartItemsUpdated = cloneDeep(cartItems);

    for (let i = 0; i < cartItemsUpdated.length; i += 1) {
      if (cartItemsUpdated[i].id === product.id) {
        cartItemsUpdated[i].quantity += 1;
        setCartItems(cartItemsUpdated);
        return;
      }
    }

    const addedProduct = cloneDeep(product);
    addedProduct.quantity = 1;
    setCartItems([...cartItems, addedProduct]);
  };

  const handleIncreseItemQuantity = (product) => {
    console.log('handleIncreseItemQuantity called');

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
    console.log('handleDecreseItemQuantity called');

    if (product.quantity === 1) {
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
    console.log('handleRemoveItem called');

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
    console.log('getNumberOfCartItems called');

    let cartItemsLength = 0;
    cartItems.forEach((item) => {
      cartItemsLength += item.quantity;
    });
    return cartItemsLength;
  };

  const getTotalPrice = () => {
    console.log('getTotalPrice called');

    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  return (
    <BrowserRouter>
      <div>
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
