// import { Button, TextField, Grid, Paper } from "@mui/material";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { useState } from "react"
// import { collection,addDoc, getDocs } from "firebase/firestore"
// import {db} from "../../firebase/Conexion.js"
// import { getAuth } from "firebase/auth";
// import CurrentUser from './User'

// const auth = getAuth();
// const user = auth.currentUser;


// const EditProfile = () => {

  
//   const theme = createTheme({
//     components: {
//       paper: {
//       padding: '20px',
//       marginTop: '20px',
//     },
//     },
//   });

      
//     const [nombre,setNombre]= useState('');
//     const [apellido,setApellido]= useState('');
//     const [nombreUsuario,setNombreUsuario]= useState('');
    

//     const editarUsuarios = async (e)=>{
//       const usuario = {
//         nombre:nombre,
//         apellidos:apellido,
//         nombreUsuario:nombreUsuario


//       }
//         e.preventDefault();
//         const usuarios = collection(db,"usuarios");
//         console.log(usuario)
//         await addDoc (usuarios, usuario);
        
//     }
//   return (
//     <ThemeProvider theme={theme}>
//     <Grid container justifyContent="center">
//       <Grid item xs={12} sm={6}>
//         <Paper elevation={3}>
          
          
//           <div>
//           <CurrentUser />
//           </div>
          

//           <form onSubmit={editarUsuarios} method="get">
//             <TextField
//               value={nombre}
//               onChange={(e)=>setNombre(e.target.value)}
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               id="nombre"
//               label="Nombre"
//               name="nombre"
//               type="text"
//               autoComplete="text"
//               autoFocus
//             />
//             <TextField
//               value={apellido}
//               onChange={(e)=>setApellido(e.target.value)}
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               id="apellido"
//               label="Apellido"
//               name="apellido"
//               type="text"
//               autoComplete="text"
//             />
//             <TextField
//               value={nombreUsuario}
//               onChange={(e)=>setNombreUsuario(e.target.value)}
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               id="usuario"
//               label="Nombre de Usuario"
//               name="usuario"
//               type="text"
//               autoComplete="text"
//             />

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
              
//             >
//               Guardar
//             </Button >
//           </form>
//         </Paper>
//       </Grid>
//     </Grid>
//     </ThemeProvider>
//   );
// }

// export default EditProfile;

import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/Conexion.js";
import { getAuth } from "firebase/auth";
import { Button, TextField, Grid, Paper } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CurrentUser from "./User";

const auth = getAuth();
const user = auth.currentUser;

const EditProfile = () => {
  const theme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            padding: "20px",
            marginTop: "20px",
          },
        },
      },
    },
  });

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");

  const editarUsuarios = async (e) => {
    e.preventDefault();
    const usuario = {
      nombre: nombre,
      apellidos: apellido,
      nombreUsuario: nombreUsuario,
    };
    const usuarios = collection(db, "usuarios");
    console.log(usuario);
    await addDoc(usuarios, usuario);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Paper elevation={3}>
            <div>
              <CurrentUser />
            </div>

            <form onSubmit={editarUsuarios} method="get">
              <TextField
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                variant="outlined"
                margin="normal"
                fullWidth
                id="nombre"
                label="Nombre"
                name="nombre"
                type="text"
                autoComplete="text"
                autoFocus
              />
              <TextField
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                variant="outlined"
                margin="normal"
                fullWidth
                id="apellido"
                label="Apellido"
                name="apellido"
                type="text"
                autoComplete="text"
              />
              <TextField
                value={nombreUsuario}
                onChange={(e) => setNombreUsuario(e.target.value)}
                variant="outlined"
                margin="normal"
                fullWidth
                id="usuario"
                label="Nombre de Usuario"
                name="usuario"
                type="text"
                autoComplete="text"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Guardar
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default EditProfile;

