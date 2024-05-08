import  { useState } from "react";
//import imagen from "../../assets/";
import {appFirebase} from "../../firebase/Conexion";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(appFirebase);

const Login2 = () => {
  const [registrando, setRegistrando] = useState(false);

  const funcionDeAutenticacion = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    try {
      if (registrando) {
        // En caso de registro, utiliza la función createUserWithEmailAndPassword
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        // En caso de inicio de sesión, utiliza la función signInWithEmailAndPassword
        const requestBody = {
          email: email,
          password: password,
          returnSecureToken: true
        };
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      // Manejo de errores
      console.error("Error de autenticación:", error);
      alert("El usuario o la contraseña son incorrectos");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          {/* <img src={imagen} alt="" className="tamaño-imagen" /> */}
        </div>
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body">
              <form onSubmit={funcionDeAutenticacion}>
                <input type="text" placeholder="Ingresar email" id="email" />
                <input
                  type="password"
                  placeholder="Ingresar Contraseña"
                  id="password"
                />
                <button>
                  {registrando ? "Registrarse" : "Iniciar Sesion"}
                </button>
              </form>
              <h4>
                ¿Ya tienes cuenta?
                <button onClick={() => setRegistrando(!registrando)}>
                  {registrando ? "Iniciar Sesión" : "Registrarse"}
                </button>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login2;
