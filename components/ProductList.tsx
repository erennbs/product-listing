import React from 'react'
import ProductCard from './ProductCard'

interface ProductListProps {
    products: Product[]
}

export default function ProductList({products}: ProductListProps) {
  return (
    <div className='flex gap-5'>
        {products.map((p, i) => (
            <ProductCard key={i} product={p} />
        ))}
    </div>
  )
}
