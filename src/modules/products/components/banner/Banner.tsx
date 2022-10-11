import Link from "next/link"
import React from "react"

const Banner = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="font-serif text-xl">
          <span className=" font-bold" style={{ color: "#791B10" }}>
            100% Natural Quality
          </span>{" "}
          Organic Product
        </h1>

        <p style={{ color: "#020203" }}>
          See Our latest discounted products from here and get a special
          <Link href="/discount">
            <a className=" ml-1" style={{ color: "#791B10" }}>
              discount product
            </a>
          </Link>
        </p>
      </div>
      {/* <Link href="/search?Category=organic-food"> */}
      <Link href="/search?query=natural">
        <a
          className="text-sm font-serif font-medium px-6 py-2  text-center rounded-full text-white hover:bg-emerald-700"
          style={{ background: "#301B28" }}
        >
          Shop Now
        </a>
      </Link>
    </div>
  )
}

export default Banner
