import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { getAuth } from "firebase/auth";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../firebase/Conexion.js";
import { Card, CardContent, Grid, Typography } from '@mui/material';

export default function TraerMensajes() {
  const [isHovered, setIsHovered] = useState(false);
  const [mensajes, setMensajes] = useState([]);
  const [avatar, setAvatar] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    // Función para obtener los mensajes del usuario actual
    const obtenerMensajesUsuario = async () => {
      if (user) {
        const q = query(collection(db, "mensajes"), where("correo", "==", user.email));
        const querySnapshot = await getDocs(q);
        const mensajesUsuario = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMensajes(mensajesUsuario);
        setAvatar(user.photoURL ? user.photoURL : "");
      }
    };

    // Llamar a la función para obtener los mensajes del usuario actual
    obtenerMensajesUsuario();
  }, [user]); // Ejecutar el efecto cada vez que cambie el usuario

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Grid container spacing={2}>
      {mensajes.map(mensaje => (
        <Grid item xs={12} key={mensaje.id}>
          <Card
            style={{
              marginTop: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '1px',
              backgroundColor: isHovered ? '#f0f0f0' : 'transparent',
              borderRadius: '8px',
              padding: '16px',
              transition: 'background-color 0.3s ease',
              cursor: 'pointer',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              width: '100%', // Ancho de la card ajustado al contenedor
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Avatar
              alt={user.email || "User"}
              src={avatar}
              sx={{ width: 40, height: 40, marginRight: '10px' }} // Tamaño pequeño
            />
            <div>
              <Typography variant="subtitle2">{user.email || "User"}</Typography>
              <Typography variant="body1">{mensaje.texto}</Typography>
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
