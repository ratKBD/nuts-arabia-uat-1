import { ReactElement } from "react"
import React from "react"
import Layout from "@modules/layout/templates"
import PageHeader from "@modules/products/components/header/PageHeader"
import { NextPageWithLayout } from "types/global"
import Link from "next/link"

const Blog: NextPageWithLayout = () => {
  const blogItem = [
    {
      id: 1,
      title: "Online Discount Coupons",
      date: "01 OCT 2020",
      description:
        "Online discount coupons enable access to great offers from some of the world’s best sites for Internet shopping. The online coupons are designed to allow compulsive online shoppers to access massive discounts on a variety of products. The regular shopper accesses the coupons in bulk and avails of great festive offers and freebies thrown in from time to time. The coupon code option is most commonly used when using a shopping cart. The coupon code is entered on the order page just before checking out. Every online shopping resource has a discount coupon submission option to confirm the coupon code. The dedicated web sites allow the shopper to check whether or not a discount is still applicable. If it is, the sites also enable the shopper to calculate the total cost after deducting the coupon amount like in the case of grocery coupons. Online discount coupons are very convenient to use. They offer great deals and professionally negotiated rates if bought from special online coupon outlets. With a little research and at times, insider knowledge the online discount coupons are a real steal. They are designed to promote products by offering ‘real value for money’ packages. The coupons are legitimate and help with budgeting, in the case of a compulsive shopper. They are available for special trade show promotions, nightlife, sporting events and dinner shows and just about anything that could be associated with the promotion of a product. The coupons enable the online shopper to optimize net access more effectively. Getting a ‘big deal’ is not more utopian amidst rising prices. The online coupons offer internet access to the best and cheapest products displayed online. Big discounts are only a code away! By Gaynor Borade (buzzle.com)",

      titleInner: "Online Discount Coupons",
      dateInner: "01 OCT 2020",
      descriptionInner:
        "Online discount coupons enable access to great offers from some of the world’s best sites for Internet shopping. The online coupons are designed to allow compulsive online shoppers to access massive discounts on a variety of products. The regular shopper accesses the coupons in bulk and avails of great festive offers and freebies thrown in from time to time. The coupon code option is most commonly used when using a shopping cart. The coupon code is entered on the order page just before checking out. Every online shopping resource has a discount coupon submission option to confirm the coupon code. The dedicated web sites allow the shopper to check whether or not a discount is still applicable. If it is, the sites also enable the shopper to calculate the total cost after deducting the coupon amount like in the case of grocery coupons. Online discount coupons are very convenient to use. They offer great deals and professionally negotiated rates if bought from special online coupon outlets. With a little research and at times, insider knowledge the online discount coupons are a real steal. They are designed to promote products by offering ‘real value for money’ packages. The coupons are legitimate and help with budgeting, in the case of a compulsive shopper. They are available for special trade show promotions, nightlife, sporting events and dinner shows and just about anything that could be associated with the promotion of a product. The coupons enable the online shopper to optimize net access more effectively. Getting a ‘big deal’ is not more utopian amidst rising prices. The online coupons offer internet access to the best and cheapest products displayed online. Big discounts are only a code away! By Gaynor Borade (buzzle.com)",
    },
    {
      id: 2,
      title: "Customer Service - Client Service",
      date: "01 OCT 2020",
      description: `Managing online business requires different skills and abilities than managing a business in the ‘real world.’ Customers can easily detect the size and determine the prestige of a business when they have the ability to walk in and take a look around. Not only do ‘real-world’ furnishings and location tell the customer what level of professionalism to expect, but "real world" personal encounters allow first impressions to be determined by how the business approaches its customer service. When a customer walks into a retail business just about anywhere in the world, that customer expects prompt and personal service, especially with regards to questions that they may have about products they wish to purchase.

      Customer service or the client service is the service provided to the customer for his satisfaction during and after the purchase. It is necessary to every business organization to understand the customer needs for value added service. So customer data collection is essential. For this, a good customer service is important. The easiest way to lose a client is because of the poor customer service. The importance of customer service changes by product, industry and customer. Client service is an important part of every business organization. Each organization is different in its attitude towards customer service. Customer service requires a superior quality service through a careful design and execution of a series of activities which include people, technology and processes. Good customer service starts with the design and communication between the company and the staff.
      
      In some ways, the lack of a physical business location allows the online business some leeway that their ‘real world’ counterparts do not enjoy. Location is not important, furnishings are not an issue, and most of the visual first impression is made through the professional design of the business website.
      
      However, one thing still remains true. Customers will make their first impressions on the customer service they encounter. Unfortunately, in online business there is no opportunity for front- line staff to make a good impression. Every interaction the customer has with the website will be their primary means of making their first impression towards the business and its client service. Good customer service in any online business is a direct result of good website design and planning.`,
      titleInner: "Customer Service - Client Service",
      dateInner: "01 OCT 2020",
      descriptionInner: `Managing online business requires different skills and abilities than managing a business in the ‘real world.’ Customers can easily detect the size and determine the prestige of a business when they have the ability to walk in and take a look around. Not only do ‘real-world’ furnishings and location tell the customer what level of professionalism to expect, but "real world" personal encounters allow first impressions to be determined by how the business approaches its customer service. When a customer walks into a retail business just about anywhere in the world, that customer expects prompt and personal service, especially with regards to questions that they may have about products they wish to purchase.

      Customer service or the client service is the service provided to the customer for his satisfaction during and after the purchase. It is necessary to every business organization to understand the customer needs for value added service. So customer data collection is essential. For this, a good customer service is important. The easiest way to lose a client is because of the poor customer service. The importance of customer service changes by product, industry and customer. Client service is an important part of every business organization. Each organization is different in its attitude towards customer service. Customer service requires a superior quality service through a careful design and execution of a series of activities which include people, technology and processes. Good customer service starts with the design and communication between the company and the staff.
      
      In some ways, the lack of a physical business location allows the online business some leeway that their ‘real world’ counterparts do not enjoy. Location is not important, furnishings are not an issue, and most of the visual first impression is made through the professional design of the business website.
      
      However, one thing still remains true. Customers will make their first impressions on the customer service they encounter. Unfortunately, in online business there is no opportunity for front- line staff to make a good impression. Every interaction the customer has with the website will be their primary means of making their first impression towards the business and its client service. Good customer service in any online business is a direct result of good website design and planning.
      
      `,
    },
  ]

  return (
    <>
      <PageHeader title="Blog" />
      <div className="bg-white py-10 pb-10 p-20">
        {blogItem.map((data: any) => (
          // eslint-disable-next-line react/jsx-key
          <div className="max-w-screen-2xl mx-auto lg:p-5  sm:p-5  border border-gray-500 rounded-lg shadow mb-10">
            <div className="mb-8 lg:mb-12 last:mb-0 ">
              <h2 className="text-sm xl:text-sm xl:leading-7 font-medium font-serif mb-2 lg:mb-2">
                {data.date}
              </h2>
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-4 lg:mb-4">
                {data.title}
              </h2>
              <div className="mb-4 lg:mb-4 last:mb-0 text-justify">
                <p>{data.description}</p>
              </div>

              <div className="flex items-center justify-end  h-10">
                <Link
                  href={{
                    pathname: "/blog/[id]",
                    query: { id: data.id.toString() },
                  }}
                  passHref
                >
                  <button
                    className="border-t border-gray-100 w-20 h-10 text-white"
                    style={{ backgroundColor: "#592316" }}
                  >
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
Blog.getLayout = (page: ReactElement) => {
  return (
    <Layout title="Privacy Policy" description="This is privacy policy page">
      {page}
    </Layout>
  )
}

export default Blog
