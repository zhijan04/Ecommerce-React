import NavBar from './components/barranav/NavBar';
import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailCont from './components/itemDetailCont/ItemDetailCont';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter className= 'navbar'>

      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'¡Bienvenidos!'}/>}/>
          <Route path="/item/:id" element={<ItemDetailCont/>}/>
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path='productos/:categoria' element={<ItemListContainer/>}/>
        </Routes>
    </BrowserRouter>
  ); 
}

export default App;
