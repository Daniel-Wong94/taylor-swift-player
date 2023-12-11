import React from "react";

const SpotifyWidget = () => {
  return (
    <div>
      <iframe
        src="https://open.spotify.com/embed/album/3lS1y25WAhcqJDATJK70Mq?utm_source=generator"
        width="100%"
        height="80"
        // frameBorder="0"
        // allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyWidget;
