import { Avatar, Button, Card, CardContent, CardHeader, Grid, TextField } from '@mui/material';
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/Conexion.js";
import { getAuth } from "firebase/auth";

const MandarMensajes = ({ onMessageSent }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const avatar = user.photoURL;
  const name = user.displayName;

  const [texto, setTexto] = useState("");
  const [correo, setCorreo] = useState(user && user.email ? user.email : "");

  useEffect(() => {
    setCorreo(user && user.email ? user.email : "");
  }, [user]);

  const crearMensaje = async (e) => {
    e.preventDefault();
    if (texto.trim() === "") return; // Evitar enviar mensajes vacíos

    const mensaje = {
      texto: texto,
      correo: correo,
      timestamp: new Date(), // Agregar un timestamp al mensaje
    };

    const mensajes = collection(db, "mensajes");
    const docRef = await addDoc(mensajes, mensaje);
    const newMensaje = { id: docRef.id, ...mensaje };

    setTexto(""); // Limpiar el campo de texto después de enviar el mensaje

    if (onMessageSent) {
      onMessageSent(newMensaje);
    }
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
        title={name}
      />
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Escribe tu mensaje..."
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '999px',
                  backgroundColor: 'transparent',
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'transparent',
                  },
                  '& input': {
                    color: 'black', // Ajustar el color del texto según sea necesario
                  },
                  '&::placeholder': {
                    color: 'gray', // Ajustar el color del placeholder según sea necesario
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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
