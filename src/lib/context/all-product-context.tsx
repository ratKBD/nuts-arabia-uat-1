import ApiService from "@services/ApiService"
import React, { useContext, useState } from "react"
import { useLoader } from "./loader-context"

interface StoreProps {
  children: React.ReactNode
}

interface AllProductContext {
  allProduct: any
  setAllProduct: any
}

const AllProductContext = React.createContext<AllProductContext | null>(null)

export const AllProductProvider = ({ children }: StoreProps) => {
  const [allProduct, setAllProduct] = useState<any>(null)
  const { loader, setLoader } = useLoader()

  React.useEffect(() => {
    const getAllProductData = async () => {
      setLoader(true)
      const allProduct = await ApiService.getAllProduct()
      if (allProduct?.length > 0) setAllProduct(allProduct)
    }
    getAllProductData()
  }, [])

  React.useEffect(() => {
    if (allProduct?.length > 0) setLoader(false)
  }, [allProduct])

  return (
    <AllProductContext.Provider
      value={{
        allProduct,
        setAllProduct,
      }}
    >
      {children}
    </AllProductContext.Provider>
  )
}

export const useAllProduct = () => {
  const context = useContext(AllProductContext)

  if (context === null) {
    throw new Error("useAllProduct must be used within a AllProductProvider")
  }
  return context
}
