import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { getAuth } from "firebase/auth";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../firebase/Conexion.js"

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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1px',
        backgroundColor: isHovered ? '#f0f0f0' : 'transparent',
        borderRadius: '8px',
        padding: '16px',
        transition: 'background-color 0.3s ease',
        cursor: 'pointer',
        width: '220px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {avatar ? (
        <Avatar alt={user.email || "User"} src={avatar} sx={{ width: 80, height: 80 }} />
      ) : (
        <Avatar sx={{ width: 80, height: 80 }} />
      )}
      <div style={{ marginTop: '12px', textAlign: 'center' }}>
        <p style={{ marginBottom: '4px', color: 'gray' }}>{user.email || "User"}</p>
        {/* Mostrar los mensajes del usuario */}
        <ul>
          {mensajes.map(mensaje => (
            <li key={mensaje.id}>{mensaje.texto}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
