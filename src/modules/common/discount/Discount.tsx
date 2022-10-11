import React from "react"

const Discount = ({ discountAmount, slug }: any) => {
  console.log("discountPro", discountAmount)

  // let discountValue = product?.variants.map(
  //   (data: any) => data?.metadata?.discount_deduction
  // )

  return (
    <>
      {discountAmount && (
        <span
          className={
            slug
              ? "text-dark text-sm  text-white py-1 px-2 rounded font-medium z-10 right-4 top-4"
              : " absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4"
          } style={{background:"#C52400"}}
        >
          {/* {product.discount.toFixed(0)}% Off */}
          {parseFloat(discountAmount).toFixed(0)}% Off
        </span>
      )}
    </>
  )
}

export default Discount
