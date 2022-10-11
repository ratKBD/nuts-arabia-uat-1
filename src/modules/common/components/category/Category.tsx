import { fetchProductsList } from "@lib/data"
import usePreviews from "@lib/hooks/use-previews"
import { StoreGetProductsParams } from "@medusajs/medusa"
import ApiService from "@services/ApiService"
import { filter } from "lodash"
import { useCart, useCollections } from "medusa-react"
import Image from "next/image"
import Link from "next/link"
import React, { useContext, useEffect, useMemo, useState } from "react"
import { IoBagCheckOutline, IoClose } from "react-icons/io5"
import { useInfiniteQuery } from "react-query"
import CategoryServices from "services/CategoryServices"
import { NextPageWithLayout } from "types/global"
import { SidebarContext } from "../context/SidebarContext"
import Loading from "../preloader/Loading"
import CategoryCard from "./CategoryCard"
import { CategoryContext } from "@lib/context/CategoryContext"
import Skeleton from "react-loading-skeleton"
import { FiAlertCircle, FiGift, FiHelpCircle } from "react-icons/fi"
import {
  HiOutlineDocumentText,
  HiOutlinePhoneIncoming,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
} from "react-icons/hi"

const Category = () => {
  const { categoryDrawerOpen, closeCategoryDrawer } = useContext(SidebarContext)

  const { categoryItems } = useContext(CategoryContext)

  console.log("=========categoryItemsdropdown===>", categoryItems)
  // const { data, loading, error } = useAsync(() =>
  //   CategoryServices.getShowingCategory()
  // )

  const [params, setParams] = useState<StoreGetProductsParams>({})
  const { cart } = useCart()

  const pages = [
    // {
    //   title: 'User',
    //   href: '/user/dashboard',
    //   icon: FiUser,
    // },
    {
      title: "Offer",
      href: "/offer",
      icon: FiGift,
    },
    {
      title: "Checkout",
      href: "/checkout",
      icon: IoBagCheckOutline,
    },
    {
      title: "FAQ",
      href: "/faq",
      icon: FiHelpCircle,
    },
    {
      title: "About Us",
      href: "/about-us",
      icon: HiOutlineUserGroup,
    },
    {
      title: "Contact Us",
      href: "/contact-us",
      icon: HiOutlinePhoneIncoming,
    },
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
      icon: HiOutlineShieldCheck,
    },
    {
      title: "Terms & Conditions",
      href: "/terms-and-conditions",
      icon: HiOutlineDocumentText,
    },
    // {
    //   title: "404",
    //   href: "/404",
    //   icon: FiAlertCircle,
    // },
  ]

  const queryParams = useMemo(() => {
    const p: StoreGetProductsParams = {}

    if (cart?.id) {
      p.cart_id = cart.id
    }

    p.is_giftcard = false

    return {
      ...p,
      ...params,
    }
  }, [cart?.id, params])

  const {
    data,
    hasNextPage,
    fetchNextPage,
    /*  isLoading, */ isFetchingNextPage,
  } = useInfiniteQuery(
    [`infinite-products-store`, queryParams, cart],
    ({ pageParam }) => fetchProductsList({ pageParam, queryParams }),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  )
  // const previews = usePreviews({ pages: data?.pages, region: cart?.region })

  const { collections, isLoading } = useCollections()

  console.log("parents", collections)

  // console.log("all", previews)

  return (
    <div className="flex flex-col w-full h-full bg-white cursor-pointer scrollbar-hide">
      {categoryDrawerOpen && (
        <div className="w-full flex justify-between items-center h-16 px-6 py-4 bg-emerald-500 text-white border-b border-gray-100">
          <h2 className="font-semibold font-serif text-lg m-0 text-heading flex align-center">
            <Link href="/">
              <a className="mr-10">
                <Image
                  width={100}
                  height={38}
                  src="/logo/logo-light.svg"
                  alt="logo"
                />
              </a>
            </Link>
          </h2>
          <button
            onClick={closeCategoryDrawer}
            className="flex text-xl items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-red-500 p-2 focus:outline-none transition-opacity hover:text-red-600"
            aria-label="close"
          >
            <IoClose />
          </button>
        </div>
      )}
      <div className="overflow-y-scroll scrollbar-hide w-full max-h-full">
        {categoryDrawerOpen && (
          <h2 className="font-semibold font-serif text-lg m-0 text-heading flex align-center border-b px-8 py-3">
            All Categories
          </h2>
        )}
        {/* {error ? (
          <p className="flex justify-center align-middle items-center m-auto text-xl text-red-500">
            <span> {error}</span>
          </p>
        ) :  data.length === 0 ? (
          <Loading loading={loading} />
        ) : ( */}
        {/* <div className="relative grid gap-2 p-6">
          {collections?.map((data) => (
            <CategoryCard
              key={data.id}
              title={data.title}
              // icon={category.thumbnail}
              // nested={category.children }
              nested={["fill this later"]}
            />
          ))}
        </div> */}
        <div className="relative grid gap-2 p-6">
          {categoryItems
            ? categoryItems?.map((data: any) => (
                <CategoryCard
                  key={data.id}
                  title={data.parent}
                  icon={data.icon}
                  nested={data.children}
                />
              ))
            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data: any) => (
                /*  <CategoryCard
                  key={data.id}
                  title={data.parent}
                  icon={data.icon }
                  nested={data.children}
                /> */
                <div className="flex">
                  <div className="mr-3">
                    <Skeleton height={20} width={20} /* circle={true} */ />
                  </div>
                  <Skeleton height={20} width={230} />
                </div>
              ))}
        </div>
        {/* )} */}
        {/* {categoryDrawerOpen && (
          <div className="relative grid gap-2 mt-5">
            <h3 className="font-semibold font-serif text-lg m-0 text-heading flex align-center border-b px-8 py-3">
              Pages
            </h3>
            <div className="relative grid gap-1 p-6">
              {pages.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="p-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
                >
                  <item.icon
                    className="flex-shrink-0 h-4 w-4"
                    aria-hidden="true"
                  />
                  <p className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600">
                    {item.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )} */}
        {categoryDrawerOpen && (
          <div className="relative grid gap-2 mt-5">
            <h3 className="font-semibold font-serif text-lg m-0 text-heading flex align-center border-b px-8 py-3">
              Pages
            </h3>
            <div className="relative grid gap-1 p-6">
              {pages
                ? pages.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="p-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full"
                    >
                      <item.icon
                        className="flex-shrink-0 h-4 w-4"
                        aria-hidden="true"
                      />
                      <p className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full ">
                        {item.title}
                      </p>
                    </a>
                  ))
                : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data: any) => (
                    /*  <CategoryCard
                  key={data.id}
                  title={data.parent}
                  icon={data.icon }
                  nested={data.children}
                /> */
                    <div className="flex">
                      <div className="mr-3">
                        <Skeleton height={20} width={20} /* circle={true} */ />
                      </div>
                      <Skeleton height={20} width={230} />
                    </div>
                  ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Category
