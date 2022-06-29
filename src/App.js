import './App.css';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import {NavBar} from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';


function App() {

  return (
    <>
        <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:id" element={<ItemListContainer/>}/>
              <Route path="/item/:id" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;