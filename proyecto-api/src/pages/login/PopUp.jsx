import React, { useState } from "react";
import appFirebase from "../../utils/credenciales";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
  } from "firebase/auth";
  
const auth = getAuth(appFirebase);


const PopUp = () => {
    const [registrando, setRegistrando] = useState(false);
  
    const funcionDeAutenticacion = async (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      if (registrando) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        try {
          await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
          alert("el usuario o contraseña es incorrecto", error);
        }
      }
    };
  
    async function registrarseConGoogle() {
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
      } catch (error) {
        console.error("Error al autenticarse con Google:", error);
        // Maneja el error adecuadamente (p. ej., muestra un mensaje al usuario)
      }
    }
  
    return (
   < >
              <form onSubmit={funcionDeAutenticacion}>
                <input type="text" placeholder="Ingresar email" id="email" />
                <input
                  type="password"
                  placeholder="Ingresar Contraseña"
                  id="password"
                />
                <button>{registrando ? "Registrarse" : "Iniciar Sesion"}</button>
              </form>
             
              
              </>
    );
  };
  
  export default PopUp;
  