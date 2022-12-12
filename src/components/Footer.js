import { Box } from "@mui/material";

export default function Footer(){
    return(
        <footer>
            <Box
                px={{xs: 2, sm: 10}}
                py={{xs:2, sm: 2}}
                bgcolor="#C71100"
                color="white"
                display="block"
                overflow="auto"
                style={{position: "fixed", bottom: 0, width: "90%"}}
            >
                
                <div class = "container">
                    <div class = "row" style={{float: 'left'}}>
                        
                            <li>
                                <a href = "/#" style={{color: "#ffffff", }}>Acerca de</a>
                            </li>
                            <li>
                                <a>Ubicación</a>
                            </li>
                            <li>
                                <a>Contacto</a>
                            </li>
                    </div>
                    <div style={{float: 'right'}}>
                        Síguenos en:
                        <li><a>Facebook</a></li>
                        <li><a>Instagram</a></li>
                    </div>
                </div>
            </Box>
        </footer>
    )
}