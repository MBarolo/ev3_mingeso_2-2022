import { Box, Button, Drawer, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Info from '../pages/Info'
export default function Cart({cart, showCart, closeCart}){
    const [total,setTotal] = useState(0);
    const calculateFinalPrice = ()=>{
        let newTotal = 0;
        for(let i = 0; i < cart.length; i++){
            newTotal = newTotal + parseInt(cart[i].price);
        }
        setTotal(newTotal);
        localStorage.setItem('final_price', newTotal);
    }
    
    const completePurchase = ()=>{
        localStorage.setItem('cart', JSON.stringify(cart));
        Navigate("/pedir/datos");
    }

    const cartContent = cart.map((order, index) => {
        return (
            <Box key={index}>
                <Box
                    display="flex"
                    alignItems="start"
                    sx={{pt:2, pb:2, pl:2}}
                    justifyContent={"space-between"}>

                    <Box display="flex" flexDirection={"column"} color="black">
                        <Typography color="black" variant="h5">{order.name}</Typography>
                        {order.ingredients.map((ing, index) =>{
                            return(
                                <li>{ing}</li>
                            )
                        })}
                        <Typography color="black" variant="h5">{"PRECIO: $" + order.price}</Typography>
                    </Box>
                </Box>
            </Box>
        
        )
    })

    return(
        <Drawer 
            open={showCart}
            anchor="right"
            onClick={()=>closeCart()}
            PaperProps={{
                sx:{
                    width: "25%",
                    background: "#C71100"
                }
            }}
            >
            <Box sx={{p:4}} display="flex" justifyContent={"center"} flexDirection="column" alignItems="left">
                <Typography variant="h4" color={"white"}>Carrito de compras</Typography>
                <Paper>{cartContent}</Paper>
                <Typography variant="h4" color={"white"}>Total: ${total}</Typography>
                <Button onClick={calculateFinalPrice}>[Actualizar precio]</Button>
                <Button variant="contained" href="/pedir/datos" onClick={completePurchase} color="success">[Pagar]</Button>
            </Box>
        </Drawer>
    )
}