"use client"

import ColorPicker from "./ColorPicker";
import { useState } from "react";

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedImage, setSelectedImage] = useState("yellow");

  return (
    <div className="bg-white rounded-2xl p-4 w-[280px] h-[400px]">
      <div className="mt-4">
        <img src={product.images[selectedImage]} alt="ring" className="w-full rounded-2xl"/>
        <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
        <p className="text-gray-700 mb-5">${product.price.toFixed(2)}</p>
        <ColorPicker
          selected={selectedImage}
          colors={product.images}
          onSelect={(img: string) => setSelectedImage(img)}
        />
        <p>Score: {product.popularityScore}</p>
      </div>
    </div>
  );
}
