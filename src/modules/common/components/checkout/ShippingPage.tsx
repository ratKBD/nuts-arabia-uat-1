import Shipping from "@modules/checkout/components/shipping"
import { useCart } from "medusa-react"
import React from "react"

const ShippingPage = ({ register, setDisplayPaymentMethod }: any) => {
  const { cart } = useCart()
  console.log("displayPaymentMethod", setDisplayPaymentMethod)
  if (!cart?.id) {
    return null
  }
  return (
    <div className="grid grid-cols-6 gap-6">
      <Shipping
        cart={cart}
        register={register}
        setDisplayPaymentMethod={setDisplayPaymentMethod}
      />
    </div>
  )
}

export default ShippingPage
