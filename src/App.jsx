import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/header/Header';
import RouteSwitch from './components/RouteSwitch';
import './app.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <div>
        <Header cartItemsLength={cartItems.length} />
        <RouteSwitch />
      </div>
    </BrowserRouter>
  );
}

export default App;
