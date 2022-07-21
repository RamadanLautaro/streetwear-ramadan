import './App.css';
import { initializeApp } from "firebase/app";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import {NavBar} from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './components/CartContext/CartContext';
import firebaseConfig from './utils/firebaseConfig';
import { OrderComponent } from './components/Order/OrderComponent';

initializeApp(firebaseConfig);

function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:id" element={<ItemListContainer/>}/>
              <Route path="/item/:id" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/order" element={<OrderComponent/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;