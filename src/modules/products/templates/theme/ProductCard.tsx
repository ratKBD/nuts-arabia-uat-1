import { medusaClient } from "@lib/config"
import { ProductProvider } from "@lib/context/product-context"
import ProductModal from "@modules/common/components/modal/ProductModal"
import Price from "@modules/common/components/price/Price"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { IoBagAddSharp, IoAdd, IoRemove } from "react-icons/io5"
import { useQuery } from "react-query"
import { formatVariantPrice, useCart } from "medusa-react"
import { ChevronDownIcon } from "@heroicons/react/outline"
import getDisplayableprice from "@services/PriceService"
import Link from "next/link"
import ProductCardFooter from "./ProductCardFooter"
import Discount from "../../../../modules/common/discount/Discount"

export interface IProductCardProps {
  product: any
  isOnModal?: any
  variantId?: any
  setCurrentDisplayableVariantPatent?: any
}

const ProductCard: React.FC<IProductCardProps> = ({
  product,
  isOnModal,
  variantId,
  setCurrentDisplayableVariantPatent,
}: // productVariant
IProductCardProps) => {
  const [modalOpen, setModalOpen] = useState(false)
  const { cart } = useCart()
  const [variant, setVariant] = useState([])
  const [currentDisplayableVariant, setCurrentDisplayableVariant] =
    useState<any>({})
  const [discountVariant, setDiscountVariant] = useState(null)

  console.log("storePro", product)

  const fetchProduct = async (handle: string) => {
    return await medusaClient.products
      .list({ handle })
      .then(({ products }) => products[0])
  }
  console.log("first", cart?.items)
  const { data, isError, isLoading, isSuccess } = useQuery(
    [`get_product`, product.handle],
    () => fetchProduct(product.handle),
    {
      enabled: product.handle.length > 0,
      keepPreviousData: true,
    }
  )

  useEffect(() => {
    console.log("variantId", variantId)
    if (data && Object.keys(data).length > 0) {
      let variant: any = data.variants
      setVariant(variant)
      if (!variantId) setCurrentDisplayableVariant(variant[0])
      else {
        let variant = data.variants.filter(
          (eachVariant: any) => eachVariant.id === variantId
        )
        console.log("useEffect===========variant====>", variant)
        setCurrentDisplayableVariant(variant[0])
      }
    }
  }, [data])

  const selectVarient = (id: any) => {
    console.log("selectVarient", id)
    if (isOnModal) {
      let temp = variant.filter((eachVariant: any) => eachVariant.id === id)
      console.log("temp", temp)
      setCurrentDisplayableVariantPatent(temp[0])
    }
  }

  useEffect(() => {
    if (product) {
      let discountValue = product?.variants.map(
        (data: any) => data?.metadata?.discount_deduction
      )
      let filterDiscountValue = discountValue.filter(
        // (e: any) => e !== undefined
        Boolean
      )
      console.log(
        filterDiscountValue,
        "<<<>>>>>>>>>>>>>>>>>>>>>>>>>>currentDisplayableVariant",
        currentDisplayableVariant
      )
      let discount: any
      if (Object.keys(currentDisplayableVariant).length > 0) {
        console.log(
          ">>>>>>>>>>>>>>>>>>>>>>>>>>currentDisplayableVariant in",
          currentDisplayableVariant
        )
        let sellingPrice: any = currentDisplayableVariant.prices[0].amount
        let mrp: any = filterDiscountValue[0]
          ? parseInt(filterDiscountValue[0].split(".").join(""))
          : sellingPrice
        discount = ((mrp - sellingPrice) * 100) / mrp
        discount = Math.ceil(discount)
        console.log("amount", sellingPrice, "mrp", mrp, discount)
      }
      if (discount) setDiscountVariant(discount)
    }
  }, [product, Object.keys(currentDisplayableVariant).length])

  console.log("vari", variant)
  console.log("discountVariant", discountVariant)
  console.log("Newdata", data)
  console.log("currentDisplayableVariant", currentDisplayableVariant)
  console.log("isOnModal", isOnModal)
  return (
    <>
      {data && Object.keys(data).length > 0 && (
        // <ProductProvider product={data}>

        <>
          {!isOnModal && (
            <ProductModal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              productDetails={data}
              productVariant={variant}
              setCurrentDisplayableVariantPatent={setCurrentDisplayableVariant}
            />
          )}

          <div
            className={`group box-border overflow-hidden flex rounded-md shadow-sm pe-0 my-2 flex-col items-center justify-between bg-white relative ${
              isOnModal && `hover:bg-neutral-200`
            }`}
            onClick={(e) => {
              isOnModal ? selectVarient(variantId) : e.preventDefault()
            }}
          >
            <Link href={`/products/${product.handle}`} passHref>
              <a className="w-full h-full">
                <div
                  // onClick={() => setModalOpen(!modalOpen)}
                  className="relative flex justify-center w-full cursor-pointer pt-2"
                >
                  {product.quantity <= 0 && (
                    <span className="absolute inline-flex items-center justify-center px-2 py-1 bg-red-100 text-red-600 border-0 rounded-full text-xs font-semibold font-serif z-10 left-4 top-4">
                      Stock Out
                    </span>
                  )}

                  {discountVariant && (
                    <Discount discountAmount={discountVariant} />
                  )}

                  <Image
                    src={product.thumbnail}
                    width={160}
                    height={160}
                    alt={product.title}
                    className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
                  />
                </div>
                <div className="w-full px-3 lg:px-4 py-2 overflow-hidden">
                  <div className="relative">
                    {/* <span className="text-gray-400 font-medium text-xs d-block mb-1">
                each
                </span> */}
                    <h2 className="text-heading mb-0 block text-sm sm:text-base font-medium text-gray-600">
                      {/* truncate */}
                      <span className="line-clamp-2">{product.title}</span>
                    </h2>
                  </div>

                  {isOnModal &&
                    currentDisplayableVariant &&
                    Object.keys(currentDisplayableVariant).length > 0 && (
                      <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                        <Price
                          product={product}
                          card={true}
                          originalPrice={`${currentDisplayableVariant.prices[0].currency_code.toUpperCase()} ${getDisplayableprice(
                            currentDisplayableVariant.prices[0].amount
                          )}`}
                        />
                      </div>
                    )}
                </div>

                {false && (
                  <div className="flex w-full justify-between items-center px-3 lg:px-4 pb-2">
                    <ProductCardFooter
                      variants={product.variants}
                      isOnModal={isOnModal}
                      currentDisplayableVariant={currentDisplayableVariant}
                      modalOpen={modalOpen}
                      setModalOpen={setModalOpen}
                    />
                  </div>
                )}
              </a>
            </Link>
          </div>
          {/* </ProductProvider> */}
        </>
      )}
    </>
  )
}

export default ProductCard
