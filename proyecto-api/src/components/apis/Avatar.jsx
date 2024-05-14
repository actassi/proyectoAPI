import React, { useState, useEffect } from "react";
import axios from "axios";
import { Avatar } from "@mui/material";

const AvatarComponent = ({ showAvatar }) => { 
  const [randomGif, setRandomGif] = useState(null);

  const fetchGifs = async () => {
    try {
      const response = await axios.get(
        "https://api.giphy.com/v1/gifs/trending?",
        {
          params: {
            api_key: "3RIMrU9XBRB9rNEJ6zUxrB6hB7i2ad23",
            limit: 10, // Cantidad de GIFs a obtener
          },
        }
      );
      const data = response.data.data;

      // Selecciona un GIF aleatorio
      const randomIndex = Math.floor(Math.random() * data.length);
      setRandomGif(data[randomIndex]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchGifs();
  }, []);

  return (
    <div>
      <div>
        {randomGif && (
          <div>
            {showAvatar && (
              <Avatar alt={randomGif.username} src={randomGif.user?.avatar_url || ""} />
            )}
            {!showAvatar && <p>{randomGif.user?.display_name}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarComponent;
