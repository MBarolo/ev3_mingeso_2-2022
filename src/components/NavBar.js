import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Button, Toolbar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
export default function NavBar({cart, openCart}){
    return(
        <AppBar position="fixed" style={{background: '#C71100'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography href = "/" variant = "h5">Pizzas</Typography>
                    <Box
                        sx = {{
                            marginLeft: 5,
                            flexGrow: 1,
                            display: {xs: "none", md: "flex"},
                            justifyContent: "left",
                            alignItems: "left",
                            mr: 20
                        }}>
                            <Button href = "/pedir" sx={{my: 2, px: 2, color: "white", display: "block"}}>PEDIR</Button>  
                    </Box>
                    <Box>
                        <Badge badgeContent={cart && cart.length}> 
                            <ShoppingCart onClick={()=> {openCart(); console.log("CARRO: "+cart)}}/>
                        </Badge>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}