import React, { useContext, useState } from "react"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import PageHeader from "@modules/products/components/header/PageHeader"
import Link from "next/link"
import { CategoryContext } from "@lib/context/CategoryContext"

const SiteMap = () => {
  const { categoryItems } = useContext(CategoryContext)
  console.log("categoryItems sitemap-->", categoryItems)
  const [general, setGeneral] = useState<any>([
    { title: "Home Page", link: "/" },
    { title: "Store", link: "/store" },
    { title: "Blogs", link: "/blog" },
    { title: "News", link: "/news" },
    { title: "Contact Us", link: "/contact-us" },
    { title: "About Us", link: "/about-us" },
    { title: "Offers", link: "/offer" },
    { title: "Privacy Policy", link: "/privacy-policy" },
    { title: "Terms & Conditions", link: "/terms-and-conditions" },
  ])
  return (
    <>
      <PageHeader title="Site Map" />
      <div className="w-full bg-white shadow-sm lg:px-10 lg:py-5 p-6 rounded-lg">
        <div className=" max-w-screen-2xl px-3 sm:px-10 pb-10 mx-auto lg:py-20 py-10 ">
          <div className="text-center max-w-screen-2xl px-3 sm:px-10 pb-10 font-bold text-gray-600">
            <p>{`View the sitemap for this website below, with links to each of the pages and brief descriptions of what to find in each section`}</p>
          </div>

          <div className=" text-center max-w-screen-2xl px-3 sm:px-10  border-y-2 py-8 font-bold  ">
            <h2 className="mb-4" style={{color:"#301B28"}}>GENERAL</h2>
            <div className="flex flex-wrap justify-between" >
              {general?.map((generalObj: any, i: any) => (
                <div className="mx-6">
                  <Link href={generalObj.link}>
                    <a className="font-serif py-2 text-sm font-medium  text-red-900 hover:text-red-700 ">
                      {generalObj.title}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className=" text-center max-w-screen-2xl px-7 sm:px-10 pb-10 border-b-2 py-8">
            <h2 className="mb-4 font-bold " style={{color:"#301B28"}}>CATEGORIES</h2>
            <div className="flex flex-wrap cursor-pointer">
              {categoryItems?.map((category: any, i: any) => (
                <div className="mx-6" key={i + 1}>
                  <Link href={`/collections/${category.collection_id}`}>
                    <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 text-red-900  hover:text-red-700">
                      {category.parent}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className=" text-center max-w-screen-2xl px-7 sm:px-10 pb-10 border-b-2 py-8">
            <h2 className="mb-4 font-bold " style={{color:"#301B28"}}>MANUFACTURERS</h2>
            <div className="mx-6">
              <Link href="/store">
                <a className="font-serif py-2 text-sm font-medium  text-red-900 hover:text-red-700">
                  Al Alam Al Lazeez Trading LLC (NutsArabia)
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

SiteMap.getLayout = (page: ReactElement) => {
  return (
    <Layout title="Contact Us" description="This is contact us page">
      {page}
    </Layout>
  )
}

export default SiteMap
