import { Button, Card, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Info () {
    const [tip, setTip] = useState(0);
    const handleTip = (e) =>{
        setTip(e.target.value);
    }
    const [receipt, setReceipt] = useState("Boleta");
    const handleReceipt = (e) =>{
        setReceipt(e.target.value);
    }
    const [name, setName] = useState("");
    const handleName = (e) =>{
        setName(e.target.value);
    }

    const [address, setAddress] = useState("");
    const handleAddress= (e) =>{
        setAddress(e.target.value);
    }

    const [email, setEmail] = useState("");
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const navigate = useNavigate()
    const next = ()=>{
        localStorage.setItem('name', name);
        localStorage.setItem('address', address);
        localStorage.setItem('email', email);
        localStorage.setItem('tip', tip);
        localStorage.setItem('receipt', receipt);
        navigate("/pedir/metodo");
    }
    const cancel = ()=>{
        navigate("/");
    }

    return(
        <Box background = "white" style={{paddingBottom:100}}>
            <Container maxWidth = "lg" color="white">
                <Typography variant="h4" style={{paddingTop:100, color:"white"}}>Ingreso de datos</Typography>
                <FormGroup>
                    <Card>

                        <div style={{width: "50%", float:"left"}}>
                            <div class = "row"><TextField label="Nombre" onChange={handleName} variant="outlined" style={{marginTop: 30, marginLeft: 30}}/></div>
                            <div class = "row"><TextField label="Dirección" onChange={handleAddress} variant="outlined" style={{marginTop: 30, marginLeft: 30}}/></div>
                            <div class = "row"><TextField label="Correo" onChange={handleEmail} variant="outlined" style={{marginTop: 30, marginLeft: 30}}/></div>
                            <div class = "row" >
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="Boleta"
                                    name="radio-buttons-group"
                                    style={{ marginTop: 30,marginLeft: 30, marginBottom: 50}}
                                >
                                    <FormControlLabel value="Boleta"control={<Radio onClick={handleReceipt}/>} label={"Boleta"} />
                                    <FormControlLabel value="Factura" control={<Radio onClick={handleReceipt}/>} label={"Factura"} />
                                </RadioGroup>
                            </div>
                        </div>
                        <div style={{width: "50%", float: "right", }}>
                            <div class = "row">
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="0"
                                    name="radio-buttons-group"
                                    style={{marginTop: 30}}
                                >
                                    <FormLabel id="demo-radio-buttons-group-label" variant="h3">Propina</FormLabel>
                                    <FormControlLabel value="0"control={<Radio onClick={handleTip}/>} label={"No"} />
                                    <FormControlLabel value="0.05" control={<Radio onClick={handleTip}/>} label={"5%"} />
                                    <FormControlLabel value="0.1" control={<Radio onClick={handleTip}/>} label={"10%"} />
                                </RadioGroup>
                            </div>
                            <div class = "row">
                                <Button style={{marginTop: 30, marginRight: 10}} variant="contained" color="error" onClick={cancel}>Cancelar</Button>
                                <Button style={{marginTop: 30}} variant="contained" color="success" onClick={next}>Siguiente</Button>
                            </div>
                        </div>
                        
                        
                    </Card>
                    
                    
                </FormGroup>
            </Container>
        </Box>
    )
}