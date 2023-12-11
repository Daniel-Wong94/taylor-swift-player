import React from "react";

type SpotifyWidgetProp = {
  albumURL: string;
};

const SpotifyWidget: React.FC<SpotifyWidgetProp> = ({ albumURL }) => {
  return (
    // .spotify-widget
    <div className="album-width z-[100] mb-2">
      <iframe
        src={albumURL}
        width="100%"
        height="80"
        className="rounded-xl"
        // frameBorder="0"
        // allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyWidget;
