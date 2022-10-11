import { useAllProduct } from "@lib/context/all-product-context"
import Card from "@modules/common/components/cta-card/Card"
import CategoryCarousel from "@modules/products/components/carousel/CategoryCarousel"
import ProductCard from "@modules/products/templates/theme/ProductCard"
import ApiService from "@services/ApiService"
import useFilter from "hooks/useFilter"
import React, { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"

type TypeTemplateProps = {
  type: any
}

const TypeTemplate: React.FC<TypeTemplateProps> = ({ type }) => {
  const { allProduct, setAllProduct } = useAllProduct()
  const [showableData, setShowableData] = useState<any>([])
  const { productData, setSortedField } = useFilter(showableData)
  console.log("type", type)
  useEffect(() => {
    console.log("inUseEfeect", type)
    const getAllProductData = async () => {
      const allProducts = await ApiService.getAllProduct()
      console.log("allProd", allProducts)
      let selectedProductType = allProducts?.filter((product: any) => {
        console.log(
          "condition->>>>",
          product.type_id === type[0].typeId,
          product.type_id,
          type[0].typeId
        )
        return product.type_id === type[0].typeId
      })
      console.log("selectedType", selectedProductType)
      if (selectedProductType && selectedProductType.length > 0) {
        setShowableData(selectedProductType)
      }
    }
    getAllProductData()
  }, [type[0].typeId])

  return (
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
                    <span className="font-bold">{showableData?.length}</span>{" "}
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
                            /* previews */ showableData
                              ? showableData?.map((productDetails: any) => (
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
  )
}

export default TypeTemplate
