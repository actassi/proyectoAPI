// import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";
// import DrawerLeft from "../../components/drawer/Drawer";
// import { InputAdornment, TextField } from "@mui/material";
// import { Search as SearchIcon } from "@mui/icons-material";
// import { useState, useEffect } from "react";
// import TraerMensajes from "../../components/cards/CardTraerMensajes";
// import BlueButton from "../../components/buttons/BlueButton";
// import EditProfileModal from "./EditProfileModal";
// import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// import { db } from '../../firebase/Conexion.js';

// const margenSup = "10px";

// export default function ProfilePage() {
//   const [mensajes, setMensajes] = useState([]);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const obtenerMensajes = async () => {
//       // Obtener el ID del usuario actual
//       const auth = getAuth();
//       const user = auth.currentUser;
//       const correo = user.email;
//       // Construir la consulta para obtener los mensajes del usuario actual
//       const mensajesQuery = query(
//         collection(db, "mensajes"),
//         where("correo", "==", correo), // Filtrar por el ID del usuario
//         orderBy("timestamp", "desc")
//       );
//       // Ejecutar la consulta
//       const mensajesSnapshot = await getDocs(mensajesQuery);
//       // Mapear los documentos a objetos JavaScript
//       const mensajesList = mensajesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       // Establecer los mensajes en el estado
//       setMensajes(mensajesList);
//     };
  
//     obtenerMensajes();
//   }, []);
  
//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="xl" sx={{ marginLeft: "-10px", marginTo: "-80px" }}>
//         <Grid container spacing={2}>
//           {/* DrawerLeft */}
//           <Grid
//             item
//             xs={12}
//             md={3}
//             sx={{
//               marginTop: margenSup,
//               position: "sticky",
//               top: "0",
//               alignSelf: "flex-start",
//             }}
//           >
//             <DrawerLeft />
//           </Grid>
//           {/* Contenido centrado */}
//           <Grid item xs={12} md={6} sx={{ marginTop: margenSup }}>
//             <TraerMensajes mensajes={mensajes} />
//           </Grid>
//           <Grid item xs={12} md={3} sx={{ marginTop: margenSup }}>
//             {/* Contenido aquí */}
//             <TextField
//               fullWidth
//               variant="outlined"
//               placeholder="Search..."
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <SearchIcon />
//                   </InputAdornment>
//                 ),
//                 sx: {
//                   bgcolor: "#ffffff",
//                   borderRadius: "999px",
//                   "& input": {
//                     borderRadius: "999px",
//                   },
//                 },
//               }}
//             />
//             <Box mt={2}>
//               <BlueButton onClick={handleOpen}>Editar Perfil</BlueButton>
//               <EditProfileModal open={open} handleClose={handleClose} />
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </React.Fragment>
//   );
// }

import * as React from 'react';
import { useState, useEffect } from 'react';
import { CssBaseline, Box, Grid, Container, TextField, InputAdornment } from '@mui/material';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from '../../firebase/Conexion.js';
import BlueButton from "../../components/buttons/BlueButton.jsx";
import EditProfileModal from "./EditProfileModal.jsx";

// import DrawerLeft from '../../components/drawer/Drawer';
// import { Search as SearchIcon } from '@mui/icons-material';
// import LogOut from '../login/LogOut';
// import MandarMensajes from '../../components/cards/CardMandarMensajes'; // Ajusta la ruta según sea necesario
// import GiphyViewer from '../../components/apis/giphy/Giphy'; // Importar GiphyViewer
// import TraerMensajes from '../../components/cards/CardTraerMensajes';

// const margenSup = '80px';

// export default function HomePage() {
//   const [mensajes, setMensajes] = useState([]);

//   useEffect(() => {
//     // Función para obtener los mensajes desde Firebase
//     const obtenerMensajes = async () => {
//       const mensajesSnapshot = await getDocs(collection(db, "mensajes"));
//       const mensajesList = mensajesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setMensajes(mensajesList.reverse()); // Ordenar los mensajes de último a primero
//     };

//     // Llamar a la función para obtener los mensajes cuando el componente se monta
//     obtenerMensajes();
//   }, []);

//   const handleNuevoMensaje = (mensaje) => {
//     setMensajes(prevMensajes => [mensaje, ...prevMensajes]);
//   };

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="lg" sx={{ marginLeft: '-10px', marginTop: '-80px' }}>
//         <Grid container spacing={2}>
//           {/* DrawerLeft */}
//           <Grid item xs={12} md={3} sx={{ marginTop: margenSup, position: 'sticky', top: '0', alignSelf: 'flex-start' }}>
//             <DrawerLeft selectedPath={'/home'} />
//           </Grid>
//           {/* Contenido centrado */}
//           <Grid item xs={12} md={6} sx={{ marginTop: margenSup }}>
//             <Box
//               display="flex"
//               alignItems="center"
//               justifyContent="space-between"
//               border="1px solid rgba(0, 0, 0, 0.1)" // Borde gris claro
//               backgroundColor="transparent"
//               borderRadius="1px"
//               padding="0.1rem"
//             >
//               {/* <UnderlineTabs />
//               <MdOutlineSettings size={20} color="black" /> */}
//             </Box>
//             <MandarMensajes onMessageSent={handleNuevoMensaje} />
//             {/* Mostrar los mensajes (ahora ordenados) */}
//             <TraerMensajes mensajes={mensajes} />
//             {/* Mostrar GiphyViewer */}
//             <GiphyViewer />
//           </Grid>
//           <Grid item xs={12} md={3} sx={{ marginTop: margenSup }}>
//             <LogOut />
//             <TextField 
//               fullWidth
//               variant="outlined"
//               placeholder="Search..."
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <SearchIcon />
//                   </InputAdornment>
//                 ),
//                 sx: {
//                   bgcolor: '#ffffff', // Fondo gris claro
//                   borderRadius: '999px', // Borde redondeado
//                   '& input': {
//                     borderRadius: '999px', // Borde redondeado
//                   },
//                 },
//               }}
//             />
//           </Grid>
//         </Grid>
//       </Container>
//     </React.Fragment>
//   );
// }




import DrawerLeft from '../../components/drawer/Drawer.jsx';
import { Search as SearchIcon } from '@mui/icons-material';
import MandarMensajes from '../../components/cards/CardMandarMensajes.jsx'; // Ajusta la ruta según sea necesario
import GiphyViewer from '../../components/apis/giphy/Giphy.jsx'; // Importar GiphyViewer
import TraerMensajes from '../../components/cards/CardTraerMensajes.jsx';
import UnderlineTabs from '../../components/tabs/Tabs1.jsx';
import { MdOutlineSettings } from 'react-icons/md';
import LogOut from '../login/LogOut.jsx'

const margenSup = '80px';

export default function ProfilePage() {
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    // Función para obtener los mensajes desde Firebase
    const obtenerMensajes = async () => {
      const mensajesQuery = query(collection(db, "mensajes"), orderBy("timestamp", "desc"));
      const mensajesSnapshot = await getDocs(mensajesQuery);
      const mensajesList = mensajesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMensajes(mensajesList); // Ya están ordenados por timestamp descendente
    };

    // Llamar a la función para obtener los mensajes cuando el componente se monta
    obtenerMensajes();
  }, []);

  const handleNuevoMensaje = (mensaje) => {
    setMensajes(prevMensajes => [mensaje, ...prevMensajes]);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ marginLeft: '-10px', marginTop: '-80px' }}>
        <Grid container spacing={2}>
          {/* DrawerLeft */}
          <Grid item xs={12} md={3} sx={{ marginTop: margenSup, position: 'sticky', top: '0', alignSelf: 'flex-start' }}>
            <DrawerLeft selectedPath={'/home'}  sx={{display: 'flex', height: '100%'}} />
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
              <UnderlineTabs />
              <MdOutlineSettings size={20} color="black" /> 
            </Box>
            
            {/* Mostrar los mensajes (ahora ordenados) */}
            <TraerMensajes mensajes={mensajes} />
            {/* Mostrar GiphyViewer */}
            <GiphyViewer />
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
