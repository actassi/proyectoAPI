// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import { useEffect, useState } from 'react';
// import * as React from 'react';
// import { getAuth } from "firebase/auth";
// import {collection,getDocs , deleteDoc ,doc} from "firebase/firestore"
// import {db} from "../../firebase/Conexion.js"

// export const Show =()=> { 
//     //1 configurar los hooks
//     const [mensajes,setMensajes]=useState([])
//     //2 referenciamos a la base de firebase
//     const mensajesCollection = collection(db,"mensajes")
//     //3 funcion para mostrar todos los docs
//     const getMensajes = async ()=>{
//         const data = await getDocs(mensajesCollection)
//         /* console.log(" Estamos por aca") */
//          /* console.log(data.docs); */ 
//         setMensajes(
//             data.docs.map((doc)=>({...doc.data(),id:doc.id}))
            
//         )
//         /* console.log(books)  */
//     }
// }


// export default function CardPersonal() {
//   const [isHovered, setIsHovered] = React.useState(false);
//   const [avatar, setAvatar] = useState("");
//   const auth = getAuth();
//   const user = auth.currentUser;

//   useEffect(() => {
    
//     setAvatar(user && user.photoURL ? user.photoURL : "");
//   }, []);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: '1px',
//         backgroundColor: isHovered ? '#f0f0f0' : 'transparent',
//         borderRadius: '8px',
//         padding: '16px',
//         transition: 'background-color 0.3s ease',
//         cursor: 'pointer',
//         width: '220px',
//         boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//       }}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {avatar ? (
//         <Avatar alt={user.email || "User"} src={avatar} sx={{ width: 20, height: 20 }} />
//       ) : (
//         <Avatar sx={{ width: 20, height: 20 }} />
//       )}
//       <div style={{ marginTop: '12px', textAlign: 'center' }}>
//         <p style={{ marginBottom: '4px', color: 'gray' }}>{user.email || "User"}</p>
        

//       </div>
//       {/* <IconButton style={{ marginTop: '12px' }}>
//         <MoreHorizIcon />
//       </IconButton> */}

//       <div>
//      Show()

//       </div>
//     </div>
//   );
// }

import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { getAuth } from "firebase/auth";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../firebase/Conexion.js"

export default function TraerMensajes() {
  const [isHovered, setIsHovered] = React.useState(false);
  const [avatar, setAvatar] = useState("");
  const [mensajes, setMensajes] = useState([]);
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
      }
    };

    setAvatar(user && user.photoURL ? user.photoURL : "");

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
        <Avatar alt={user.email || "User"} src={avatar} sx={{ width: 20, height: 20 }} />
      ) : (
        <Avatar sx={{ width: 20, height: 20 }} />
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

