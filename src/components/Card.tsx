import Image from "next/image";
import React, { useState } from "react";

interface CardProps {
  name: string;
  imgCat: string;
  harga: string;
  onClick?: (name: string, imgCat: string, harga: string) => void;
}

const Card = ({ name, imgCat, onClick, harga }: CardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(name, imgCat, harga);
    }
  };

  return (
    <>
      <div
        className="cursor-pointer rounded-xl bg-white  p-6 shadow-md duration-300 hover:-translate-y-4 hover:border-2 hover:border-white hover:bg-slate-800 hover:text-white hover:shadow-xl"
        onClick={handleClick}
      >
        <Image
          src={imgCat}
          alt="logo"
          width={150}
          height={150}
          className="h-40 w-40 rounded-md object-cover object-center"
        ></Image>
        <div className="mt-10">
          <div className="absolute bottom-2">
            <h1 className="font-bold">{name}</h1>
            <h1>Harga: {harga}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
