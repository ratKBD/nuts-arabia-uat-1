import { StoreGetProductsParams } from "@medusajs/medusa"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import AllProducts from "@modules/products/components/allProducts/AllProducts"
import InfiniteProducts from "@modules/products/components/infinite-products"
import ProductCard from "@modules/products/templates/theme/ProductCard"
import RefinementList from "@modules/store/components/refinement-list"
import { useContext, useEffect, useMemo, useState } from "react"
import { NextPageWithLayout } from "types/global"
import { useInfiniteQuery } from "react-query"
import { fetchProductsList } from "@lib/data"
import { useCart } from "medusa-react"
import usePreviews from "@lib/hooks/use-previews"
import Card from "@modules/common/components/cta-card/Card"
import CategoryCarousel from "@modules/products/components/carousel/CategoryCarousel"
import Skeleton from "react-loading-skeleton"
import { CategoryContext } from "@lib/context/CategoryContext"
import useFilter from "hooks/useFilter"
import ApiService from "@services/ApiService"
import StickyCart from "@modules/cart/templates/theme/StickyCart"

const Store = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({})
  const { cart } = useCart()
  const { categoryItems } = useContext(CategoryContext)
  const [allProduct, setAllProduct] = useState([])

  const queryParams = useMemo(() => {
    const p: StoreGetProductsParams = {}

    if (cart?.id) {
      p.cart_id = cart.id
    }

    p.is_giftcard = false

    return {
      ...p,
      ...params,
    }
  }, [cart?.id, params])

  useEffect(() => {
    const getAllProductData = async () => {
      const allProducts = await ApiService.getAllProduct()
      setAllProduct(allProducts)
    }
    getAllProductData()
  }, [])

  // const { data, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage } =
  //   useInfiniteQuery(
  //     [`infinite-products-store`, queryParams, cart],
  //     ({ pageParam }) => fetchProductsList({ pageParam, queryParams }),
  //     {
  //       getNextPageParam: (lastPage) => lastPage.nextPage,
  //     }
  //   )
  // const previews = usePreviews({ pages: data?.pages, region: cart?.region })
  const { productData, setSortedField } = useFilter(allProduct)
  // console.log("preview", previews)

  return (
    <>
      <StickyCart />
      <Head title="Search" description="This is search page" />
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
              {
                /* previews.length === 0 ? (
                <div className="text-center align-middle mx-auto p-5 my-5">
                  <h2 className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-center mt-2 font-medium font-serif text-gray-600">
                    Sorry, we can not find this product 😞
                  </h2>
                </div>
              ) : ( */
                <>
                  <div className="flex justify-between my-3 bg-orange-100 border border-gray-100 rounded p-3">
                    <h6 className="text-sm font-serif">
                      Total{" "}
                      <span className="font-bold">{allProduct.length}</span>{" "}
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
                          /* defaultValue */ hidden
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
                  <div className="flex flex-col small:flex-row small:items-start py-6">
                    <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
                      <div className="flex">
                        <div className="w-full">
                          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                            {
                              /* previews */ allProduct
                                ? allProduct.map((productDetails: any) => (
                                    <ProductCard
                                      key={productDetails.id}
                                      product={productDetails}
                                    />
                                  ))
                                : [1, 2, 3, 4, 5].map((productDetails: any) => (
                                    <Skeleton height={278} width={212} />
                                  ))
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
                /* ) */
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Store.getLayout = (page: any) => <Layout>{page}</Layout>

export default Store
