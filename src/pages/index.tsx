import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import StickyCart from "@modules/cart/templates/theme/StickyCart"
import { ReactElement, useEffect, useState } from "react"
import { NextPageWithLayout } from "types/global"
import ProductCard from "@modules/products/templates/theme/ProductCard"
// import NavBarTop from "../modules/layout/templates/nav/navbarTop"
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import { dehydrate, QueryClient, useQuery } from "react-query"
import { fetchProductsList, getCollectionData, getSiteData } from "@lib/data"
import Banner from "@modules/products/components/banner/Banner"
import MainCarousel from "@modules/products/components/carousel/MainCarousel"
import OfferCard from "@modules/products/components/offer/OfferCard"
import FeatureCategory from "@modules/common/components/category/FeatureCategory"
import Skeleton from "react-loading-skeleton"
import {
  AllProductProvider,
  useAllProduct,
} from "@lib/context/all-product-context"
import PopularProducts from "@modules/common/components/category/PopularProducts"
import PopularRecipies from "@modules/common/components/category/PopularRecipies"
import DiscountProducts from "@modules/common/components/category/DiscountProducts"
import ApiService from "@services/ApiService"
import { GetStaticProps } from "next"
import CardTwo from "@modules/common/components/cta-card/CardTwo"

const Home: NextPageWithLayout = () => {
  // const { data } = useFeaturedProductsQuery()

  const { allProduct } = useAllProduct()

  // const [products, setProducts] = useState([])

  // useEffect(() => {
  //   async function getAllProducts() {
  //     const allProduct = await ApiService.getAllProduct()
  //     const filteredProducts = allProduct.filter((product: any) => {
  //       return product.collection
  //     })
  //     setProducts(filteredProducts)
  //   }
  //   getAllProducts()
  // }, [])
  // console.log("filteredPop", products)

  console.log("allPro", allProduct)

  return (
    <>
      {/* <Head
        title="Home"
        description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
      /> */}
      <StickyCart />
      {/* <Hero /> */}
      {/* <FeaturedProducts /> */}
      <div className="bg-white">
        <div className="mx-auto py-5 max-w-screen-2xl px-3 sm:px-10">
          <div className="flex w-full">
            <div className="flex-shrink-0 xl:pr-6 lg:block w-full lg:w-3/5">
              <MainCarousel />
            </div>
            <div className="w-full hidden lg:flex">
              <OfferCard />
            </div>
          </div>
          <div
            className="px-10 py-6 rounded-lg mt-6 hidden lg:block"
            style={{ background: "#DDC5A2" }}
          >
            <Banner />
          </div>
        </div>
      </div>

      <div className=" lg:py-12 py-10" style={{background:"#FFF7F3"}}>
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="mb-10 flex justify-center">
            <div className="text-center w-full lg:w-2/5">
              <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                Featured Categories
              </h2>
              <p className="text-base font-sans text-gray-600 leading-6">
                Choose your necessary products from this feature categories.
              </p>
            </div>
          </div>
          <FeatureCategory />
        </div>
      </div>

      <div className="bg-gray-100 lg:py-0.5 sm:py-10">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <PopularProducts
            products={allProduct}
            title={"Popular Products"}
            subTitle={"See all of our popular products for this week"}
          />
        </div>
      </div>
      <div className="bg-gray-100 lg:py-16 sm:py-10 pt-10">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <PopularRecipies
            products={allProduct}
            title={"Our Popular Recipes"}
            subTitle={
              "Browse Through our herb & spices for your favorite recipies"
            }
          />
        </div>
      </div>
      {/* promotional banner card */}
      <div className="block mx-auto max-w-screen-2xl pt-10 pb-10">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
          <div className="lg:p-16 p-6  shadow-sm border rounded-lg" style={{background:"#592316"}}>
            <CardTwo />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 lg:py-10 sm:py-10 pt-10">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 pb-10">
          <DiscountProducts
            products={allProduct}
            title={"Latest Discounted Products"}
            subTitle={
              "Select from our various discounted products.Choose from your daily needs."
            }
          />
        </div>
      </div>
      {/* 
      <div className="flex">
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
            {data
              ? data &&
                data.map((productDetails: any) => (
                  <ProductCard
                    key={productDetails.id}
                    product={productDetails}
                  />
                ))
              : [1, 2, 3, 4, 5].map((productDetails: any) => (
                  <Skeleton key={""} height={230} width={250} />
                ))}
          </div>
        </div>
      </div> */}
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

// export const getStaticProps: GetStaticProps = async () => {
//   const allProduct = await ApiService.getAllProduct()
//   const products = allProduct?.filter((product: any) => {
//     return product.collection
//   })

//   return { props: { products } }
// }

export default Home
