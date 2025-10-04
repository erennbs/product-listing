"use client"

import ColorPicker from "./ColorPicker";
import Stars from "./Stars";
import { useState } from "react";

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState("yellow");
  const colorNameMap: {[key: string]: string} = {
    yellow: "Yellow Gold",
    white: "White Gold",
    rose: "Rose Gold"
  }

  return (
    <div className="bg-white rounded-2xl p-4 w-[280px] h-[400px]">
      <div className="mt-4">
        <img src={product.images[selectedColor]} alt="ring" className="w-full rounded-2xl"/>
        <h2 className="text-lg text-[15px] mt-3 font-title">{product.name}</h2>
        <p className=" mb-5 font-price text-[15px]">${product.price.toFixed(2)} USD</p>
        <ColorPicker
          selected={selectedColor}
          colors={product.images}
          onSelect={(img: string) => setSelectedColor(img)}
        />
        <p className="font-header text-[12px] mt-3 mb-2">{colorNameMap[selectedColor]}</p>
        <Stars rating={(product.popularityScore * 4 + 1)} />
      </div>
    </div>
  );
}
