import React from "react";

type AlbumProp = {
  album: {
    albumName: string;
    emblem: string;
    bgColor: string[];
    accentColor: string;
    imageUrl: string;
    spotifyUrl: string;
  };
};

const Album: React.FC<AlbumProp> = ({ album }) => {
  const emblemAnimation: React.CSSProperties = {
    transform: "translate(calc(var(--album-size) / 2), -40%)",
  };

  const heroImage: React.CSSProperties = {
    backgroundImage: `url(${album["imageUrl"]})`,
  };

  return (
    <section className="h-full w-screen flex flex-col justify-center items-center relative my-10">
      {/* .hero-img */}
      <div
        className="bg-center bg-cover album-width h-full aspect-square absolute z-10 flex flex-col justify-center items-center rounded-xl overflow-hidden"
        style={heroImage}
      ></div>

      {/* .emblem-container */}
      <div className="h-72 w-72 absolute z-[2] " style={emblemAnimation}>
        {/* .emblem .text */}
        <div className="text-2xl text-color-light lowercase flex justify-center items-center origin-center animate-spin h-full w-full"></div>
      </div>
      {/* .text */}
      <h1
        className="text-color-light text-8xl w-90vw max-w-[980px] flex flex-col whitespace-nowrap items-center font-medium leading-[130%] z-[2] relative opacity-80 bottom-[-20%] origin-center drop-shadow-lg"
        // value="6"
      >
        {/* .album-num */}
        <span className="w-full absolute left-0 -top-4 text-3xl font-medium leading-none drop-shadow-lg"></span>
        {/* .album-title */}
        <span className="w-full text-left relative"></span>
        <span className="text-right">Taylor Swift</span>
      </h1>
    </section>
  );
};

export default Album;
