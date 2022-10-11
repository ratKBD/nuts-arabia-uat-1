import getDisplayableprice from "@services/PriceService"
import React from "react"

export interface IPriceProps {
  product?: any
  card?: any
  originalPrice?: any
  discountedPrice?: any
  selectedVariant?: any
}

const Price: React.FC<IPriceProps> = ({
  product,
  card,
  originalPrice,
  discountedPrice,
}) => {
  console.log(
    originalPrice,
    "originalPrice<<<>>>discountedPrice",
    discountedPrice
  )

  console.log("card", card)

  return (
    <div className="font-serif product-price font-bold ">
      {originalPrice ? (
        <span
          className={
            card
              ? "inline-block sm:text-lg text-sm font-semibold text-gray-800"
              : "inline-block text-2xl"
          }
        >
          {originalPrice}
        </span>
      ) : (
        <span
          className={
            card
              ? "inline-block text-lg font-semibold text-gray-800"
              : "inline-block text-2xl"
          }
        >
          {originalPrice}
        </span>
      )}
      {discountedPrice?.toLowerCase() !== originalPrice.toLowerCase() ? (
        <del
          className={
            card
              ? "sm:text-sm text-xs font-normal text-gray-400 ml-1"
              : "text-lg font-normal text-gray-400 ml-1"
          }
        >
          {discountedPrice}
        </del>
      ) : null}
    </div>
  )
}

export default Price
