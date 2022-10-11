import React from "react"
import { ReactElement } from "react"
import Image from "next/image"
import Layout from "@modules/layout/templates"
import { NextPageWithLayout } from "types/global"
import PageHeader from "@modules/products/components/header/PageHeader"

const AboutUs: NextPageWithLayout = () => {
  const img = "/team/team-1.jpg"

  const ourFounder = [
    {
      id: 1,
      image: "/team/team-1.jpg",
      Name: "Niamh Shea",
      position: "Co-founder & Executive",
    },
    {
      id: 2,
      image: "/team/team-2.jpg",
      Name: "Orla Dwyer",
      position: "Chief Executive",
    },
    {
      id: 3,
      image: "/team/team-3.jpg",
      Name: "Orla Dwyer",
      position: "Chief Executive",
    },
    {
      id: 4,
      image: "/team/team-4.jpg",
      Name: "Dara Frazier",
      position: "Chief Strategy Officer",
    },
    {
      id: 5,
      image: "/team/team-5.jpg",
      Name: "Glenda Arvidson",
      position: " HR Officer",
    },
    {
      id: 6,
      image: "/team/team-6.jpg",
      Name: " Melvin Davis",
      position: "Lead Developer",
    },
  ]

  return (
    <>
      <PageHeader title="About Us" />
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          
          <div className="mt-10 lg:mt-16 text-base opacity-90 leading-7">
            <p>
              {`Al Alam Al Lazeez Trading L.L.C with a branding of NutsArabia.com 
              offers all varieties of nuts keeping the distinct tastes, flavors, 
              textures, and aromas of each type of nut. We strongly believe that when you buy our nuts, 
              they should always be fresh and of superior quality so that you can enjoy 
              them to the fullest.`}{" "}
            </p>

            <p>
              {" "}
              {`We keep variety of nut well-stocked with every kind of nut. 
              You can buy bulk nuts at affordable prices. Our nuts are a good source of nutrients, 
              and depending on your preference, you can toss them over salads, use them in recipes, or just snack on them straight out of the bag.`}
            </p>
          </div>
          <div className="">
              <h3 className="text-xl lg:text-3xl mb-1 mt-7 font-serif font-bold">
                {`HACCP Certified`}
              </h3>
            </div>
          <div className="mt-10 lg:mt-12 flex flex-col sm:grid gap-4 ">
            <Image
              width={1920}
              height={1200}
              src="/haccp.png"
              alt="logo"
              className="block rounded-lg"
            />
          </div>
          <div className="mt-10 lg:mt-16 text-base opacity-90 leading-7">
            <p>
              {`HACCP certification is an international standard defining the requirements 
              for effective control of food safety. It is built around seven principles:
               Conduct Hazard Analysis of biological, chemical, or physical food hazards.`}{" "}
            </p>

            <p>
              {" "}
              {`The HACCP certification enables you to verify the food safety system currently
               in place at Nuts Arabia. We at Nuts Arabia strive hard to enhance our reputation 
               by maintaining customer satisfaction and avoiding food safety issues.`}
            </p>
          </div>
        </div>

        
      </div>
    </>
  )
}
AboutUs.getLayout = (page: ReactElement) => {
  return (
    <Layout title="About Us" description="This is about us page">
      {page}
    </Layout>
  )
}

export default AboutUs
