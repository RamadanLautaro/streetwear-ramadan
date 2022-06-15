import './App.css';
import {NavBar} from './components/NavBar/NavBar.js';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js';
import {ItemCount} from './components/ItemCount/ItemCount.js';

function App() {

  return (
    <>
        <NavBar/>
        <ItemListContainer mensaje="UPS, PÁGINA EN MANTENIMIENTO..."/>
        <ItemCount stock="10" initial="1"/>
    </>
  );
}

export default App;