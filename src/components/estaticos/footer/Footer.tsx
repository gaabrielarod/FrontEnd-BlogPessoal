import { Box } from '@mui/material';
import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css"

function Footer(){
    return(
        <>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid alignItems="center" item xs={12}>
                <Box  className="box1">
                    <Box
                    paddingTop={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    >
                        <Typography variant="h5" align="center" gutterBottom className="textoFooter">
                            Siga-me nas redes sociais
                        </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="import FacebookIcon from '@mui/icons-material/Facebook';" target="_blank">
                            <FacebookIcon className="redeSocial" />
                        </a>
                        <a href="import InstagramIcon from '@mui/icons-material/Instagram';" target="_blank">
                            <InstagramIcon className="redeSocial" />
                        </a>
                        <a href="import LinkedInIcon from '@mui/icons-material/LinkedIn';" target="_blank">
                            <LinkedInIcon className="redeSocial" />
                        </a>
                    </Box>
                </Box>

                <Box className="box2">
                    <Box paddingTop="{2}">
                        <Typography
                        variant="subtitle2"
                        align="center"
                        gutterBottom
                        className="textoFooter"
                        >
                            Desenvolvido com amor por Gabriela em Junho/2023 durante o curso da Generation

                        </Typography>
                    </Box>

                </Box>
            </Grid>
        </Grid>
        </>
    )
}

export default Footer;