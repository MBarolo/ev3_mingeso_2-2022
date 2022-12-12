import NavBar from "./NavBar"
import Footer from "./Footer"
import pizza from "../img/pizza.png"
import Cart from "./Cart"
const Layout = ({
    children,
    cart,
    showCart,
    openCart,
    closeCart
}) => {
    return (
        <>
            <NavBar openCart={openCart} cart={cart}></NavBar>
            {<main style={{backgroundImage: `url(${pizza})`, backgroundSize: "cover"}} >{children}</main>}
            <Footer></Footer>
            <Cart cart={cart} showCart={showCart} closeCart={closeCart}></Cart>
        </>
    )
}
export default Layout