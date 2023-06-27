import { AppBar, Toolbar } from "@material-ui/core";
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokenReducer";
import { addToken } from "../../../store/tokens/Action";

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        alert("Usuário deslogado")
        navigate('/login')
    }
    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static" style={{ backgroundColor: "#CD853F" }}>
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
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;