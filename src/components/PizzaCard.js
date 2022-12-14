import { ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useState } from "react";
import extrasData from "../data/extras";
import pizzas from "../data/pizzas";
export default function PizzaCard({pizza, addToCart}){
    
    const [openDialog, setOpenDialog] = useState(false);
    const [dough_type, setDough_type] = useState("Normal");
    const handleDoughType = (e) => {
        setDough_type(e.target.value);
    }
    const [cheese_type, setCheese_type] = useState("Normal");
    const handleCheeseType = (e) => {
        setCheese_type(e.target.value);
    }
    const [cheese_qty, setCheese_qty] = useState("Normal");
    const handleCheeseQty = (e) => {
        setCheese_qty(e.target.value);
    }

    const [pizza_size, setPizza_size] = useState("Personal");
    const handlePizza_size = (e) =>{
        setPizza_size(e.target.value);
    }

    const [extras, setExtras] = useState({x: []});
    const handleExtra = (e) => {
        const {value, checked} = e.target;
        const {x} = extras;
        if(checked){
            setExtras({x: [...x, value]});
        }
        else{
            setExtras({x: x.filter((e)=> e!==value)});
        }
    }

    const [total, setTotal] = useState(pizza.price);
    const handleTotal = () =>{
        let newTotal = parseInt(pizza.price);
        if(cheese_qty === "Extra"){
            newTotal = newTotal + pizza.price*0.1
        }
        if(cheese_qty === "Doble"){
            newTotal = newTotal + pizza.price*0.2
        }
        if(pizza_size === "Mediana"){
            newTotal = newTotal + pizza.price*0.3
        }
        if(pizza_size === "Familiar"){
            newTotal = newTotal + pizza.price*0.4
        }
        
        for(let i = 0; i < extras.x.length; i ++){
            let string = extras.x.toString().split(',');
            newTotal = newTotal + parseInt(string[1]);
        }
        console.log(newTotal);
        setTotal(newTotal);
    }
    const [ingredients, setIngredients] = useState({y:[]})
    const handleIngredients = (e) =>{
        const {value, checked} = e.target;
        const {y} = ingredients;
        if(checked){
            setIngredients({y: [...y, value]});
        }
        else{
            setIngredients({y: y.filter((e)=> e!==value)});
        }
        console.log(ingredients);
    }
    const clickAddToCart = () => {
        setOpenDialog(true);
    }
    const clickCancel = () =>{
        setOpenDialog(false);
    }

    const generateOrder =() =>{
        if(pizza.name === "PERSONALIZADA"){
            let order = {
                'name': pizza.name,
                'dough_type': dough_type,
                'pizza_size': pizza_size,
                'cheese_type': cheese_type,
                'cheese_qty': cheese_qty,
                'ingredients': ingredients.y,
                'extras': extras,
                'price': total
            }
            addToCart(order);
            clickCancel();
        }
        else{
            let order = {
                'name': pizza.name,
                'dough_type': dough_type,
                'pizza_size': pizza_size,
                'cheese_type': cheese_type,
                'cheese_qty': cheese_qty,
                'ingredients': pizza.ingredients,
                'extras': extras,
                'price': total
            }
            clickCancel();
            addToCart(order);
        }
    }

    return (
        <div>
            <Card sx = {{width: 325, marginLeft: 3, marginBottom: 3}}>
                <CardMedia component ="img" height="200" image={pizza.img}></CardMedia>
                <CardContent>
                    <Typography>
                        <h2>{pizza.name}</h2>
                        <div class="row">Ingredientes:
                        {pizza.ingredients.map((piz, index) =>{
                            return (
                                <li style={{marginLeft: 5}} key={index}>{piz}</li>
                            )
                        })}
                        </div>
                        <div class ="row" ><h4>Precio: ${pizza.price}</h4></div>
                    </Typography>
                </CardContent>
                <CardActions>
                    {pizza.name==="PERSONALIZADA"?
                        <Button color="success" size="small" endIcon=<ShoppingCart/> onClick={clickAddToCart}>Personalizar</Button>
                        :<Button color="success" size="small" endIcon=<ShoppingCart/> onClick={clickAddToCart}>Añadir al carrito</Button>}
                </CardActions>
            </Card>
            <Dialog open={openDialog}>
                <DialogTitle>{pizza.name + "  Total: $" + total}</DialogTitle>
                <Button onClick={handleTotal}>Actualizar precio</Button>
                <DialogContent>
                    <FormGroup>
                        <FormLabel id="demo-radio-buttons-group-label">Tipo de masa</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Normal"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="Normal" control={<Radio onClick={handleDoughType}/>} label="Normal" />
                            <FormControlLabel value="Delgada" control={<Radio onClick={handleDoughType}/>} label="Delgada" />
                        </RadioGroup>

                        <FormLabel id="demo-radio-buttons-group-label">Tipo de queso</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Gouda"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="Gouda" control={<Radio onClick={handleCheeseType}/>} label="Gouda" />
                            <FormControlLabel value="Mozzarella" control={<Radio onClick={handleCheeseType}/>} label="Mozzarella" />
                        </RadioGroup>

                        <FormLabel id="demo-radio-buttons-group-label">Cantidad de queso</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Normal"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="Normal" control={<Radio onClick={handleCheeseQty}/>} label={"Normal +$" + 0} />
                            <FormControlLabel value="Extra" control={<Radio onClick={handleCheeseQty}/>} label={"Extra +$" + pizza.price*0.1} />
                            <FormControlLabel value="Doble" control={<Radio onClick={handleCheeseQty}/>} label={"Doble +$" + pizza.price*0.2} />
                        </RadioGroup>

                        <FormLabel id="demo-radio-buttons-group-label">Tamaño</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Personal"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="Personal"control={<Radio onClick={handlePizza_size}/>} label={"Personal +$" +0} />
                            <FormControlLabel value="Mediana" control={<Radio onClick={handlePizza_size}/>} label={"Mediana +$" +0.3*pizza.price} />
                            <FormControlLabel value="Familiar" control={<Radio onClick={handlePizza_size}/>} label={"Familiar +$" +0.4*pizza.price} />
                        </RadioGroup>

                        <FormLabel id="demo-radio-buttons-group-label">Ingredientes</FormLabel>
                        {pizzas.find(element=> element.name === "PERSONALIZADA").ingredients.map((ing, index) =>{
                            return(
                                <FormControlLabel disabled= {pizza.name==="PERSONALIZADA"?false:true} value = {ing} control={<Checkbox onClick={handleIngredients}/>} label= {ing} />
                            )
                        })}

                        <FormLabel id="demo-radio-buttons-group-label">Extras</FormLabel>
                        {extrasData.map((ex, index) =>{
                            return (
                                <FormControlLabel value = {[ex.name, ex.price]} control={<Checkbox onClick={handleExtra}/>} label= {ex.name + "  +$" + ex.price} />
                            )
                        })}
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button size="small" color="error" onClick={clickCancel}>Cancelar</Button>
                    <Button size="small" onClick={generateOrder} endIcon = <ShoppingCart/> >Añadir al carrito</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}