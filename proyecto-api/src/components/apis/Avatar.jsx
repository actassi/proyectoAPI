import React, { useState, useEffect } from "react";
import axios from "axios";
import { Avatar } from "@mui/material";

const AvatarComponent = ({ showAvatar }) => { 
  const [gifs, setGifs] = useState([]);

  const fetchGifs = async () => {
    try {
      const response = await axios.get(
        "https://api.giphy.com/v1/gifs/trending?",
        {
          params: {
            api_key: "3RIMrU9XBRB9rNEJ6zUxrB6hB7i2ad23",
            limit: 5, // Cantidad de GIFs a obtener
          },
        }
      );
      const data = response.data.data;

      setGifs(data);
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
        {gifs.map((gif, index) => (
          <div key={index}>
            {showAvatar && (
              <Avatar alt={gif.username} src={gif.user?.avatar_url || ""} />
            )}
            {!showAvatar && <p>{gif.user?.display_name}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarComponent;
