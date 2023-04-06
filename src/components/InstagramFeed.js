import React, { useState, useEffect } from "react";
import Instagram from "instagram-basic-display";

function InstagramFeed() {
  const [media, setMedia] = useState([]);

  const instagram = new Instagram({
    accessToken: process.env.REACT_APP_INS_TOKEN,
  });

  console.log("instagram", instagram)
  console.log("instagram.getMedia", instagram.getMedia())

  useEffect(() => {
    instagram.getMedia().then((response) => {
      setMedia(response.data);
      console.log("dentro del useEffect", response.data )
    });



  }, []);

  console.log("MEDIA", media)

  return (
    <div>
 {console.log("media antes de render", media)}
      {media.map((item) => (
        <img key={item.id} src={item.media_url} alt={item.caption} />
      ))}
    </div>
  );
}

export default InstagramFeed;