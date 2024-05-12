import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function UserProfile() {
  const [isHovered, setIsHovered] = React.useState(false);

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
        alignItems: 'center', 
        gap: '1px',
        backgroundColor: isHovered ? '#f0f0f0' : 'transparent',
        borderRadius: '999px',
        padding: '8px', // Ajuste del padding
        transition: 'background-color 0.3s ease',
        cursor: 'pointer',
        marginLeft: '-66px',
        width: '220px',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Avatar alt="Jorge" src="Foto CV.jpg" sx={{ width: 40, height: 40 }} />
      <div style={{ flex: 1 }}>
        <p style={{ marginBottom: '0', fontWeight: 'bold', color: 'black' }}>Jorge Martinez</p>
        <p style={{ marginBottom: '0', color: 'gray' }}>@JorgeMa12345</p>
      </div>
      <div style={{ flex: 1 }}>
      <IconButton > 
        <MoreHorizIcon />
      </IconButton>
      </div>
    </div>
  );
}