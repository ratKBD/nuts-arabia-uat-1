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

type ProductCarouselProps = {
  product: any
  displayableImage: any
  setDisplayableImage: any
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  product,
  displayableImage,
  setDisplayableImage,
}) => {
  // const { categoryItems } = useContext(CategoryContext)
  console.log("productCarousel", product)
  console.log("CarouselDisplay", displayableImage)
  // console.log("productCarousel", setDisplayableImage)
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
      spaceBetween={8}
      navigation={true}
      allowTouchMove={true}
      loop={false}
      breakpoints={{
        320: {
          width: 320,
          slidesPerView: 4,
        },

        // when window width is >= 640px
        375: {
          width: 375,
          slidesPerView: 5,
        },
        // when window width is >= 768px
        425: {
          width: 425,
          slidesPerView: 6,
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
      className="mySwiper category-slider my-10 lg:hidden md:hidden"
    >
      <div>
        {product
          ? product?.images.map((img: any, i: any) => {
              return (
                <SwiperSlide key={i + 1} className="group">
                  {/* <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                    <div
className="bg-white p-2 mx-auto w-16 h-16 rounded-sm border shadow-md" className=" flex sm:mx-auto mx-1 my-1 items-center rounded-sm border h-20 w-16 content-center lg:hidden"
                    >
                      <Image
                        src={img.url}
                        alt={img.title}
                        width={60}
                        height={60}
                        priority
                      />
                    </div>
                  </div> */}

                  <div
                    key={img.id}
                    className={`${
                      displayableImage.id === img.id
                        ? "border-green-500 "
                        : "border-slate-500  hover:border-orange-500"
                    }  flex sm:mx-auto mx-1 my-1 items-center rounded-sm border h-20 w-16 content-center `}
                    onClick={() => setDisplayableImage(img)}
                  >
                    <Image
                      src={img.url}
                      alt={img.title}
                      // layout="fit"
                      width={60}
                      height={60}
                      priority
                    ></Image>
                  </div>
                </SwiperSlide>
              )
            })
          : [1, 2, 3, 4, 5, 6, 7, 8, 9].map((category: any, i: any) => (
              <SwiperSlide key={i + 1} className="group">
                <div className="text-center cursor-pointer p-3 bg-white rounded-lg">
                  <div className="bg-white p-1 mx-auto w-10 h-10 rounded-full shadow-md">
                    <Skeleton height={60} width={60} />
                  </div>
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

export default ProductCarousel
