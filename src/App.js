import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='navbar'>
      <NavBar/>
      <ItemListContainer greeting={'¡Bienvenidos!'}/>
          </div>
  );
}

export default App;
