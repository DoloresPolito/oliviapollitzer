import React, { useState, useEffect } from "react";
import Instagram from "instagram-basic-display";

const instagram = new Instagram({
  accessToken: "YOUR_ACCESS_TOKEN",
});

function InstagramFeed() {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    instagram.getMedia().then((response) => {
      setMedia(response.data);
    });
  }, []);

  return (
    <div>
      {media.map((item) => (
        <img key={item.id} src={item.media_url} alt={item.caption} />
      ))}
    </div>
  );
}

export default InstagramFeed;