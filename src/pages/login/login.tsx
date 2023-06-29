import { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import "./login.css";
import { Button, Grid, TextField } from "@material-ui/core";
import { Typography, Box } from "@mui/material"
import UserLogin from '../../models/UserLogin';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/Action';
import { toast } from 'react-toastify';



function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
  
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>({
      id: 0,
      usuario: "",
      senha: "",
      token: "",
    })
  
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
      setUserLogin({
        ...userLogin,
        [e.target.name]: e.target.value,
      })
      
    }
  
    useEffect(() => {
      if (token != "") {
        dispatch(addToken(token))
        navigate("/home");
      }
    }, [token])
  
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault();

      try {
        await login(`/usuarios/logar`, userLogin, setToken);
        toast.success('Usuário logado com sucesso', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
      } catch (error) {
        toast.error('Dados não encontrados. Por favor, cadastre-se ou verifique suas informações', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
      }
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography
                            variant="h3"
                            gutterBottom
                            color="#CD853F"
                            component="h3"
                            align="center"
                            className="texto"
                        >
                            Entrar
                        </Typography>

                        <TextField
                            value={userLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="usuario"
                            label="usuário"
                            variant="outlined"
                            name="usuario"
                            margin="normal"
                            fullWidth
                        />

                        <TextField
                            value={userLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="senha"
                            label="senha com 8 digítos"
                            variant="outlined"
                            name="senha"
                            margin="normal"
                            type="password"
                            fullWidth
                        />

                        <Box marginTop={2} textAlign="center">

                            <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: "#CD853F" }}>
                                Logar
                            </Button>

                        </Box>

                    </form>

                    <Box display="flex" justifyContent="center" marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center">
                                Não possui uma conta?
                            </Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                align="center"
                                className="texto"
                            >
                                Cadastre-se aqui.
                            </Typography>
                        </Link>

                    </Box>
                </Box>
            </Grid>
            <Grid
                xs={6}
                className="imagem"
            ></Grid>
        </Grid>
    )
}

export default Login;