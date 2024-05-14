import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import DrawerLeft from "../../components/drawer/Drawer";
import CardPersonal from "../../components/cards/CardPersonal";
import { InputAdornment, TextField } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import "./notificaciones.css";
import Megusta from "../../components/buttons/Megusta";
import AvatarComponent from "../../components/apis/Avatar"
const margenSup = "10px";

export default function ProfilePage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ marginLeft: "-10px", marginTo: "-80px" }}>
        <Grid container spacing={2}>
          {/* DrawerLeft */}
          <Grid item xs={12} md={3}>
            <DrawerLeft selectedPath={"/notifications"} />

          </Grid>
          {/* Contenido centrado */}
          <div
            className="notificacion"
           
          >
            <div className="box">
              <div className="contenedorImagen">
                <div className="img1">
                <Megusta icon="notification" color="rgb(29, 155, 240)" />
                </div>
              </div>
              <div className="card">
                
                
                <AvatarComponent showAvatar={true} />
                <p className="etiquetaP">Nuevas notificaciones de posts para <b> <AvatarComponent showAvatar={false} /></b></p>
              </div>
            </div>
            <div className="box">
              <div className="contenedorImagen">
                <div className="img1">
                <Megusta icon="favorite" color="rgb(249, 24, 128)" />
                </div>
              </div>
              <div className="card">
                
                
                <AvatarComponent showAvatar={true} />
                <p className="etiquetaP"><b> <AvatarComponent showAvatar={false} /></b> Indico que le gusta tu publicacion </p>
              </div>
            </div>
            <div className="box">
              <div className="contenedorImagen">
                <div className="img1">
                <Megusta icon="favorite" color="rgb(249, 24, 128)" />
                </div>
              </div>
              <div className="card">
                
                
                <AvatarComponent showAvatar={true} />
                <p className="etiquetaP"><b> <AvatarComponent showAvatar={false} /></b> Indico que le gusta tu publicacion </p>
              </div>
            </div>
          </div>
          <Grid item xs={12} md={3} sx={{ marginTop: margenSup }}>
            {/* Contenido aquí */}
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
                  bgcolor: "#ffffff", // Fondo gris claro
                  borderRadius: "999px", // Borde redondeado
                  "& input": {
                    borderRadius: "999px", // Borde redondeado
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
