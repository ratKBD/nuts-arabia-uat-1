import { ProductProvider } from "@lib/context/product-context"
import { useIntersection } from "@lib/hooks/use-in-view"
import { Product } from "@medusajs/medusa"
import Price from "@modules/common/components/price/Price"
import Stock from "@modules/common/components/stock/Stock"
import Layout from "@modules/layout/templates"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useRef, useState, useEffect, useContext } from "react"
import { FiChevronRight, FiMinus, FiPlus } from "react-icons/fi"
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share"
import ImageGallery from "@modules/products/components/image-gallary"
import MobileActions from "@modules/products/components/mobile-actions"
import Card from "@modules/products/components/slug-card/Card"
import getDisplayableprice from "@services/PriceService"
import { useProductActions } from "@lib/context/product-context"
import OptionSelect from "@modules/products/components/option-select"
import { CategoryContext } from "@lib/context/CategoryContext"
import ProductCarousel from "../components/carousel/ProductCarousel"
import Discount from "@modules/common/discount/Discount"

type ProductTemplateProps = {
  product: Product
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product }) => {
  const router = useRouter()
  const [collection, setCollection] = useState(null)
  const [type, setType] = useState(null)
  const [displayableImage, setDisplayableImage] = useState(product.images[0])
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [selectedVariantId, setSelectedVariantId] = useState(null)
  const [productDiscount, setProductDiscount] = useState(null)
  const [mrp, setMRP] = useState<any>(null)

  const {
    updateOptions,
    addToCart,
    options,
    inStock,
    variant,
    increaseQuantity,
    decreaseQuantity,
    setSelectedVariantInProvider,
    quantity,
  } = useProductActions()
  const { categoryItems } = useContext(CategoryContext)

  console.log("=========categoryItemsdropdown===>", categoryItems)

  console.log(selectedVariant)
  console.log("productImg", product)

  useEffect(() => {
    console.log("options", options)

    setDisplayableImage(product.images[0])

    let selectedVarient
    if (selectedVariantId) {
      selectedVarient = product.variants.filter(
        (variant) => variant.id === selectedVariantId
      )
      console.log(selectedVariantId, "selectedVarient", selectedVarient)
      setSelectedVariant(selectedVarient[0])
      setSelectedVariantInProvider(selectedVarient[0])
    }
  }, [selectedVariantId])

  useEffect(() => {
    console.log("===ProductTemplate===categoryItems====>", categoryItems)
    if (categoryItems?.length > 0) {
      let type: any
      let collection = categoryItems.filter(
        (categoryItem: any) =>
          categoryItem.collection_id === product.collection_id
      )
      if (collection?.length > 0) {
        setCollection(collection[0].parent.toLowerCase())
        type = collection[0].children.filter(
          (child: any) => child.type_id === product.type_id
        )
        setType(type[0].title.toLowerCase())
      }
      console.log("collection", collection)
    }
  }, [categoryItems?.length])

  useEffect(() => {
    if (product) {
      let filterDiscountValue: any =
        selectedVariant?.metadata?.discount_deduction
      let discount: any
      let sellingPrice: any = selectedVariant?.prices[0].amount
      let mrp: any = filterDiscountValue
        ? parseInt(filterDiscountValue.split(".").join(""))
        : sellingPrice
      setMRP(
        `${selectedVariant?.prices[0].currency_code.toUpperCase()} ${getDisplayableprice(
          mrp
        )}`
      )
      discount = ((mrp - sellingPrice) * 100) / mrp
      discount = Math.ceil(discount)
      if (discount) setProductDiscount(discount)
    }
  }, [selectedVariant])

  // const info = useRef<HTMLDivElement>(null)

  // const inView = useIntersection(info, "0px")

  let productLength: any = product?.length

  console.log("roduct", selectedVariant)

  // let discountValue = product?.variants.map(
  //   (data: any) => data?.metadata?.discount_deduction
  // )

  return (
    // <ProductProvider product={product}>
    //   <div className="content-container flex flex-col small:flex-row small:items-start py-6 relative">
    //     <div className="flex flex-col gap-y-8 w-full">
    //       <ImageGallery images={product.images} />
    //     </div>
    //     <div
    //       className="small:sticky small:top-20 w-full py-8 small:py-0 small:max-w-[344px] medium:max-w-[400px] flex flex-col gap-y-12"
    //       ref={info}
    //     >
    //       <ProductInfo product={product} />
    //       <ProductTabs product={product} />
    //     </div>
    //   </div>
    //   <div className="content-container my-16 px-6 small:px-8 small:my-32">
    //     <RelatedProducts product={product} />
    //   </div>
    //   <MobileActions product={product} show={!inView} />
    // </ProductProvider>
    // <Layout title={product.title} description={product.description}>
    <div className="px-0 py-10 lg:py-10">
      <div className="mx-auto px-3 lg:px-10 max-w-screen-2xl">
        <div className="flex items-center pb-4">
          <ol className="flex items-center w-full overflow-hidden font-serif">
            <li className="text-sm pr-1 transition duration-200 ease-in cursor-pointer hover:text-red-900 font-semibold">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="text-sm mt-[1px]">
              <FiChevronRight />
            </li>
            <li className="text-sm px-1 transition capitalize duration-200 ease-in cursor-pointer hover:text-red-900 font-semibold ">
              {/* <Link
                  href={`/search?category=${product.children
                    .toLowerCase()
                    .replace("&", "")
                    .split(" ")
                    .join("-")}`}
                > */}
              {<a>{collection}</a>}
              {/* </Link> */}
            </li>
            <li className="text-sm mt-[1px]">
              <FiChevronRight />
            </li>
            <li className="text-sm px-1 transition capitalize duration-200 ease-in cursor-pointer hover:text-red-900 font-semibold ">
              {/* <Link
                  href={`/search?category=${product.children
                    .toLowerCase()
                    .replace("&", "")
                    .split(" ")
                    .join("-")}`}
                > */}
              {<a>{type}</a>}
              {/* </Link> */}
            </li>
            <li className="text-sm mt-[1px]">
              <FiChevronRight />
            </li>
            <li className="text-sm px-1 transition duration-200 ease-in ">
              {product.title}
            </li>
          </ol>
        </div>

        <div className="w-full rounded-lg p-3 xl:p-12 lg:p-6 md:p-12 bg-white ">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 md:w-full sm:w-full">
              <div className="flex flex-col-reverse sm:flex-row justify-between">
                <div
                  className={`${
                    product.images.length > 3 ? "sm:flex hidden" : "flex"
                  } flex-row xl:mr-2 w-full md:w-1/6 lg:w-3/12 sm:flex-col `}
                >
                  {product.images.map((img: any) => {
                    console.log("productImages", img)
                    return (
                      <div
                        key={img.id}
                        className={`${
                          displayableImage.id === img.id
                            ? "border-red-900"
                            : "border-slate-500  hover:border-orange-300"
                        }  flex sm:mx-auto mx-1 my-1 items-center rounded-sm border h-20 w-16 content-center`}
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
                    )
                  })}
                </div>
                {product.images.length > 3 && (
                  <div>
                    <ProductCarousel
                      product={product}
                      displayableImage={displayableImage}
                      setDisplayableImage={setDisplayableImage}
                    />
                  </div>
                )}

                <div className="flex-shrink-0 xl:pr-8 lg:pr-4 lg:block w-full mx-auto md:w-4/6 lg:w-9/12">
                  {/* md:w-6/12 lg:w-5/12 xl:w-4/12 */}
                  <Discount discountAmount={productDiscount} slug={true} />
                  <Image
                    src={displayableImage.url}
                    alt={product.title}
                    layout="responsive"
                    width={650}
                    height={650}
                    priority
                  ></Image>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 md:w-full sm:w-full md:mt-10">
              <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
                <div className="w-full md:w-7/12 md:pr-4 lg:pr-4 xl:pr-12">
                  <div className="mb-6">
                    <h1 className="leading-7 text-lg md:text-xl lg:text-2xl mb-1 font-semibold font-serif text-gray-800">
                      {product.title}
                    </h1>
                    {/* <p className="uppercase font-serif font-medium text-gray-500 text-sm">
                      SKU :{" "}
                      <span className="font-bold text-gray-600">
                        {product.sku
                          ? product.sku
                          : product._id.substring(18, 24)}
                      </span>
                    </p> */}
                  </div>
                  <Price
                    product={product}
                    discountedPrice={mrp}
                    originalPrice={`${selectedVariant.prices[0].currency_code.toUpperCase()} ${getDisplayableprice(
                      selectedVariant.prices[0].amount
                    )}`}
                  />
                  <div className="mb-4 md:mb-5 block">
                    <Stock inStock={inStock} />
                  </div>
                  <div>
                    <p className="text-sm leading-6 text-gray-500 md:leading-7">
                      {product.description}
                    </p>
                    {/* <div className="mt-4">
                      <h3 className="text-base font-semibold mb-1 font-serif">
                        Select Quantity
                      </h3>
                    </div> */}
                    {/* <div className="flex">
                      {product.variants.map((variant: any) => {
                        return (
                          <div
                            key={variant.id}
                            className={`${
                              selectedVariant.id === variant.id
                                ? "border-green-500"
                                : "hover:border-orange-500"
                            } flex flex-row border items-center rounded-md justify-center  w-20 h-12 mr-2 `}
                            onClick={() => setSelectedVariant(variant)}
                          >
                            <div className="text-gray-500">
                              {variant.options.map(
                                (innerData: any) => innerData.value
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div> */}
                    {product.variants.length > 1 && (
                      <div className="my-8 flex flex-col gap-y-6">
                        {product.options.map((option) => {
                          return (
                            <div key={option.id}>
                              <OptionSelect
                                option={option}
                                current={options[option.id]}
                                updateOption={updateOptions}
                                title={option.title}
                                setSelectedVariantId={setSelectedVariantId}
                              />
                            </div>
                          )
                        })}
                      </div>
                    )}
                    <div className="flex items-center mt-4">
                      <div className="flex items-center justify-between space-s-3 sm:space-s-4 w-full">
                        <div className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300">
                          <button
                            // onClick={() => setItem(item - 1)}
                            disabled={quantity === 0}
                            className={`flex ${
                              inStock ? "cursor-pointer" : "cursor-not-allowed"
                            } items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 lg:w-6 xl:w-12 text-heading border-e border-gray-300 hover:text-gray-500`}
                            onClick={() => decreaseQuantity()}
                          >
                            <span className="text-dark text-base">
                              <FiMinus />
                            </span>
                          </button>
                          <p className="font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-10 md:w-16 xl:w-16">
                            {quantity}
                          </p>
                          <button
                            // onClick={() => setItem(item + 1)}
                            disabled={
                              /* product.quantity < item ||
                              product.quantity === item */
                              !inStock
                            }
                            className={`flex ${
                              inStock ? "cursor-pointer" : "cursor-not-allowed"
                            } items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 lg:w-6 xl:w-12 text-heading border-s border-gray-300 hover:text-gray-500`}
                            onClick={() => increaseQuantity()}
                          >
                            <span className="text-dark text-base">
                              <FiPlus />
                            </span>
                          </button>
                        </div>
                        <button
                          // onClick={() => handleAddItem(product)}
                          onClick={inStock ? () => addToCart() : () => {}}
                          disabled={/* product.quantity < 1 */ !inStock}
                          className={`text-sm leading-4 inline-flex items-center ${
                            inStock ? "cursor-pointer" : "cursor-not-allowed"
                          } transition ease-in-out duration-300 font-semibold font-serif text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none text-white px-4 ml-4 md:px-6 lg:px-6 py-4 md:py-3.5 lg:py-4 hover:text-white ${
                            !inStock && "bg-red-500 hover:bg-red-600"
                          } w-full h-12`}
                          style={{ background: inStock ? "#301B28" : "" }}
                        >
                          {inStock ? `Add To Cart` : `Stock Out`}
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col mt-4">
                      <span className="font-serif font-semibold py-1 text-sm d-block">
                        <span className="text-gray-700">Category:</span>{" "}
                        <span className="text-gray-500 capitalize">
                          {collection}
                        </span>
                      </span>
                      <span className="font-serif font-semibold py-1 text-sm d-block">
                        <span className="text-gray-700">Type Of Product:</span>{" "}
                        <span className="text-gray-500 capitalize">{type}</span>
                      </span>
                      {/* <Tags product={product} /> */}
                    </div>
                    <div className="mt-8">
                      <h3 className="text-base font-semibold mb-1 font-serif">
                        Share your social network
                      </h3>
                      <p className="font-sans text-sm text-gray-500">
                        For get lots of traffic from social network share this
                        product
                      </p>
                      <ul className="flex mt-4">
                        <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500  mr-2 transition ease-in-out duration-500">
                          <FacebookShareButton
                            url={`https://supermarket-plum.vercel.app/product/${router.query.slug}`}
                            // quote="KachaBazar"
                          >
                            <FacebookIcon size={32} round />
                          </FacebookShareButton>
                        </li>
                        <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500  mr-2 transition ease-in-out duration-500">
                          <TwitterShareButton
                            url={`https://supermarket-plum.vercel.app/product/${router.query.slug}`}
                            // quote="KachaBazar"
                          >
                            <TwitterIcon size={32} round />
                          </TwitterShareButton>
                        </li>
                        <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500  mr-2 transition ease-in-out duration-500">
                          <RedditShareButton
                            url={`https://supermarket-plum.vercel.app/product/${router.query.slug}`}
                            // quote="KachaBazar"
                          >
                            <RedditIcon size={32} round />
                          </RedditShareButton>
                        </li>
                        <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500  mr-2 transition ease-in-out duration-500">
                          <WhatsappShareButton
                            url={`https://supermarket-plum.vercel.app/product/${router.query.slug}`}
                            // quote="KachaBazar"
                          >
                            <WhatsappIcon size={32} round />
                          </WhatsappShareButton>
                        </li>
                        <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500  mr-2 transition ease-in-out duration-500">
                          <LinkedinShareButton
                            url={`https://supermarket-plum.vercel.app/product/${router.query.slug}`}
                            // quote="KachaBazar"
                          >
                            <LinkedinIcon size={32} round />
                          </LinkedinShareButton>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:w-5/12 lg:w-6/12 md:w-5/12">
                  <div className="mt-6 md:mt-0 lg:mt-0 bg-gray-50 border border-gray-100 p-4 xl:p-8 rounded-lg">
                    <Card />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Layout>
  )
}

export default ProductTemplate
