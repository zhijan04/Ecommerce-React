import NavBar from './components/barranav/NavBar';
import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailCont from './components/itemDetailCont/ItemDetailCont';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from "./contexto/CartContext"
import Carrito from './components/cart/carrito';
import Checkout from './components/checkout/Checkout';

function App() {

  return (
    <div>
      <CartProvider>
        <BrowserRouter className='navbar'>

          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={'¡Bienvenidos!'} />} />
            <Route path="/item/:id" element={<ItemDetailCont />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path='productos/:categoria' element={<ItemListContainer />} />
            <Route path= '/carrito' element= {<Carrito />} />
            <Route path= '/checkout' element= {<Checkout/>}/>
          </Routes>
        </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App;
