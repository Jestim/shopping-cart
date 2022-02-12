import { BrowserRouter } from 'react-router-dom';
import Header from './header/Header';
import RouteSwitch from './RouteSwitch';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <RouteSwitch />
      </BrowserRouter>
    </div>
  );
}

export default App;
