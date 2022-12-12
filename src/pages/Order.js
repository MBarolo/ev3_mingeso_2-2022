import { Typography, Box, Container, Grid } from "@mui/material";
import PizzaCard from "../components/PizzaCard";
import pizzas from "../data/pizzas"
const Order = ({addToCart}) => {
    return (
        <Box style={{paddingBottom:100}}>
            <Container maxWidth = "lg">
                <Typography variant="h4" style={{color: "#ffffff", paddingTop:15}}>Pedir pizzas</Typography>
                <Grid container justifyContent={"center"} sx={{margin:'20px 4px 10px 4px'}}>
                    {pizzas.map((piz, index) =>{
                        return (
                            <PizzaCard key={index} pizza = {piz} addToCart={addToCart}></PizzaCard>
                        )
                    })}
                </Grid>
            </Container>
        </Box>
    )
}
export default Order;