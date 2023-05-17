import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductsScreen from '../src/screens/ProductsScreen'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path='/products' element={<ProductsScreen />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </ChakraProvider>

  );
}

export default App;
