import React, { useState, useEffect } from "react";
import Instagram from "instagram-basic-display";

const instagram = new Instagram({
  accessToken: "IGQVJVTlhYd0toOGpKVWI2dy1NdnNkZAEdtNlphTDQ5N1hERm84SjZAKRlptYlF1bGZAicHIyNTY0OVJ0MTVxTmRiTFpucG5iUnNfcUtHLTdNWWk5VXZAWRG1Ral9iekNHQjdIZA29OZAmJiSkRZAcWtzZAl96VwZDZD",
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