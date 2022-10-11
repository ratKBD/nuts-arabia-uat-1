import { ReactElement } from "react"
import React from "react"
import Layout from "@modules/layout/templates"
import PageHeader from "@modules/products/components/header/PageHeader"
import { NextPageWithLayout } from "types/global"
import Link from "next/link"

const News: NextPageWithLayout = () => {
  const newsItem = [
    {
      id: 1,
      date: "20 AUG 2022",
      title: "Raw vs Roasted Nuts: Which Is Healthier?",
      description:
        "Nuts are extremely healthy and make a perfect snack when you’re on the go. They are packed with healthy fats, fiber and protein, and they’re a great source of many important nutrients and antioxidants. What’s more, studies have shown that eating nuts has several health benefits, including lowering cholesterol, blood pressure and blood sugar (1Trusted Source, 2Trusted Source, 3Trusted Source, 4Trusted Source). However, some people wonder whether roasting nuts affects their nutritional content. This article compares raw and roasted nuts and takes a detailed look at which variety is healthier.",
    },
    {
      id: 2,
      date: "18 OCT 2021",
      title: "Eating Walnuts May Help Breast Cancer Patients",
      description:
        "New research shows walnuts could help women who are dealing with breast cancer. The study, conducted at Marshall University, shows eating two ounces of walnuts a day for about two weeks slowed breast cancer growth or reduced the risk of developing the disease.",
    },
    {
      id: 3,
      date: "18 OCT 2021",
      title: "Peanuts can reduce your risk of breast cancer",
      description:
        "Breast cancer has turned into an epidemic in recent years, as more and more women are being diagnosed with it. In such a scenario, taking care of your health and diet becomes crucial. A study published in the journal Gynecologic and Obstetric Investigation found that high consumption of peanuts along with other nuts reduced the risk of breast cancer by 2-3 times. Therefore, with regular intake of peanuts, you can stay safe and healthy!",
    },
    {
      id: 4,
      date: "01 MAR 2021",
      title: "The 15 Best Foods for Heart Health That You Can Eat",
      description:
        "It's hard to go wrong with produce when it comes to protecting against heart disease.",
    },
    {
      id: 5,
      date: "01 MAR 2021",
      title:
        "Boosting your mental health may be just a mouthful away - Food and mood are closely linked",
      description:
        "The statistics on mental health issues among Australians are astonishing. According to Beyond Blue, one-quarter of the population will experience an anxiety condition at some point in their lives.",
    },
    {
      id: 6,
      date: "01 MAR 2021",
      title: "14 healthy gift alternatives to candy and chocolate",
      description:
        "Candy canes and Christmas. Chocolates and Valentine's Day. Sugar-coated marshmallows and Easter. And then there's Halloween: sugar everywhere. Holidays and candy just seem to go hand-in-hand.",
    },
    {
      id: 7,
      date: "01 MAR 2021",
      title: "9 Delicious Snacks That Are Great for Your Heart",
      description:
        "When it comes to eating heart-healthy foods, it's important to focus on consuming a variety of whole plant foods and sources of healthy fat. Why's that, you say?",
    },
  ]

  return (
    <>
      <PageHeader title="News" />
      <div className="bg-white py-10 pb-10 p-20">
        {newsItem.map((data: any) => (
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
                    pathname: "/news/[id]",
                    query: { id: data.id.toString() },
                  }}
                  passHref
                >
                  <button
                    className="border-t border-gray-100 w-28 h-10 text-white"
                    style={{ backgroundColor: "#592316" }}
                  >
                    {`Read More`}
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
News.getLayout = (page: ReactElement) => {
  return (
    <Layout title="Privacy Policy" description="This is privacy policy page">
      {page}
    </Layout>
  )
}

export default News
