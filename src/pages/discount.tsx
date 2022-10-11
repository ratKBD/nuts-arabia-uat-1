import { useAllProduct } from "@lib/context/all-product-context"
import StickyCart from "@modules/cart/templates/theme/StickyCart"
import DiscountProducts from "@modules/common/components/category/DiscountProducts"
import Card from "@modules/common/components/cta-card/Card"
import Layout from "@modules/layout/templates"
import useFilter from "hooks/useFilter"
import React, { ReactElement } from "react"

const Discount = () => {
  const { allProduct } = useAllProduct()
  const { productData, setSortedField } = useFilter(allProduct)
  return (
    <>
      <StickyCart />
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
        <div className="flex py-10 lg:py-12">
          <div className="flex w-full">
            <div className="w-full">
              <div className="w-full grid grid-col gap-4 grid-cols-1 2xl:gap-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 mb-4">
                <Card />
              </div>
              <div className="bg-gray-100 lg:py-10 sm:py-10 pt-10">
                <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 pb-10">
                  <div className="flex">
                    <div className="w-full">
                      <DiscountProducts
                        products={allProduct}
                        title={"Latest Discounted Products"}
                        subTitle={
                          "Select from our various discounted products.Choose from your daily needs."
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Discount.getLayout = (page: ReactElement) => {
  return (
    <Layout title="Discount Products" description="this is Discount Products">
      {page}
    </Layout>
  )
}

export default Discount
