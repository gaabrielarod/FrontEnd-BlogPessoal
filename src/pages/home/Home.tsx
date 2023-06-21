import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { Box, Typography } from '@mui/material'
import "./home.css"
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

function Home(){
    return(
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{ backgroundColor: "#F5DEB3"}}
            >
                <Grid alignItems="center" item xs={6}>
                    <Box padding={13}>

                        <Typography
                            variant="h3"
                            gutterBottom
                            color="textPrimary"
                            component="h3"
                            align="center"
                            className= "titulo"
                        >
                            Bem vindo ao meu Blog!
                        </Typography>

                        <Box display="flex" justifyContent="center">
                            <Box marginRight={1}></Box>
                            <Button
                            variant="outlined"
                            className="botao"
                            >
                                Ver postagens
                            </Button>
                        </Box>

                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <img 
                    src="https://www.pngkey.com/png/full/416-4164667_0-mandala-png.png" 
                    alt="Foto de uma reunião entre pessoas"
                    style={{ width: "550px", borderRadius: "20px" }} 
                    />

                </Grid>
                <Grid xs={12} className="postagens">
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );

}

export default Home;