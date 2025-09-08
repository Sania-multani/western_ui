import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import Shop from './component/Shop';
import About from './component/About';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Login from './component/Login';
import Register from './component/Register';
import Profile from './component/Profile';
import Checkout from './component/Checkout';
import Cart from './component/Cart';

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route>
           <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/cart" element={<Cart/>}/>
           </Route>
      </Route>
    </Routes>
    </BrowserRouter>

   </>
  );
}

export default App;
