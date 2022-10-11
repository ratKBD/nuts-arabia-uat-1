import useToggleState from "@lib/hooks/use-toggle-state"
import ApiService from "@services/ApiService"

import React, {
  createContext,
  useContext,
  useMemo,
  useEffect,
  useState,
} from "react"

export interface ICategoryProviderProps {
  children: any
}

export interface CategoryContext {
  categoryItems: any
}

export const CategoryContext = createContext<CategoryContext>({
  categoryItems: null,
})

export const CategoryProvider: React.FC<ICategoryProviderProps> = ({
  children,
}) => {
  const [categoryItems, setCategoryItems] = useState<any>(null)

  useEffect(() => {
    async function getAllProductData() {
      if (!categoryItems) {
        const allProduct = await ApiService.getAllProduct()
        const typeIdProducts = allProduct.filter((product: any) => {
          return product.type_id === "ptyp_01GARH97RYR7P6150DWYS344Q0"
        })
        const typeIdProduct: any = [typeIdProducts[0]].map((product: any) => {
          return { typeId: product.type.id, title: product.type.value }
        })
        // const idsWithDuplicateValue: any = typeIdProducts.map(
        //   (product: any) => {
        //     return product.type_id
        //   }
        // )
        // // let mySet = new Set();
        // let ids = idsWithDuplicateValue.filter(
        //   (elem: any, index: any, self: any) => {
        //     return index === self.indexOf(elem)
        //   }
        // )
        console.log("typeIds", typeIdProduct)
        let filterProduct: any = []
        if (allProduct && allProduct.length > 0) {
          filterProduct = allProduct.filter((data: any) => data.collection_id)
        }

        let categoryData: any = []
        if (filterProduct && filterProduct.length > 0) {
          console.log("caterody--->context--filterProduct", filterProduct)
          categoryData = filterProduct.reduce(
            (acc: any, curr: any, index: any, array: any) => {
              console.log("curr", curr)
              const x = acc.find(
                (item: any) => item.parent === curr.collection.title
              )
              if (!x) {
                return acc.concat({
                  icon: curr.thumbnail,
                  collection_id: curr.collection_id,
                  parent: curr.collection.title,
                  children: array.reduce((accumulator: any, e: any) => {
                    const y = accumulator.find(
                      (item: any) => item.title === e.type.value
                    )
                    if (!y && curr.collection.title === e.collection.title) {
                      console.log("accumulator", accumulator)
                      return accumulator.concat({
                        title: e.type.value,
                        type_id: e.type.id,
                      })
                    } else {
                      return accumulator
                    }
                  }, []),
                })
              } else {
                return acc
              }
            },
            []
          )
        }
        if (categoryData && categoryData.length > 0)
          setCategoryItems(categoryData)

        // const edit = categoryData.map((data: any) => data.title, data)

        console.log("caterody--->context--getDatas", allProduct)
        console.log("caterody--->context--filter", filterProduct)
        // console.log("edit", edit)
      }
    }
    getAllProductData()
  }, [])

  const value: any = useMemo(
    () => ({
      categoryItems,
    }),

    [categoryItems]
  )

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  )
}

export const useCategoryActions = () => {
  const context = useContext(CategoryContext)
  if (context === null) {
    throw new Error(
      "useCategoryActions must be used within a CategoryActionProvider"
    )
  }
  return context
}
