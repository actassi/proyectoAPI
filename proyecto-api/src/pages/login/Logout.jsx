import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/Conexion"; // Importa 'auth' desde 'Conexion.js'

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.signOut(); // Utiliza 'auth' desde 'Conexion.js'
        navigate("/");
    };

    return (
        <Button variant="contained" color="primary" onClick={handleLogout}>
            Logout
        </Button>
    );
};

export default LogoutButton;

