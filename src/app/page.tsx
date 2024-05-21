"use client";

import Card from "@/components/Card";
import Counter from "@/components/Counter";
import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<{
    name: string;
    imgCat: string;
    harga: string;
  } | null>(null);
  let img = "https://cdn2.thecatapi.com/images";

  const handleCardClick = (name: string, imgCat: string, harga: string) => {
    setSelectedCard({ name, imgCat, harga });
    setModal(true);
  };

  return (
    <main className="relative h-screen bg-blue-950">
      <div className="bg-main2 absolute z-10 h-full w-full bg-cover bg-center">
        <div className="h-full bg-blue-950/95">
          {modal && selectedCard && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
              <div className="relative h-40 w-40 rounded-xl bg-white p-4">
                <h1>{selectedCard.name}</h1>
                <Counter />
                <button
                  onClick={() => setModal(false)}
                  className="absolute right-2 top-2"
                >
                  X
                </button>
                <h1>{selectedCard.harga}</h1>
              </div>
            </div>
          )}
          <div className="flex flex-col items-center justify-center gap-10">
            <h1 className="mt-20 text-center font-bold text-white">
              Props NextJS
            </h1>
            <div className="relative flex flex-wrap gap-10">
              <Card
                onClick={handleCardClick}
                name="Kucing Oren"
                imgCat={`${img}/0XYvRd7oD.jpg`}
                harga="500000"
              />
              <Card
                onClick={handleCardClick}
                name="Bomb"
                imgCat={`${img}/5iYq9NmT1.jpg`}
                harga="500000"
              />
              <Card
                onClick={handleCardClick}
                name="Cheetah"
                imgCat={`${img}/IFXsxmXLm.jpg`}
                harga="500000"
              />
              <Card
                onClick={handleCardClick}
                name="Dog"
                imgCat={`${img}/3KG57GfMW.jpg`}
                harga="500000"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
