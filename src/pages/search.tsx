import StickyCart from "@modules/cart/templates/theme/StickyCart"
import Card from "@modules/common/components/cta-card/Card"
import Layout from "@modules/layout/templates"
import CategoryCarousel from "@modules/products/components/carousel/CategoryCarousel"
import ProductCard from "@modules/products/templates/theme/ProductCard"
import ApiService from "@services/ApiService"
import useFilter from "hooks/useFilter"
import { filter } from "lodash"
import Image from "next/image"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"

const Search = () => {
  const router = useRouter()
  const { query } = router

  const [searchProduct, setSearchProduct] = useState<any>()
  const { productData, setSortedField } = useFilter(searchProduct)

  console.log("query--->", query)
  useEffect(() => {
    async function getAllTypeData() {
      const allProduct = await ApiService.getAllProduct()
      const filterData = allProduct.filter(
        (data: any) => data.collection !== null
      )

      //   const searchProductUsing = filterData?.map((product: any) => {
      //     return [
      //       product.title,
      //       product.handle,
      //       product.subtitle,
      //       product.description,
      //       product.type.value,
      //       product.tags.join(" "),
      //       product.collection.title,
      //       product.collection.handle,
      //     ]
      //   })

      //   let filteredSearch = searchProductUsing.toString()
      console.log("queryinside--->", query.query)
      //   let searchQuery = filteredSearch.match(query.query)

      if (query.query) {
        let searchParam: any = query.query
        let finalSearchedProduct = filterData.filter((product: any) => {
          return (
            product.title.toLowerCase().includes(searchParam.toLowerCase()) ||
            product.handle.toLowerCase().includes(searchParam.toLowerCase()) ||
            product.subtitle
              .toLowerCase()
              .includes(searchParam.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(searchParam.toLowerCase()) ||
            product.type.value
              .toLowerCase()
              .includes(searchParam.toLowerCase()) /* ||
            product.tags
              .join(" ")
              .toLowerCase()
              .includes(searchParam.toLowerCase()) */ ||
            product.collection.title
              .toLowerCase()
              .includes(searchParam.toLowerCase()) ||
            product.collection.handle
              .toLowerCase()
              .includes(searchParam.toLowerCase()) ||
            product?.tags
              ?.map(
                (tag: any) => tag.value
                // tag?.value === "healthy" ||
                // tag?.value === "fresh" ||
                // tag?.value === "natural"
              )
              ?.includes(searchParam.toLowerCase())
            // ?.toLowerCase()
          )
        })
        setSearchProduct(finalSearchedProduct)
        console.log("searchProduct", searchProduct)
        console.log("finalSearchedProduct", finalSearchedProduct)
      }

      console.log("filterData", filterData)

      //   console.log("searchProductUsing", searchProductUsing)
      //   console.log("filteredSearch", filteredSearch)
      //   console.log("searchQuery", searchQuery)
    }

    getAllTypeData()
  }, [query.query])

  return (
    <>
      <StickyCart />
      <Layout title="Search" description="This is search page">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="flex py-10 lg:py-12">
            <div className="flex w-full">
              <div className="w-full">
                <div className="w-full grid grid-col gap-4 grid-cols-1 2xl:gap-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
                  <Card />
                </div>
                <div className="relative">
                  <CategoryCarousel />
                </div>
                {/* Old Code */}
                {searchProduct?.length === 0 ? (
                  <div className="text-center align-middle mx-auto p-5 my-5">
                    <Image
                      className="my-4"
                      src="/no-result.svg"
                      alt="no-result"
                      width={400}
                      height={380}
                    />
                    <h2 className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-center mt-2 font-medium font-serif text-gray-600">
                      Sorry, we can not find this product 😞
                    </h2>
                  </div>
                ) : (
                  <div className="flex justify-between my-3 bg-orange-100 border border-gray-100 rounded p-3">
                    <h6 className="text-sm font-serif">
                      Total{" "}
                      <span className="font-bold">{searchProduct?.length}</span>{" "}
                      items Found
                    </h6>
                    <span className="text-sm font-serif">
                      <select
                        onChange={(e) => setSortedField(e.target.value)}
                        className="py-0 text-sm font-serif font-medium block w-full rounded border-0 bg-white pr-10 cursor-pointer focus:ring-0"
                      >
                        <option
                          className="px-3"
                          value="All"
                          // defaultValue
                          hidden
                        >
                          Sort By Price
                        </option>
                        <option className="px-3" value="Low">
                          Low to High
                        </option>
                        <option className="px-3" value="High">
                          High to Low
                        </option>
                      </select>
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                  {/* {productData?.slice(0, visibleProduct).map((product, i) => (
                  <ProductCard key={i + 1} product={product} />
                ))} */}
                  {searchProduct
                    ? searchProduct?.map((product: any, i: any) => {
                        return (
                          <ProductCard key={product.id} product={product} />
                        )
                      })
                    : [1, 2, 3, 4, 5].map((productDetails: any) => (
                        <Skeleton height={278} width={212} />
                      ))}
                </div>
                {/* {productData.length > visibleProduct && (
                <button
                  onClick={() => setVisibleProduct((pre) => pre + 10)}
                  className="w-auto mx-auto md:text-sm leading-5 flex items-center transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none bg-indigo-100 text-gray-700 px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-6 text-sm lg:text-sm"
                >
                  Load More
                </button>
              )} */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Search
