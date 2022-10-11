import React, { useContext, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import { CategoryContext } from "@lib/context/CategoryContext"
import Image from "next/image"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5"
import Skeleton from "react-loading-skeleton"
import Link from "next/link"
import { Product } from "@medusajs/medusa"
import ProductCard from "@modules/products/templates/theme/ProductCard"

type HomeProductCarouselProps = {
  product: any
}

const HomeProductCarousel: React.FC<HomeProductCarouselProps> = ({
  product = null,
}) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  // console.log("CategoryCarousel====>", categoryItems)
  return (
    <Swiper
      onInit={(swiper: any) => {
        swiper.params.navigation.prevEl = prevRef.current
        swiper.params.navigation.nextEl = nextRef.current
        swiper.navigation.init()
        swiper.navigation.update()
      }}
      spaceBetween={4}
      navigation={true}
      allowTouchMove={true}
      loop={false}
      breakpoints={{
        320: {
          width: 320,
          slidesPerView: 2,
        },

        // when window width is >= 640px
        375: {
          width: 375,
          slidesPerView: 2,
        },
        // when window width is >= 768px
        425: {
          width: 425,
          slidesPerView: 2,
        },
        // when window width is >= 768px
        660: {
          width: 660,
          slidesPerView: 4,
        },

        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 6,
        },

        // when window width is >= 768px
        991: {
          width: 991,
          slidesPerView: 8,
        },

        // when window width is >= 768px
        1140: {
          width: 1140,
          slidesPerView: 9,
        },
        1680: {
          width: 1680,
          slidesPerView: 10,
        },
        1920: {
          width: 1920,
          slidesPerView: 10,
        },
      }}
      modules={[Navigation]}
      className="mySwiper category-slider mt-6 lg:hidden md:hidden"
    >
      <div>
        {product
          ? product?.map((productDetails: any, i: any) => (
              <SwiperSlide key={i + 1} className="group">
                <ProductCard key={productDetails.id} product={productDetails} />
              </SwiperSlide>
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8, 9].map((category: any, i: any) => (
              <SwiperSlide key={i + 1} className="group">
                <div className="text-center cursor-pointer p-1 bg-white rounded-lg">
                  <Skeleton height={200} width={170} />
                </div>
              </SwiperSlide>
            ))}
      </div>
      <button ref={prevRef} className="prev">
        <IoChevronBackOutline />
      </button>
      <button ref={nextRef} className="next">
        <IoChevronForward />
      </button>
    </Swiper>
  )
}

export default HomeProductCarousel
