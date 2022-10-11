import React from "react"

export interface IStockProps {
  inStock: any
}

const Stock: React.FC<IStockProps> = ({ inStock }: IStockProps) => {
  console.log("stock", inStock)
  return (
    <>
      {!inStock ? (
        <span className="bg-red-100 text-red-600 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold font-serif mt-2">
          Stock Out
        </span>
      ) : (
        <span className="bg-emerald-100 text-emerald-600 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold mt-2 font-serif">
          In Stock
        </span>
      )}
    </>
  )
}

export default Stock
