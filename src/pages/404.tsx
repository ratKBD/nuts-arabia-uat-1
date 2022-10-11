import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import Image from "next/image"
import Link from "next/link"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"

const NotFound: NextPageWithLayout = () => {
  return (
    <>
      <Head title="404" description="Something went wrong" />
      {/* <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
        <h1 className="text-2xl-semi text-gry-900">Page not found</h1>
        <p className="text-small-regular text-gray-700">
          The page you tried to access does not exist.
        </p>
        <Link href="/">
          <a className="mt-4 underline text-base-regular text-gray-900">
            Go to frontpage
          </a>
        </Link>
      </div> */}
      {/* <div className="px-6 py-10 lg:py-20 bg-emerald-50 h-screen flex flex-wrap content-center"> */}
      <div className="px-6 py-10 lg:py-20 bg-emerald-50 h-full flex flex-wrap content-center">
        <div className="block justify-items-stretch mx-auto items-center text-center">
          <Image width={650} height={450} src="/404.svg" alt="logo" />
          <h2 className="font-bold font-serif font-2xl lg:text-4xl leading-6 mb-4">
            Page is not found!
          </h2>
          <p className="block text-center text-base font-sans text-gray-600">
            Sorry! This page is not found! Please try again later.
          </p>

          <Link href="/">
            <a className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-emerald-500 text-white px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-6 text-sm lg:text-base w-full sm:w-auto">
              Back to Home
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

NotFound.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default NotFound
