import { useCart } from "medusa-react"
import React from "react"
import CartTotals from "../cart-totals"

const CartTotalSection = () => {
  const { cart } = useCart()
  console.log("productcart", cart)
  if (!cart?.id) {
    return null
  }
  return <CartTotals cart={cart} />
}

export default CartTotalSection
