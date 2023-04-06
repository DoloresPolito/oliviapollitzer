import React, { useState, useEffect } from "react";
import Instagram from "instagram-basic-display";

function InstagramFeed() {
  const [media, setMedia] = useState([]);

  const instagram = new Instagram({
    accessToken: "IGQVJVTlhYd0toOGpKVWI2dy1NdnNkZAEdtNlphTDQ5N1hERm84SjZAKRlptYlF1bGZAicHIyNTY0OVJ0MTVxTmRiTFpucG5iUnNfcUtHLTdNWWk5VXZAWRG1Ral9iekNHQjdIZA29OZAmJiSkRZAcWtzZAl96VwZDZD",
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