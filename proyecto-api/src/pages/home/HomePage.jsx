import * as React from 'react';
import { useState } from 'react';
import { Card, CssBaseline, Box, CardContent, Grid, Container,InputAdornment, TextField,Search as SearchIcon  }  from '@mui/material';
import DrawerLeft from '../../components/drawer/Drawer';
import UnderlineTabs from '../../components/tabs/Tabs1';
import { MdOutlineSettings } from 'react-icons/md';
import GiphyViewer from '../../components/apis/giphy/Giphy';
import LogOut from '../login/LogOut';
import MandarMensajes from '../../components/cards/CardMandarMensajes'; // Asegúrate de ajustar la ruta según sea necesario

const margenSup = '10px';

export default function HomePage() {
  const [mensajes, setMensajes] = useState([]);

  const handleNuevoMensaje = (mensaje) => {
    setMensajes(prevMensajes => [mensaje, ...prevMensajes]);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ marginLeft: '-10px', marginTo: '-80px' }}>
        <Grid container spacing={2}>
          {/* DrawerLeft */}
          <Grid item xs={12} md={3} sx={{ marginTop: margenSup, position: 'sticky', top: '0', alignSelf: 'flex-start' }}>
            <DrawerLeft selectedPath={'/home'} />
          </Grid>
          {/* Contenido centrado */}
          <Grid item xs={12} md={6} sx={{ marginTop: margenSup }}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                border="1px solid rgba(0, 0, 0, 0.1)" // Borde gris claro
                backgroundColor="transparent"
                borderRadius="1px"
                padding="0.1rem"
            >
                {/* <UnderlineTabs />
                <MdOutlineSettings size={20} color="black" /> */}
            </Box>
            <MandarMensajes onMessageSent={handleNuevoMensaje} />
            {/* <GiphyViewer /> */}
            
            {/* Mostrar los mensajes enviados */}
            {mensajes.map(mensaje => (
              <Card key={mensaje.id} sx={{ marginTop: '10px' }}>
                <CardContent>
                  <p>{mensaje.texto}</p>
                </CardContent>
              </Card>
            ))}
          </Grid>
          <Grid item xs={12} md={3} sx={{ marginTop: margenSup }}>
            <LogOut />
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: {
                  bgcolor: '#ffffff', // Fondo gris claro
                  borderRadius: '999px', // Borde redondeado
                  '& input': {
                    borderRadius: '999px', // Borde redondeado
                  },
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
