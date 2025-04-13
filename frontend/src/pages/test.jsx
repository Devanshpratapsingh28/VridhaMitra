import React, { useEffect, useState } from "react";
import axios from "axios";

const Test =() => {
  const [idPhotoUrl, setIdPhotoUrl] = useState(null);

  useEffect(() => {
    // Fetch the ID photo
    const email='saimjawed254@gmail.com'
    axios.post(`https://vridhamitra.onrender.com/file`, {email}, {
      responseType: "arraybuffer", // Fetch binary data
    }).then((response) => {
      const blob = new Blob([response.data], { type: response.headers["content-type"] });
      setIdPhotoUrl(URL.createObjectURL(blob)); // Generate a URL for the photo
    }).catch((error) => console.error("Error fetching ID photo:", error));
  }, []);

  return (
    <div>
      {idPhotoUrl ? (
        <img src={idPhotoUrl} alt="ID Photo" />
      ) : (
        <p>Loading ID photo...</p>
      )}
    </div>
  );
};

export default Test;