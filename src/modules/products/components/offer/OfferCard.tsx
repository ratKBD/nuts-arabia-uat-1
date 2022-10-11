import React from "react"
import Coupon from "@modules/products/components/coupon/Coupon"


const OfferCard = () => {
  return (
    <div className="w-full group">
      <div className="bg-gray-50 h-full border-2 border-orange-500 transition duration-150 ease-linear transform group-hover:border-emerald-500 rounded shadow">
        <div className=" text-gray-900 px-6 py-2 rounded-t border-b flex items-center justify-center" style={{background:"#DDC5A2"}}>
        <h3 className="text-base font-serif font-medium ">
            Latest Super Discount Active Coupon Code
          </h3>
        </div>
        <div className="overflow-hidden">
          <Coupon couponInHome={true} />
        </div>
      </div>
    </div>
  )
}

export default OfferCard
