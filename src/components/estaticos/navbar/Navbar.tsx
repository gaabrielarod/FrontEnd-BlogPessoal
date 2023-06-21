import { AppBar, Toolbar, Box } from "@material-ui/core";
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: "#CD853F" }}>
                <Toolbar variant="dense">
                    <Box paddingRight={3} style={{ cursor: "pointer", backgroundColor: "#CD853F" }}>
                        <Typography variant="h5" color="white">
                            Blog Pessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer", backgroundColor: "#CD853F" }}>
                            <Typography variant="h6" color="white">
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer", backgroundColor: "#CD853F" }}>
                            <Typography variant="h6" color="white">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer", backgroundColor: "#CD853F" }}>
                            <Typography variant="h6" color="white">
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer", backgroundColor: "#CD853F" }}>
                            <Typography variant="h6" color="white">
                                cadastrar temas
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer", backgroundColor: "#CD853F" }}>
                                <Typography variant="h6" color="white">
                                    logout
                                </Typography>
                            </Box>
                        </Link>


                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;