import React, { useEffect, useState } from "react"
// import { GetStaticProps } from "next"
import ApiService from "@services/ApiService"
import Skeleton from "react-loading-skeleton"
import ProductCard from "@modules/products/templates/theme/ProductCard"
import HomeProductCarousel from "@modules/products/components/carousel/HomeProductCarousel"
import CategoryCarousel from "@modules/products/components/carousel/CategoryCarousel"

type PopularProductsProps = {
  products: any
  title: any
  subTitle: any
}

const PopularProducts: React.FC<PopularProductsProps> = ({
  products,
  title,
  subTitle,
}) => {
  const [popularProducts, setPopularProducts] = useState<any>(null)

  // let filterPopularProducts = products?.filter((product: any) => {
  //   // return product?.tags[0]?.value === "healthy"
  // })

  console.log("productssss", products)

  let filterPopularProducts = products?.reduce((acc: any, product: any) => {
    let tag = product?.tags?.map((e: any) => e.value)
    if (tag?.includes("popular")) {
      console.log("acc", acc)
      acc.push(product)
    }
    return acc
  }, [])

  console.log("filterPopularProducts", filterPopularProducts)

  useEffect(() => {
    async function getAllProductData() {
      const allProduct = await ApiService.getAllProduct()
      const filteredProducts = allProduct.filter((product: any) => {
        return product.collection
      })
      setPopularProducts(filteredProducts)
    }
    if (products && products.length > 0) {
      setPopularProducts(products)
    } else {
      getAllProductData()
    }
  }, [products?.length])
  console.log("filteredPop", popularProducts)

  return (
    <>
      <div className="lg:mb-10 sm:mb-6 flex justify-center">
        <div className="text-center w-full lg:w-2/5">
          <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
            {title}
          </h2>
          <p className="text-base font-sans text-gray-600 leading-6">
            {subTitle}
          </p>
        </div>
      </div>
      <div className="flex flex-col small:flex-row small:items-start">
        {/*  py-6 */}
        <div className="mx-auto max-w-screen-2xl ">
          {/* px-4 sm:px-10 */}
          <div className="flex w-full">
            <div className="w-full">
              <div className="sm:flex hidden flex-col-reverse sm:flex-row justify-between ">
                <div className="grid grid-cols sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                  {filterPopularProducts
                    ? filterPopularProducts?.map((productDetails: any) => (
                        <ProductCard
                          key={productDetails.id}
                          product={productDetails}
                        />
                      ))
                    : [1, 2, 3, 4, 5].map((productDetails: any, i: any) => (
                        <Skeleton key={`${i + 1}`} height={278} width={212} />
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl ">
        <div className="flex">
          <div className="flex w-full">
            <div className="w-full">
              <div className="relative">
                {/* <CategoryCarousel /> */}
                <HomeProductCarousel product={filterPopularProducts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopularProducts
