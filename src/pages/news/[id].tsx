import PageHeader from "@modules/common/components/head/PageHeader"
import Layout from "@modules/layout/templates"
import { GetStaticPaths, GetStaticProps } from "next"

import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { ReactElement } from "react"
import { IoChevronBackSharp } from "react-icons/io5"

export const newsData = [
  {
    id: "1",
    title: "Raw vs Roasted Nuts: Which Is Healthier?",
    date: "01 OCT 2020",
    url: `https://www.nutsarabia.com/images/uploaded/raw%20or%20roasted%20nuts%20blog%20banner_1000.png`,
    description: `Nuts are generally roasted to improve their taste, aroma and crunchy texture

      Roasting is defined as cooking using dry heat, which cooks the food evenly on all sides. Most nuts are roasted without their shell, except for pistachios, which are often roasted in-shell.
      
      Meanwhile, raw nuts have not been roasted.
      
      Roasting methods are sometimes used to separate the shells of nuts from their kernels. This is a common method of shelling cashews and the reason why they’re almost never sold raw
      
      There are two main kinds of roasting:
      
      Dry roasting: Roasting without any oil. Nuts can be dry roasted in the oven or on a frying pan.
      Oil roasting: Roasting using oil. Nuts can also be oil roasted in the oven or on a frying pan.
      In addition to these two methods, nuts can be roasted in the microwave.
      
      You can buy nuts roasted, or you can roast them yourself.`,
    subTitle: `Both Have a Similar Nutrient Content`,
    titleDes: `Roasting nuts changes their structure and chemical composition.

    Specifically, it changes their color and decreases their moisture content, giving rise to their crunchy texture
    
    Raw and dry-roasted nuts have very similar amounts of fat, carbs and protein. Although, roasted nuts have slightly more fat and calories per gram, but the difference is minimal.
    
    One ounce (28 grams) of raw almonds contains 161 calories and 14 grams of fat, whereas the same amount of dry-roasted almonds contains 167 calories and 15 grams of fat
    
    Similarly, 1 ounce (28 grams) of raw pecans contains 193 calories and 20 grams of fat, but the same amount of dry-roasted pecans contains 199 calories and 21 grams of fat
    
    During roasting, nuts lose some moisture. Therefore, a roasted nut weighs less than a raw nut. That explains why the fat content per ounce is slightly higher in roasted nuts
    
    Some studies have shown that roasting nuts does not change the overall fat content. However, the polyunsaturated fats in roasted nuts become more susceptible to oxidation, as the structure of the nut changes
    
    Meanwhile, the protein and carb contents of raw and roasted nuts are very similar. Nevertheless, roasted nuts can be slightly higher or lower in these macronutrients, depending on the type of nut
    
    Contrary to what you might expect, oil-roasted nuts are only slightly higher in fat and calories than dry-roasted nuts. That’s because nuts are naturally high in fat and cannot absorb much more of it from added fat
    
     `,
  },
  {
    id: "2",
    title: "Raw vs Roasted Nuts: Which Is Healthier?",
    date: "01 OCT 2020",
    url: `https://www.nutsarabia.com/images/uploaded/raw%20or%20roasted%20nuts%20blog%20banner_1000.png`,
    description: `Nuts are generally roasted to improve their taste, aroma and crunchy texture

      Roasting is defined as cooking using dry heat, which cooks the food evenly on all sides. Most nuts are roasted without their shell, except for pistachios, which are often roasted in-shell.
      
      Meanwhile, raw nuts have not been roasted.
      
      Roasting methods are sometimes used to separate the shells of nuts from their kernels. This is a common method of shelling cashews and the reason why they’re almost never sold raw
      
      There are two main kinds of roasting:
      
      Dry roasting: Roasting without any oil. Nuts can be dry roasted in the oven or on a frying pan.
      Oil roasting: Roasting using oil. Nuts can also be oil roasted in the oven or on a frying pan.
      In addition to these two methods, nuts can be roasted in the microwave.
      
      You can buy nuts roasted, or you can roast them yourself.`,
    subTitle: `Both Have a Similar Nutrient Content`,
    titleDes: `Roasting nuts changes their structure and chemical composition.

    Specifically, it changes their color and decreases their moisture content, giving rise to their crunchy texture
    
    Raw and dry-roasted nuts have very similar amounts of fat, carbs and protein. Although, roasted nuts have slightly more fat and calories per gram, but the difference is minimal.
    
    One ounce (28 grams) of raw almonds contains 161 calories and 14 grams of fat, whereas the same amount of dry-roasted almonds contains 167 calories and 15 grams of fat
    
    Similarly, 1 ounce (28 grams) of raw pecans contains 193 calories and 20 grams of fat, but the same amount of dry-roasted pecans contains 199 calories and 21 grams of fat
    
    During roasting, nuts lose some moisture. Therefore, a roasted nut weighs less than a raw nut. That explains why the fat content per ounce is slightly higher in roasted nuts
    
    Some studies have shown that roasting nuts does not change the overall fat content. However, the polyunsaturated fats in roasted nuts become more susceptible to oxidation, as the structure of the nut changes
    
    Meanwhile, the protein and carb contents of raw and roasted nuts are very similar. Nevertheless, roasted nuts can be slightly higher or lower in these macronutrients, depending on the type of nut
    
    Contrary to what you might expect, oil-roasted nuts are only slightly higher in fat and calories than dry-roasted nuts. That’s because nuts are naturally high in fat and cannot absorb much more of it from added fat
    
     `,
  },
  {
    id: "3",
    title: "Raw vs Roasted Nuts: Which Is Healthier?",
    date: "01 OCT 2020",
    url: `https://www.nutsarabia.com/images/uploaded/raw%20or%20roasted%20nuts%20blog%20banner_1000.png`,
    description: `Nuts are generally roasted to improve their taste, aroma and crunchy texture

      Roasting is defined as cooking using dry heat, which cooks the food evenly on all sides. Most nuts are roasted without their shell, except for pistachios, which are often roasted in-shell.
      
      Meanwhile, raw nuts have not been roasted.
      
      Roasting methods are sometimes used to separate the shells of nuts from their kernels. This is a common method of shelling cashews and the reason why they’re almost never sold raw
      
      There are two main kinds of roasting:
      
      Dry roasting: Roasting without any oil. Nuts can be dry roasted in the oven or on a frying pan.
      Oil roasting: Roasting using oil. Nuts can also be oil roasted in the oven or on a frying pan.
      In addition to these two methods, nuts can be roasted in the microwave.
      
      You can buy nuts roasted, or you can roast them yourself.`,
    subTitle: `Both Have a Similar Nutrient Content`,
    titleDes: `Roasting nuts changes their structure and chemical composition.

    Specifically, it changes their color and decreases their moisture content, giving rise to their crunchy texture
    
    Raw and dry-roasted nuts have very similar amounts of fat, carbs and protein. Although, roasted nuts have slightly more fat and calories per gram, but the difference is minimal.
    
    One ounce (28 grams) of raw almonds contains 161 calories and 14 grams of fat, whereas the same amount of dry-roasted almonds contains 167 calories and 15 grams of fat
    
    Similarly, 1 ounce (28 grams) of raw pecans contains 193 calories and 20 grams of fat, but the same amount of dry-roasted pecans contains 199 calories and 21 grams of fat
    
    During roasting, nuts lose some moisture. Therefore, a roasted nut weighs less than a raw nut. That explains why the fat content per ounce is slightly higher in roasted nuts
    
    Some studies have shown that roasting nuts does not change the overall fat content. However, the polyunsaturated fats in roasted nuts become more susceptible to oxidation, as the structure of the nut changes
    
    Meanwhile, the protein and carb contents of raw and roasted nuts are very similar. Nevertheless, roasted nuts can be slightly higher or lower in these macronutrients, depending on the type of nut
    
    Contrary to what you might expect, oil-roasted nuts are only slightly higher in fat and calories than dry-roasted nuts. That’s because nuts are naturally high in fat and cannot absorb much more of it from added fat
    
     `,
  },
  {
    id: "4",
    title: "Raw vs Roasted Nuts: Which Is Healthier?",
    date: "01 OCT 2020",
    url: `https://www.nutsarabia.com/images/uploaded/raw%20or%20roasted%20nuts%20blog%20banner_1000.png`,
    description: `Nuts are generally roasted to improve their taste, aroma and crunchy texture

      Roasting is defined as cooking using dry heat, which cooks the food evenly on all sides. Most nuts are roasted without their shell, except for pistachios, which are often roasted in-shell.
      
      Meanwhile, raw nuts have not been roasted.
      
      Roasting methods are sometimes used to separate the shells of nuts from their kernels. This is a common method of shelling cashews and the reason why they’re almost never sold raw
      
      There are two main kinds of roasting:
      
      Dry roasting: Roasting without any oil. Nuts can be dry roasted in the oven or on a frying pan.
      Oil roasting: Roasting using oil. Nuts can also be oil roasted in the oven or on a frying pan.
      In addition to these two methods, nuts can be roasted in the microwave.
      
      You can buy nuts roasted, or you can roast them yourself.`,
    subTitle: `Both Have a Similar Nutrient Content`,
    titleDes: `Roasting nuts changes their structure and chemical composition.

    Specifically, it changes their color and decreases their moisture content, giving rise to their crunchy texture
    
    Raw and dry-roasted nuts have very similar amounts of fat, carbs and protein. Although, roasted nuts have slightly more fat and calories per gram, but the difference is minimal.
    
    One ounce (28 grams) of raw almonds contains 161 calories and 14 grams of fat, whereas the same amount of dry-roasted almonds contains 167 calories and 15 grams of fat
    
    Similarly, 1 ounce (28 grams) of raw pecans contains 193 calories and 20 grams of fat, but the same amount of dry-roasted pecans contains 199 calories and 21 grams of fat
    
    During roasting, nuts lose some moisture. Therefore, a roasted nut weighs less than a raw nut. That explains why the fat content per ounce is slightly higher in roasted nuts
    
    Some studies have shown that roasting nuts does not change the overall fat content. However, the polyunsaturated fats in roasted nuts become more susceptible to oxidation, as the structure of the nut changes
    
    Meanwhile, the protein and carb contents of raw and roasted nuts are very similar. Nevertheless, roasted nuts can be slightly higher or lower in these macronutrients, depending on the type of nut
    
    Contrary to what you might expect, oil-roasted nuts are only slightly higher in fat and calories than dry-roasted nuts. That’s because nuts are naturally high in fat and cannot absorb much more of it from added fat
    
     `,
  },
  {
    id: "5",
    title: "Raw vs Roasted Nuts: Which Is Healthier?",
    date: "01 OCT 2020",
    url: `https://www.nutsarabia.com/images/uploaded/raw%20or%20roasted%20nuts%20blog%20banner_1000.png`,
    description: `Nuts are generally roasted to improve their taste, aroma and crunchy texture

      Roasting is defined as cooking using dry heat, which cooks the food evenly on all sides. Most nuts are roasted without their shell, except for pistachios, which are often roasted in-shell.
      
      Meanwhile, raw nuts have not been roasted.
      
      Roasting methods are sometimes used to separate the shells of nuts from their kernels. This is a common method of shelling cashews and the reason why they’re almost never sold raw
      
      There are two main kinds of roasting:
      
      Dry roasting: Roasting without any oil. Nuts can be dry roasted in the oven or on a frying pan.
      Oil roasting: Roasting using oil. Nuts can also be oil roasted in the oven or on a frying pan.
      In addition to these two methods, nuts can be roasted in the microwave.
      
      You can buy nuts roasted, or you can roast them yourself.`,
    subTitle: `Both Have a Similar Nutrient Content`,
    titleDes: `Roasting nuts changes their structure and chemical composition.

    Specifically, it changes their color and decreases their moisture content, giving rise to their crunchy texture
    
    Raw and dry-roasted nuts have very similar amounts of fat, carbs and protein. Although, roasted nuts have slightly more fat and calories per gram, but the difference is minimal.
    
    One ounce (28 grams) of raw almonds contains 161 calories and 14 grams of fat, whereas the same amount of dry-roasted almonds contains 167 calories and 15 grams of fat
    
    Similarly, 1 ounce (28 grams) of raw pecans contains 193 calories and 20 grams of fat, but the same amount of dry-roasted pecans contains 199 calories and 21 grams of fat
    
    During roasting, nuts lose some moisture. Therefore, a roasted nut weighs less than a raw nut. That explains why the fat content per ounce is slightly higher in roasted nuts
    
    Some studies have shown that roasting nuts does not change the overall fat content. However, the polyunsaturated fats in roasted nuts become more susceptible to oxidation, as the structure of the nut changes
    
    Meanwhile, the protein and carb contents of raw and roasted nuts are very similar. Nevertheless, roasted nuts can be slightly higher or lower in these macronutrients, depending on the type of nut
    
    Contrary to what you might expect, oil-roasted nuts are only slightly higher in fat and calories than dry-roasted nuts. That’s because nuts are naturally high in fat and cannot absorb much more of it from added fat
    
     `,
  },
  {
    id: "6",
    title: "Raw vs Roasted Nuts: Which Is Healthier?",
    date: "01 OCT 2020",
    url: `https://www.nutsarabia.com/images/uploaded/raw%20or%20roasted%20nuts%20blog%20banner_1000.png`,
    description: `Nuts are generally roasted to improve their taste, aroma and crunchy texture

      Roasting is defined as cooking using dry heat, which cooks the food evenly on all sides. Most nuts are roasted without their shell, except for pistachios, which are often roasted in-shell.
      
      Meanwhile, raw nuts have not been roasted.
      
      Roasting methods are sometimes used to separate the shells of nuts from their kernels. This is a common method of shelling cashews and the reason why they’re almost never sold raw
      
      There are two main kinds of roasting:
      
      Dry roasting: Roasting without any oil. Nuts can be dry roasted in the oven or on a frying pan.
      Oil roasting: Roasting using oil. Nuts can also be oil roasted in the oven or on a frying pan.
      In addition to these two methods, nuts can be roasted in the microwave.
      
      You can buy nuts roasted, or you can roast them yourself.`,
    subTitle: `Both Have a Similar Nutrient Content`,
    titleDes: `Roasting nuts changes their structure and chemical composition.

    Specifically, it changes their color and decreases their moisture content, giving rise to their crunchy texture
    
    Raw and dry-roasted nuts have very similar amounts of fat, carbs and protein. Although, roasted nuts have slightly more fat and calories per gram, but the difference is minimal.
    
    One ounce (28 grams) of raw almonds contains 161 calories and 14 grams of fat, whereas the same amount of dry-roasted almonds contains 167 calories and 15 grams of fat
    
    Similarly, 1 ounce (28 grams) of raw pecans contains 193 calories and 20 grams of fat, but the same amount of dry-roasted pecans contains 199 calories and 21 grams of fat
    
    During roasting, nuts lose some moisture. Therefore, a roasted nut weighs less than a raw nut. That explains why the fat content per ounce is slightly higher in roasted nuts
    
    Some studies have shown that roasting nuts does not change the overall fat content. However, the polyunsaturated fats in roasted nuts become more susceptible to oxidation, as the structure of the nut changes
    
    Meanwhile, the protein and carb contents of raw and roasted nuts are very similar. Nevertheless, roasted nuts can be slightly higher or lower in these macronutrients, depending on the type of nut
    
    Contrary to what you might expect, oil-roasted nuts are only slightly higher in fat and calories than dry-roasted nuts. That’s because nuts are naturally high in fat and cannot absorb much more of it from added fat
    
     `,
  },
  {
    id: "7",
    title: "Raw vs Roasted Nuts: Which Is Healthier?",
    date: "01 OCT 2020",
    url: `https://www.nutsarabia.com/images/uploaded/raw%20or%20roasted%20nuts%20blog%20banner_1000.png`,
    description: `Nuts are generally roasted to improve their taste, aroma and crunchy texture

      Roasting is defined as cooking using dry heat, which cooks the food evenly on all sides. Most nuts are roasted without their shell, except for pistachios, which are often roasted in-shell.
      
      Meanwhile, raw nuts have not been roasted.
      
      Roasting methods are sometimes used to separate the shells of nuts from their kernels. This is a common method of shelling cashews and the reason why they’re almost never sold raw
      
      There are two main kinds of roasting:
      
      Dry roasting: Roasting without any oil. Nuts can be dry roasted in the oven or on a frying pan.
      Oil roasting: Roasting using oil. Nuts can also be oil roasted in the oven or on a frying pan.
      In addition to these two methods, nuts can be roasted in the microwave.
      
      You can buy nuts roasted, or you can roast them yourself.`,
    subTitle: `Both Have a Similar Nutrient Content`,
    titleDes: `Roasting nuts changes their structure and chemical composition.

    Specifically, it changes their color and decreases their moisture content, giving rise to their crunchy texture
    
    Raw and dry-roasted nuts have very similar amounts of fat, carbs and protein. Although, roasted nuts have slightly more fat and calories per gram, but the difference is minimal.
    
    One ounce (28 grams) of raw almonds contains 161 calories and 14 grams of fat, whereas the same amount of dry-roasted almonds contains 167 calories and 15 grams of fat
    
    Similarly, 1 ounce (28 grams) of raw pecans contains 193 calories and 20 grams of fat, but the same amount of dry-roasted pecans contains 199 calories and 21 grams of fat
    
    During roasting, nuts lose some moisture. Therefore, a roasted nut weighs less than a raw nut. That explains why the fat content per ounce is slightly higher in roasted nuts
    
    Some studies have shown that roasting nuts does not change the overall fat content. However, the polyunsaturated fats in roasted nuts become more susceptible to oxidation, as the structure of the nut changes
    
    Meanwhile, the protein and carb contents of raw and roasted nuts are very similar. Nevertheless, roasted nuts can be slightly higher or lower in these macronutrients, depending on the type of nut
    
    Contrary to what you might expect, oil-roasted nuts are only slightly higher in fat and calories than dry-roasted nuts. That’s because nuts are naturally high in fat and cannot absorb much more of it from added fat
    
     `,
  },
]

const BlogInner = ({ filterBlog }: any) => {
  const router: any = useRouter()
  console.log("blogrouter", filterBlog)

  return (
    <>
      <PageHeader title="Blog" />
      <div className="bg-white px-20">
        {filterBlog.map((item: any) => {
          return (
            <>
              <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
                <div className="mb-8 lg:mb-12 last:mb-0">
                  <Link href="/blog" passHref>
                    <a className="flex items-center font-serif text-xs text-gray-400  capitalize cursor-pointer">
                      <span className="text-xs text-gray-400 ">
                        <IoChevronBackSharp />
                      </span>
                      {`BACK TO ALL`}
                    </a>
                  </Link>
                  <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-4 lg:mb-4">
                    {item.title}
                  </h2>
                  <h2 className="text-sm xl:text-sm xl:leading-7 font-medium font-serif mb-2 lg:mb-2">
                    {item.date}
                  </h2>
                  <Image
                    width={1920}
                    height={570}
                    src="/about-banner.jpg"
                    alt="logo"
                    className="block rounded-lg"
                  />
                  <div className="mb-4 lg:mb-4 last:mb-0 text-justify">
                    <p>{item.description}</p>
                  </div>
                  <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-4 lg:mb-4">
                    {item.subTitle}
                  </h2>
                  <div className="mb-4 lg:mb-4 last:mb-0 text-justify">
                    <p>{item.titleDes}</p>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
BlogInner.getLayout = (page: ReactElement) => {
  return (
    <Layout title="Privacy Policy" description="This is privacy policy page">
      {page}
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = newsData
  console.log("blogData", newsData)
  const paths = data.map((item: any) => {
    return {
      params: { id: item.id.toString() },
    }
  })
  console.log("pathss", paths)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const blogId = context?.params?.id as string
  console.log("idi", blogId)
  const res = newsData
  console.log("response", res)
  const filterBlog = res?.filter((item: any) => {
    return item.id === blogId
  })
  console.log("filterBlogg", filterBlog)
  if (!filterBlog) {
    return {
      props: {
        notFound: true,
      },
    }
  }

  return {
    props: {
      filterBlog,
      notFound: false,
    },
  }
}
export default BlogInner
