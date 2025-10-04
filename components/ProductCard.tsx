"use client"

import ColorPicker from "./ColorPicker";
import { useState } from "react";

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-[400px] h-[300px]">
      <div className="mt-4">
        <img src={product.images[selectedImage]} alt="" />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-700">${product.price.toFixed(2)}</p>
        <p>Score: {product.popularityScore}</p>
      </div>
    </div>
  );
}
