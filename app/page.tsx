"use client"

import ProductCard from "@/components/ProductCard";
import ProductList from "@/components/ProductList";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <main className="flex flex-col content-around w-full h-auto">
      <h2 className="text-[45px] mx-auto mt-40 mb-10 font-header">Product List</h2>
      <ProductList products={products} />
    </main>
  );
}
