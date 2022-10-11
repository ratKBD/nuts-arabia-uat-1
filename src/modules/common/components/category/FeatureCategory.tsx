import React, {
  Children,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import Image from "next/image"
import Link from "next/link"
import { IoChevronForwardSharp } from "react-icons/io5"
import ApiService from "@services/ApiService"
import { useCollections } from "medusa-react"
import { CategoryContext } from "@lib/context/CategoryContext"
import Skeleton from "react-loading-skeleton"

const FeatureCategory = () => {
  const { categoryItems } = useContext(CategoryContext)

  console.log("=========categoryItems===>", categoryItems)
  /*   const [categoryItems, setCategoryItems] = useState<any>(null) */

  /* useEffect(() => {
    async function getAllProductData() {
      if (!categoryItems) {
        const allProduct = await ApiService.getAllProduct()
        let filterProduct: any = []
        if (allProduct && allProduct.length > 0) {
          filterProduct = allProduct.filter((data: any) => data.collection_id)
        }


        let categoryData: any = []
        if (filterProduct && filterProduct.length > 0) {
          console.log("filterProduct", filterProduct)
          categoryData = filterProduct.reduce(
            (acc: any, curr: any, index: any, array: any) => {
              console.log("curr", curr)
              const x = acc.find(
                (item: any) => item.parent === curr.collection.title
              )
              if (!x) {
                return acc.concat({
                  icon: curr.thumbnail,
                  type_id: curr.type_id,
                  parent: curr.collection.title,
                  children: array.reduce((accumulator: any, e: any) => {
                    const y = accumulator.find(
                      (item: any) => item === e.type.value
                    )
                    if (!y && curr.collection.title === e.collection.title) {
                      return accumulator.concat(e.type.value)
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

        console.log("Featured category-->getDatas", allProduct)
        console.log("Featured category-->filter", filterProduct)
        // console.log("edit", edit)
      }
    }
    getAllProductData()
  }, [])
  console.log("Featured category--->categoryData", categoryItems) */

  /* const { collections, isLoading } = useCollections()

  console.log("Featured category--->parents", collections) */

  /*  const FCategory = [
    {
      id: 1,
      children: ["Fish", "Meat"],
      icon: "https://i.ibb.co/y0zXYj5/carp-fish.png",
      parent: "Fish & Meat",
    },
    {
      id: 2,
      children: ['Dry Fruits', 'Fresh Fruits', 'Fresh Vegetable'],
      icon: "https://i.postimg.cc/RZ275n3f/cabbage.png",
      parent: "Fruits & Vegetable",
    },
    {
      id: 3,
      children: ['Fresh Seafood'],
      icon: "https://i.ibb.co/pfscwF4/shrimp.png",
      parent: "Fresh Seafood",
    },
    {
      id: 4,
      children: ['Oil', 'Rice', 'Flour', 'Dry Vegetable', 'Spices & Mixes'],
      icon: "https://i.ibb.co/hBv30Rt/frying-pan.png",
      parent: "Cooking Essentials",
    },
    {
      id: 5,
      children: ['Bread', 'Cereal'],
      icon: "https://i.ibb.co/dgPzSt7/bagel.png",
      parent: "Breakfast",
    },
    {
      id: 6,
      children: ['Tea', 'Water', 'Juice', 'Coffee', 'Energy Drinks'],
      icon: "https://i.ibb.co/Dz8LKDX/soft-drink.png",
      parent: "Drinks",
    },
    {
      id: 7,
      children: ['Dairy', 'Ice Cream', 'Butter & Ghee'],
      icon: "https://i.ibb.co/181Qpm8/milk.png",
      parent: "Milk & Dairy",
    },
    {
      id: 8,
      children: ["Organic Food"],
      icon: "https://i.ibb.co/xmGhNRF/apple.png",
      parent: "Organic Food",
    },
    {
      id: 9,
      children: ['Honey'],
      icon: "https://i.postimg.cc/65JSfy6H/honey-1.png",
      parent: "Honey",
    },
    {
      id: 10,
      children: ['Sauces', 'Pickles & Condiments'],
      icon: "https://i.postimg.cc/mk09xvk4/chili-sauce.png",
      parent: "Sauces & Pickles",
    },
    {
      id: 11,
      children: ['Jam & Jelly'],
      icon: "https://i.postimg.cc/rmLvfsMC/strawberry-jam-1.png",
      parent: "Jam & Jelly",
    },
    {
      id: 12,
      children: ['Chocolate', 'Chips & Nuts', 'Canned Food'],
      icon: "https://i.ibb.co/HT7c6VT/chips.png",
      parent: "Snacks & Instant",
    },
  ] */
  return (
    <>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
        {categoryItems
          ? categoryItems?.map((category: any, i: any) => (
              <li className="group" key={i + 1}>
                <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
                  <div className="flex items-center">
                    <div>
                      <Image
                        src={category.icon}
                        alt={category.parent}
                        width={35}
                        height={35}
                      />
                    </div>
                    <div className="pl-4">
                      <Link href={`/collections/${category.collection_id}`}>
                        <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1">
                          {category.parent}
                        </h3>
                      </Link>
                      <ul className="pt-1 mt-1">
                        {category.children.slice(0, 3).map((children: any) => (
                          <li key={children} className="pt-1">
                            <Link href={`/types/${children.type_id}`} passHref>
                              <a className="flex items-center font-serif text-xs text-gray-400  capitalize cursor-pointer">
                                <span className="text-xs text-gray-400 ">
                                  <IoChevronForwardSharp />
                                </span>
                                {children.title.toLowerCase()}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
              (category: any, i: any) => (
                <li className="group" key={i + 1}>
                  <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
                    <div className="flex items-center">
                      <div>
                        {/* <Image
                    src={category.icon }
                    alt={category.parent }
                    width={35}
                    height={35}
                  /> */}
                        <Skeleton height={35} width={35} />
                      </div>
                      <div className="pl-4">
                        <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                          <Skeleton height={20} width={100} />
                        </h3>
                        <ul className="pt-1 mt-1">
                          {[1, 2 /* , 3 */].map((children: any, i: any) => (
                            <li key={i + 1} className="pt-1">
                              <Skeleton height={10} width={80} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              )
            )}
      </ul>
    </>
  )
}

export default FeatureCategory
