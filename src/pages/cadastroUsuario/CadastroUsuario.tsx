import { Button, Grid, TextField } from '@material-ui/core'
import { Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { cadastroUsuario } from '../../services/Service'
import { useState, useEffect, ChangeEvent } from 'react'
import User from '../../models/User'
import './CadastroUsuario.css'
import { toast } from 'react-toastify'

export default function CadastroUsuario() {
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<string>("")
    const [user, setUser] = useState<User>({
        id: 0, nome: "", usuario: "", senha: ""
    })

    const [userResult, setUserResult] = useState<User>({
        id: 0, nome: "", usuario: "", senha: ""
    })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult]

    )

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success('Usuário cadastrado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        } else {
            toast.error('Dados inconsistentes. Verifique as informações do cadastro.', {
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
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={6} className="imagemCadastro"></Grid>
                <Grid item xs={6} alignItems="center">
                    <Box paddingX={10}>
                        <form onSubmit={onSubmit}>
                            <Typography
                                variant="h3"
                                gutterBottom
                                color="white"
                                component="h3"
                                align="center"
                                className="textos2"
                            >
                                Cadastro
                            </Typography>

                            <TextField
                                value={user.nome}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id="nome"
                                label="nome"
                                variant="outlined"
                                name="nome"
                                margin="normal"
                                fullWidth
                            />

                            <TextField
                                value={user.usuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id="usuario"
                                label="usuario"
                                variant="outlined"
                                name="usuario"
                                margin="normal"
                                fullWidth
                            />

                            <TextField
                                value={user.senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id="senha"
                                label="senha com 8 dígitos"
                                variant="outlined"
                                name="senha"
                                margin="normal"
                                type="password"
                                fullWidth
                            />

                            <TextField
                                value={confirmarSenha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                                id="confirmar senha"
                                label="confirme senha com 8 dígitos"
                                variant="outlined"
                                name="confirmar senha"
                                margin="normal"
                                type="password"
                                fullWidth
                            />

                            <Box marginTop={2} textAlign="center">
                                <Link to="/login" className='text-decorator-none'>
                                    <Button

                                        className="btnCancelar"
                                        variant="contained"
                                        color="secondary"
                                        style={{ backgroundColor: "#F5DEB3" }}
                                    >
                                        Cancelar
                                    </Button>
                                </Link>

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    style={{ backgroundColor: "#CD853F" }}
                                    className="btnCadastrarse"
                                >
                                    Cadastrar-se
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}