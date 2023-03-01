import { HashRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.js';
import { DataProvider } from './components/Context.js';
import Products from './components/products/Products.js';
import Detail from './components/detail/Detail.js';
import Cart from './components/cart/Cart.js';
import Home from './components/home/Home.js';
function App() {
  return (
    <DataProvider>
      <div className="main-website">
        <div className="container">
          <HashRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/products' element={<Products />}></Route>
              <Route path='/products/:id' element={<Detail />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
            </Routes>

          </HashRouter>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
