import { Box, Button, Card, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
    const [method, setMethod] = useState("Retiro");
    const handleMethod = (e) =>{
        setMethod(e.target.value);
    }
    const [tienda, setTienda] = useState("Tienda 1");
    const handleTienda=(e)=>{
        setTienda(e.target.value);
    }
    const navigate = useNavigate()
    const next = ()=>{
        localStorage.setItem('method', method);
        localStorage.setItem('tienda', tienda);
        navigate("/pedir/finalizar");
    }
    return(
        <Box style={{paddingBottom:300}}>
            <Typography variant="h4" style={{paddingTop: 100, marginBottom: 25, marginLeft: 30, color:"white"}}>Método de pago</Typography>
            <Card>
                <div class = "row">
                        <div style={{width: "50%", float: "left"}}>
                        <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Retiro"
                        name="radio-buttons-group"
                        style={{marginTop: 30, marginLeft: 30, marginBottom: 30}}
                    >
                            <div class = "row" ><FormControlLabel value="Retiro"control={<Radio onClick={handleMethod}/>} label={"Retiro en tienda"} /></div>
                            <div class = "row" ><FormControlLabel value="Efectivo"control={<Radio onClick={handleMethod}/>} label={"Efectivo "} /></div>
                            <div class = "row" ><FormControlLabel value="Webpay" control={<Radio onClick={handleMethod}/>} label={"Webpay"} /></div>
                            </RadioGroup>
                        </div>
                        <div style={{width: "50%", float: "right"}}>
                            <div class = "row">
                                <InputLabel style={{marginTop: 30}}>Tienda</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={tienda}
                                    label="Tienda"
                                    onChange={handleTienda}
                                    disabled={method==="Retiro"?false:true}
                                >
                                    <MenuItem value={"Tienda 1"}>Tienda 1</MenuItem>
                                    <MenuItem value={"Tienda 2"}>Tienda 2</MenuItem>
                                    <MenuItem value={"Tienda 3"}>Tienda 3</MenuItem>
                                </Select>

                            </div>
                            <div class = "row">
                                <Button style={{marginTop: 30}} variant="contained" color="success" onClick={next}>Siguiente</Button>
                            </div>
                        </div>
                        
                </div>
            </Card>
        </Box>
    )
}
export default Payment