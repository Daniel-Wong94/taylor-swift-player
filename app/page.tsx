"use client";

import Image from "next/image";
import Album from "./components/Album";
import SpotifyWidget from "./components/SpotifyWidget";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import albums from "./albums.json";
import { useState } from "react";

export default function Home() {
  const [album, setAlbum] = useState(0);

  const bgGradient: React.CSSProperties = {
    background: `linear-gradient(180deg, ${albums[album]["bgColor"][0]} 0%, ${albums[album]["bgColor"][1]} 100%)`,
  };

  return (
    <main
      className="overflow-hidden relative flex flex-col justify-around items-center w-[100vw] h-[100vh]"
      style={bgGradient}
    >
      <Header />
      <Album album={albums[album]} />
      <SpotifyWidget albumURL={albums[album]["spotifyUrl"]} />
      <Buttons album={album} setAlbum={setAlbum} />
    </main>
  );
}
