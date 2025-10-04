import React from 'react'
import ProductCard from './ProductCard'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ProductListProps {
    products: Product[]
}

export default function ProductList({products}: ProductListProps) {
  return (
    <div className='mt-5 flex h-[440px]'>
      <Swiper slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
      >
        {products.map((p, i) => (
            <SwiperSlide>
              <ProductCard key={i} product={p} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
