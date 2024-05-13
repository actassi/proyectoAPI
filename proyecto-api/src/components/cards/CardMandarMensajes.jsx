import { Avatar, Button, Card, CardContent, CardHeader, Grid } from '@mui/material';
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/Conexion.js";
import { getAuth } from "firebase/auth";

const CardPersonal = () => {
  const auth = getAuth();
  const user = auth.currentUser;

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
            alt="Remy Sharp"
            src="Foto CV.jpg"
            sx={{ width: 48, height: 48 }} >
          </Avatar>
        }
      />
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              onClick={crearMensaje} // Cambiado a onClick en lugar de onSubmit
              variant="contained"
              sx={{
                borderRadius: '999px', // Hace que el botón sea redondeado
                bgcolor: '#7abaff', // Color azul claro
                '&:hover': {
                  bgcolor: '#59a3f7', // Color azul claro más claro al pasar el cursor
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

export default CardPersonal;
