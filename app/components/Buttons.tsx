import React, { useEffect } from "react";
import albums from "../albums.json";

type ButtonProp = {
  album: number;
  setAlbum: React.Dispatch<React.SetStateAction<number>>;
};

const Buttons: React.FC<ButtonProp> = ({ album, setAlbum }) => {
  const handlePrevClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAlbum((prev) => (prev - 1 > 0 ? prev - 1 : 0));
  };
  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAlbum((prev) => (prev + 1 >= albums.length ? prev : prev + 1));
  };

  return (
    <div className="pt-2 px-5vw pb-6 w-full flex justify-between items-center z-10">
      {/* scroll-left nav-arrow */}
      <button
        disabled={album === 0}
        onClick={handlePrevClick}
        className="text-lg flex justify-center items-center h-14 bg-none text-color-light opacity-30 font-medium lowercase transition-all hover:w-8 hover:h-8"
      >
        {/* :before */}
        <span className="transition-all absolute w-5 h-5 border-2 border-solid border-light left-1 -rotate-45 border-b-0 border-r-0  hover:w-8 hover:h-8"></span>
        <span className="w-20 h-0.5 bg-light relative flex justify-center items-center mr-8 transition-all"></span>
        {/* :after */}
        <span className="transition-all absolute w-3 h-3 rounded-full border-2 border-light -right-3.5"></span>
        Prev.
      </button>
      {/* scroll-right nav-arrow */}
      <button
        disabled={album === albums.length - 1}
        onClick={handleNextClick}
        className="text-lg flex justify-center items-center h-14 bg-none text-color-light opacity-30 font-medium lowercase transition-all"
      >
        Next
        {/* :before */}
        <span className="transition-all absolute w-5 h-5 border-2 border-solid border-light left-1 -rotate-45 border-b-0 border-r-0 hover:w-8 hover:h-8"></span>
        <span className="w-20 h-0.5 bg-light relative flex justify-center items-center mr-8 transition-all"></span>
        {/* :after */}
        <span className="transition-all absolute w-3 h-3 rounded-full border-2 border-light -right-3.5 hover:w-8 hover:h-8"></span>
      </button>
    </div>
  );
};

export default Buttons;
