import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { cloneDeep, forEach } from 'lodash';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import './app.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
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

  const getNumberOfCartItems = () => {
    let cartItemsLength = 0;
    cartItems.forEach((item) => {
      cartItemsLength += item.quantity;
    });
    return cartItemsLength;
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
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
