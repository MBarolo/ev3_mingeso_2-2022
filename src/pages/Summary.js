import { DataObjectSharp } from "@mui/icons-material";
import { Button, Card, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import pizzas from "../data/pizzas";

export default function Summary () {
    const confirm = ()=>{
        alert("Su pedido ha sido ingresado. El recibo se enviará a " + localStorage.getItem('email'));
    }
    const navigate = useNavigate();
    const cancel = () =>{
        navigate("/")
    }

    return(
        <Box background = "white" style={{paddingBottom:100}}>
            <Container maxWidth = "lg" color="white">
                <Typography variant="h4" style={{paddingTop:100, color:"white"}}>Confirmar pedido</Typography>
                <FormGroup>
                    <Card>

                        <div style={{width: "50%", float:"left"}}>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Nombre</TableCell>
                                            <TableCell>Tipo de masa</TableCell>
                                            <TableCell>Tamaño</TableCell>
                                            <TableCell>Cantidad de queso</TableCell>
                                            <TableCell>Tipo de queso</TableCell>
                                            <TableCell>Ingredientes</TableCell>
                                            <TableCell>Extras</TableCell>
                                            <TableCell>Precio</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            JSON.parse(localStorage.getItem('cart')).map((piz, index) =>{
                                                return(
                                                    <TableRow>
                                                        <TableCell>{piz.name}</TableCell>
                                                        <TableCell>{piz.dough_type}</TableCell>
                                                        <TableCell>{piz.pizza_size}</TableCell>
                                                        <TableCell>{piz.cheese_qty}</TableCell>
                                                        <TableCell>{piz.cheese_type}</TableCell>
                                                        <TableCell>{piz.ingredients.map((ing, index) => {
                                                            return(
                                                                <li>{ing}</li>
                                                            )
                                                        })}</TableCell>
                                                        <TableCell>{piz.extras.x.map((ex, index)=>{
                                                            return(
                                                                <li>{ex}</li>
                                                            )
                                                        }
                                                        )}</TableCell>
                                                        <TableCell>{"$" + piz.price}</TableCell>
                                                    </TableRow>
                                                )
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                        <div style={{width: "50%", float: "right", }}>
                            <div class = "row">
                                <Typography variant="h5" style={{marginLeft: 30, marginTop: 30,color:"black"}}>Datos</Typography>
                            </div>
                            <div class = "row">
                                <Typography variant="h7" style={{marginLeft: 30, marginTop: 30,color:"black"}}>Nombre: {localStorage.getItem('name')}</Typography>
                            </div>
                            <div class = "row">
                                <Typography variant="h7" style={{marginLeft: 30, marginTop: 30,color:"black"}}>Dirección: {localStorage.getItem('address')}</Typography>
                            </div>
                            <div class = "row">
                                <Typography variant="h7" style={{marginLeft: 30, marginTop: 30,color:"black"}}>Correo: {localStorage.getItem('email')}</Typography>
                            </div>
                            <div class = "row">
                                <Typography variant="h7" style={{marginLeft: 30, marginTop: 30,color:"black"}}>Boleta/Factura: {localStorage.getItem('receipt')}</Typography>
                            </div>
                            <div class = "row">
                                <Typography variant="h7" style={{marginLeft: 30, marginTop: 30,color:"black"}}>Método de pago: {localStorage.getItem('method')==="Retiro"?"Retiro en tienda (" + localStorage.getItem('tienda') + ")":localStorage.getItem('method')}</Typography>
                            </div>
                            <div class = "row">
                                <Typography variant="h7" style={{marginLeft: 30, marginTop: 30,color:"black"}}>Propina: {localStorage.getItem('tip')==="0"?"No": parseFloat( localStorage.getItem('tip'))*100+"%"}</Typography>
                            </div>
                            <div class = "row">
                                <Typography variant="h7" style={{marginLeft: 30, marginTop: 30,color:"black"}}>Monto final: {parseInt(localStorage.getItem('final_price')) + parseFloat(localStorage.getItem('tip'))*parseInt(localStorage.getItem('final_price'))}</Typography>
                            </div>
                            <div class = "row">
                                <Button style={{marginTop: 30, marginRight: 10, marginLeft: 30}} variant="contained" color="error" onClick={cancel}>Cancelar</Button>
                                <Button style={{marginTop: 30, alignContent:"center"}} variant="contained" color="success" >Siguiente</Button>
                            </div>
                        </div>
                        
                        
                    </Card>
                    
                    
                </FormGroup>
            </Container>
        </Box>
    )
}