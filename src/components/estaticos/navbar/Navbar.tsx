import { AppBar, Toolbar } from "@material-ui/core";
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout() {
        setToken('')
        alert("Usuário deslogado")
        navigate('/login')
    }
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
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} style={{ cursor: "pointer", backgroundColor: "#CD853F" }}>
                                <Typography variant="h6" color="white">
                                    home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/postagens" className="text-decorator-none">
                            <Box mx={1} style={{ cursor: "pointer", backgroundColor: "#CD853F" }}>
                                <Typography variant="h6" color="white">
                                    postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={1} style={{ cursor: "pointer", backgroundColor: "#CD853F" }}>
                                <Typography variant="h6" color="white">
                                    temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioTema" className="text-decorator-none">
                            <Box mx={1} style={{ cursor: "pointer", backgroundColor: "#CD853F" }}>
                                <Typography variant="h6" color="white">
                                    cadastrar temas
                                </Typography>
                            </Box>
                        </Link>
                        
                            <Box mx={1} className="cursor" onClick={goLogout}>
                                <Typography variant="h6" color="white">
                                    logout
                                </Typography>
                            </Box>
                        


                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;