import Image from "next/image";
import Album from "./components/Album";
import SpotifyWidget from "./components/SpotifyWidget";
import Buttons from "./components/Buttons";

export default function Home() {
  return (
    <>
      <Album />
      <SpotifyWidget />
      <Buttons />
    </>
  );
}
