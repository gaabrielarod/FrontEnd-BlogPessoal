import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className='barraHome'>
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1" className='todasPostagens'/>
            <Tab label="Sobre mim" value="2" className="sobre" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="tituloSobre">Sobre mim</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Sejam muito bem-vindos ao meu blog pessoal, um lugar onde irei falar sobre coisas que gosto e coisas que não gosto também! fiquem a vontade para visualizar o meu blog🧡 </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;