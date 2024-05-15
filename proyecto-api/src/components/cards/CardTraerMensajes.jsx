import Avatar from '@mui/material/Avatar';
import { Card, CardContent, Box } from '@mui/material';
import * as React from 'react';

const TraerMensajes = ({ mensajes }) => {
  if (!mensajes) {
    return <div>No hay mensajes disponibles</div>;
  }

  return (
    <div>
      {mensajes.map((mensaje) => (
        <Card 
          key={mensaje.id} 
          sx={{ 
            marginTop: '10px', 
            width: '100%', 
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar alt={mensaje.correo} src={mensaje.photoURL || ""} sx={{ width: 40, height: 40, marginRight: '10px' }} />
              <Box>
                <p style={{ marginBottom: '4px', color: 'gray' }}>{mensaje.correo}</p>
                <p>{mensaje.texto}</p>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TraerMensajes;
