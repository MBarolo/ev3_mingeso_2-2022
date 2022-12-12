import { Container } from '@mui/system';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout'
import Home from './pages/Home'
import Order from './pages/Order'
import Info from './pages/Info'
import Payment from './pages/Payment';
import Summary from './pages/Summary';
function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const openCart =() =>{
    setShowCart(true);
  }
  const closeCart =() =>{
    setShowCart(false);
  }

  const addToCart = (order) =>{
    setCart([...cart, order]);
  }
  return (
    <Layout cart={cart} showCart={showCart} openCart={openCart}  closeCart = {closeCart}>
      <Container>
        <Routes>          
          <Route path="/" element={<Home />} exact/>
          <Route path="/pedir" element={<Order addToCart={addToCart} />}></Route>
          <Route path="/pedir/datos" element={<Info cart = {cart}></Info>}></Route>
          <Route path="/pedir/metodo" element={<Payment cart = {cart}></Payment>}></Route>
          <Route path="/pedir/finalizar" element={<Summary cart = {cart}></Summary>}></Route>
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;
