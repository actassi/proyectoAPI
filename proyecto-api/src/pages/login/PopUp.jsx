import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import appFirebase from "../../utils/credenciales";

const auth = getAuth(appFirebase);

const PopUp = ({ showPopup, togglePopup, isRegisteringMode }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAuthentication = async (e) => {
    e.preventDefault();
    const { username, password } = formData;
    try {
      if (isRegisteringMode) {
        await createUserWithEmailAndPassword(auth, username, password);
        console.log("Usuario creado exitosamente!");
      } else {
        await signInWithEmailAndPassword(auth, username, password);
        console.log("Inicio de sesión exitoso!");
      }
      setFormData({ username: "", password: "" });
      togglePopup();
    } catch (error) {
      console.error("Error:", error.message);
      alert("Usuario o contraseña incorrectos");
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("Inicio de sesión con Google exitoso!");
      togglePopup();
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      alert("Error al iniciar sesión con Google");
    }
  };

  return (
    <Modal show={showPopup} onHide={togglePopup} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isRegisteringMode ? "Crear Cuenta" : "Iniciar Sesión"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleAuthentication}>
          <Form.Group controlId="username">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre de usuario"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {isRegisteringMode ? "Crear Cuenta" : "Iniciar Sesión"}
          </Button>
          {isRegisteringMode && ( // Mostrar solo si está en modo registro
            <Button variant="secondary" onClick={handleGoogleSignIn}>
              Crear cuenta con Google
            </Button>
          )}
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default PopUp;
