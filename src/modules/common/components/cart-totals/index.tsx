import { useLoader } from "@lib/context/loader-context"
import { Cart } from "@medusajs/medusa"
import { formatAmount } from "medusa-react"
import React from "react"
import SectionLoading from "../preloader/SectionLoading"

type CartTotalsProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
}

const CartTotals: React.FC<CartTotalsProps> = ({ cart }) => {
  const {
    subtotal,
    discount_total,
    gift_card_total,
    tax_total,
    shipping_total,
    total,
  } = cart
  const { sectionLoaderTwo } = useLoader()

  const getAmount = (amount: number | null | undefined) => {
    return formatAmount({
      amount: amount || 0,
      region: cart.region,
      includeTaxes: false,
    })
  }

  return (
    <div>
      <div className="text-small-regular text-gray-700">
        {/* <div className="flex items-center justify-between text-base-regular text-gray-900 mb-2">
          <span>Subtotal</span>
          <span>{getAmount(subtotal)}</span>
        </div> */}
        <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
          Subtotal
          <span className="ml-auto flex-shrink-0 text-gray-800 font-bold">
            <span>{getAmount(subtotal)}</span>
          </span>
        </div>
        <div className="flex flex-col gap-y-1">
          {!!discount_total && (
            <div className="flex items-center justify-between">
              <span>Discount</span>
              <span>- {getAmount(discount_total)}</span>
            </div>
          )}
          {!!gift_card_total && (
            <div className="flex items-center justify-between">
              <span>Gift card</span>
              <span>- {getAmount(gift_card_total)}</span>
            </div>
          )}
          {/* <div className="flex items-center justify-between">
            <span>Shipping</span>
            <span>{getAmount(shipping_total)}</span>
          </div> */}
          <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
            Shipping
            <span className="ml-auto flex-shrink-0 text-gray-800 font-bold">
              {sectionLoaderTwo ? (
                <SectionLoading
                  loading={sectionLoaderTwo}
                  height={"25px"}
                  width={"68px"}
                  loaderHeight={"15px"}
                />
              ) : (
                <span>{getAmount(shipping_total)}</span>
              )}
            </span>
          </div>
          {/* <div className="flex items-center justify-between">
            <span>Taxes</span>
            <span>{getAmount(tax_total)}</span>
          </div> */}
          <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
            Taxes
            <span className="ml-auto flex-shrink-0 text-gray-800 font-bold">
              <span>{getAmount(tax_total)}</span>
            </span>
          </div>
        </div>

        {/* <div className="h-px w-full border-b border-gray-200 border-dashed my-4" /> */}
        {/* <div className="flex items-center justify-between text-base-regular text-gray-900 mb-2">
          <span>Total</span>
          <span>{getAmount(total)}</span>
        </div> */}
        <div className="border-t mt-4">
          <div className="flex items-center font-bold font-serif justify-between pt-5 text-sm uppercase text-lg">
            Total
            <span className="font-serif font-extrabold text-lg">
              <span>{getAmount(total)}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartTotals
