import { StoreGetProductsParams } from "@medusajs/medusa"
import { useCollections } from "medusa-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useContext, useState } from "react"
import {
  IoChevronForwardOutline,
  IoChevronDownOutline,
  IoRemoveSharp,
} from "react-icons/io5"
import { SidebarContext } from "../context/SidebarContext"

export interface ICategoryCardProps {
  title: any
  icon: any
  nested: any
}
const CategoryCard: React.FC<ICategoryCardProps> = ({
  title,
  icon,
  nested,
}: ICategoryCardProps) => {
  // console.log("first", title, icon, nested)

  const [show, setShow] = useState(false)
  const showCategory = () => setShow(!show)
  const router = useRouter()
  // const { closeCategoryDrawer } = useContext(SidebarContext)

  // const handleSubCategory = (children: any) => {
  //   router.push(
  //     `/search?category=${children
  //       .toLowerCase()
  //       .replace("&", "")
  //       .split(" ")
  //       .join("-")}`
  //   )
  //   closeCategoryDrawer()
  // }

  console.log("nested", nested)
  return (
    <>
      <a
        onClick={showCategory}
        className="p-2 flex items-center rounded-md hover:bg-gray-50 w-full "
        role="button"
      >
        <Image
          src={icon}
          width={18}
          height={18}
          alt={title}
          aria-hidden="true"
        />
        <div className="inline-flex items-center justify-between ml-3 text-sm font-medium w-full ">
          {title}
          <span className="transition duration-700 ease-in-out inline-flex loading-none items-end text-gray-400">
            {show ? <IoChevronDownOutline /> : <IoChevronForwardOutline />}
          </span>
        </div>
      </a>
      {show ? (
        <ul className="pl-6 pb-3 pt-1 -mt-1">
          {nested.map((children: any) => (
            <li key={children}>
              <Link href={`/types/${children.type_id}`} passHref>
                <a
                  // onClick={() => handleSubCategory(children)}
                  className="flex items-center font-serif py-1 text-sm text-gray-600 capitalize cursor-pointer"
                >
                  <span className="text-xs text-gray-500 pr-1">
                    <IoRemoveSharp />
                  </span>
                  {children.title.toLowerCase()}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  )
}

export default CategoryCard
