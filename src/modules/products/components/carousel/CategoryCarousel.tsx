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

const CategoryCarousel = () => {
  const { categoryItems } = useContext(CategoryContext)
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  console.log("CategoryCarousel====>", categoryItems)
  return (
    <Swiper
      onInit={(swiper: any) => {
        swiper.params.navigation.prevEl = prevRef.current
        swiper.params.navigation.nextEl = nextRef.current
        swiper.navigation.init()
        swiper.navigation.update()
      }}
      spaceBetween={8}
      navigation={true}
      allowTouchMove={true}
      loop={false}
      breakpoints={{
        // when window width is >= 640px
        375: {
          width: 375,
          slidesPerView: 2,
        },
        // when window width is >= 768px
        414: {
          width: 414,
          slidesPerView: 3,
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
      className="mySwiper category-slider my-10"
    >
      <div>
        {categoryItems
          ? categoryItems?.map((category: any, i: any) => (
              <SwiperSlide key={i + 1} className="group">
                <Link href={`/collections/${category.collection_id}`}>
                  <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                    <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
                      <Image
                        src={category.icon}
                        alt={category.parent}
                        width={35}
                        height={35}
                      />
                    </div>
                    <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                      {category.parent}
                    </h3>
                  </div>
                </Link>
              </SwiperSlide>
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8, 9].map((category: any, i: any) => (
              <SwiperSlide key={i + 1} className="group">
                <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                  <div className="bg-white p-1 mx-auto w-10 h-10 rounded-full shadow-md">
                    {/* <Image
                  src={category.icon}
                  alt={category.parent}
                  width={35}
                  height={35}
                /> */}
                    <Skeleton height={25} width={25} circle={true} />
                  </div>
                  <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-emerald-500">
                    <Skeleton height={15} width={100} />
                  </h3>
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

export default CategoryCarousel
