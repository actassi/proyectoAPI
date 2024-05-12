// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useEffect, useState } from 'react';
import * as React from 'react';
import CurrentUser from "../../pages/profile/User";

export default function CardPersonal() {
  const [isHovered, setIsHovered] = React.useState(false);
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    
    setAvatar(CurrentUser && CurrentUser.photoURL ? CurrentUser.photoURL : "");
  }, []);

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
        <Avatar alt={CurrentUser.displayName || "User"} src={avatar} sx={{ width: 80, height: 80 }} />
      ) : (
        <Avatar sx={{ width: 80, height: 80 }} />
      )}
      <div style={{ marginTop: '12px', textAlign: 'center' }}>
        <p style={{ marginBottom: '4px', fontWeight: 'bold', color: 'black' }}>{CurrentUser.displayName || "User"}</p>
        <p style={{ marginBottom: '4px', color: 'gray' }}>@{CurrentUser.displayName || "User"}</p>
        {/* Agrega otros detalles del usuario aquí */}
      </div>
      <IconButton style={{ marginTop: '12px' }}>
        <MoreHorizIcon />
      </IconButton>
    </div>
  );
}
