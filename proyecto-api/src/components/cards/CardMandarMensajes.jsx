import { Avatar, Button, Card, CardContent, CardHeader, Grid } from '@mui/material';
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/Conexion.js";
import { getAuth } from "firebase/auth";

const MandarMensajes = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const avatar = user.photoURL
  const name = user.displayName

  const [texto, setTexto] = useState("");
  const [correo, setCorreo] = useState(user && user.email ? user.email : "");

  useEffect(() => {
    setCorreo(user && user.email ? user.email : "");
  }, [user]);

  const crearMensaje = async (e) => {
    e.preventDefault();
    const mensaje = {
      texto: texto,
      correo: correo
    };

    const mensajes = collection(db, "mensajes");
    console.log(mensaje);
    await addDoc(mensajes, mensaje);
  };

  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader
        avatar={
          <Avatar 
            alt={name}
            src={avatar}
            sx={{ width: 48, height: 48 }} >
          </Avatar>
        }
      />
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              onClick={crearMensaje} 
              variant="contained"
              sx={{
                borderRadius: '999px', 
                bgcolor: '#7abaff', 
                '&:hover': {
                  bgcolor: '#59a3f7', 
                },
              }}
            >
              Post
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default MandarMensajes;
