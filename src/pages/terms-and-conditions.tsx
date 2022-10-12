import { ReactElement } from "react";
import React from "react";
import Link from "next/link";
import Layout from "@modules/layout/templates";
import PageHeader from "@modules/products/components/header/PageHeader";
import { NextPageWithLayout } from "types/global";

const TermsAndConditions: NextPageWithLayout = () => {
  return (
    <>
      <PageHeader title="Terms & Conditions" />
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-3 sm:px-10">
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {` Terms of Use`}
            </h2>
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {` Last updated: 23 November 2020`}
            </h2>
            <div className="font-sans leading-7">
              <p>
                {`Welcome to www.nutsarabia.com (“Site”). The owner and operator of the site NutsArabia eCommerce is owned By Al Alam Al Lazeez Trading L.L.C, a limited liability company registered in the United Arab Emirates (“UAE”) under license number 912216, with its office located at Abdulla Lootah Bldg in Al Karama, Dubai in the UAE (“we”, “our” or “us”).`}
              </p>
              <p>
                {`These Terms of Use and all policies and additional terms (if applicable) posted on the Site set out the terms on which we offer you access to and use of our Site, products, services and applications including our mobile application (collectively, the “Services”). You can find all of our policies and additional terms here: www.nutsarabia.com (“Legal Documents”). These Legal Documents are incorporated by reference into these Terms of Use.`}
              </p>
              <p>{`By accessing, registering and/or continuing to use or access our Services, you are agreeing to be bound by these Terms of Use and the Legal Documents with immediate effect. These Terms of Use and the Legal Documents are subject to change by us at any time. Your continued use of the Site following any such change constitutes your agreement to these Terms of Use and Legal Documents as so modified.`}</p>
              <p>{`References in these Terms of Use to “you” (or similar) are references to you as an individual or legal entity as the case may be.`}</p>
            </div>
          </div>
          <div className="mb-6 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {` About our site`}
            </h2>
            <div className="font-sans leading-7">
              <p>
                {`The Site is an e-commerce platform that allows users to buy or sell food products online.`}
              </p>
              <p>{`We reserve the right to introduce new Services and update or withdraw any of the Services, in our sole discretion, and we will not be liable to you for exercising this discretion.`}</p>
            </div>
            <div className="font-sans leading-7 mt-5">
              <ol className=" pl-5 mt-5 mb-5">
                <li>{`1. Eligibility and registration Requirements`}</li>
                <ol className=" pl-7 ">
                  <li>
                    {` 1. You are eligible to register as a buyer and benefit from the Services if you meet the following eligibility criteria:`}
                  </li>
                  <ol className=" pl-10 ">
                    <li>
                      {`1.You are above the legal age for purchasing products in your country of residence; and`}
                    </li>
                    <li>
                      {`2.You are able to provide an address in the UAE for delivery of products.`}
                    </li>
                  </ol>
                  <ol className="pl-5">
                    <li> {`1.For sellers:`}</li>
                    <ol className="pl-8">
                      <li>{`1.You are a legal entity duly registered in your jurisdiction.`}</li>
                      <li> {`2.you have an active trade license.`}</li>
                      <li>
                        {" "}
                        {`3.You provide proof of authorization for the individual who will be registering and using the Site.`}
                      </li>
                      <li>
                        {" "}
                        {`4.You provide identification for the authorized person.`}
                      </li>
                      <li>
                        {" "}
                        {`5.You can provide supporting bank details and`}
                      </li>
                      <li>
                        {" "}
                        {`6.You acknowledge and agree that for certain product categories, additional requirements might be applicable.`}
                      </li>
                    </ol>
                  </ol>

                  <li>
                    {`2. In order to register to the Site, you will need to provide us with certain information. Your registration to the Site may not be accepted if you do not provide us with the required information. We reserve the right to decline any registration without further explanation. We reserve the right to undertake such checks as are necessary to verify your identity.`}
                  </li>
                  <li>
                    {` 3. Once you have successfully completed registration, your registration shall continue for an indefinite period, subject to suspension or termination in accordance with clause 6 of these Terms of Use.`}
                  </li>
                </ol>

                <ol className=" pl-5 mt-5 mb-5">
                  <li>{`  1. Your obligations`}</li>
                  <ol className=" pl-7 ">
                    <li>
                      {` 1.When using or accessing the Services, you agree that you:`}
                    </li>
                    <ol className=" pl-10 ">
                      <li>
                        {`1.Are responsible for maintaining the confidentiality of, and restricting access to and use of your account and password, and accept responsibility for all activities that occur under your account and password.`}
                      </li>
                      <li>
                        {`2.Agree to immediately notify us of any unauthorized use of your password or account or any other breach of security.`}
                      </li>
                      <li>
                        {" "}
                        {`3.Will provide true, accurate, current and complete information about yourself and your use of the Services as required by us.`}
                      </li>
                      <li>
                        {" "}
                        {`4.Will not disclose to any third party (except as required or requested by us) a user’s information provided to you and`}
                      </li>
                      <li>
                        {" "}
                        {`5.Will cooperate with our requests for additional information with respect to your eligibility and usage of our Services.
                          `}
                      </li>
                    </ol>
                    <li>
                      {" "}
                      {`2.When using or accessing the Services, you agree that you will not:`}
                    </li>
                    <ol className=" pl-7">
                      <li>
                        {" "}
                        {`1.Post, list or upload content or items in inappropriate or prohibited categories or areas on our Site, including:`}
                      </li>
                      <ol className=" pl-10">
                        <li>
                          {" "}
                          {`1.Content or items that may be considered culturally or religiously offensive in any way.`}
                        </li>
                        <li>
                          {`2. Content or items which may not be considered to be in compliance with general local law, Islamic law, rules, morals, values, ethics and traditions.`}
                        </li>
                        <li>
                          {` 3. Content or items that may threaten national security;`}
                        </li>
                        <li>
                          {` 4. Content or items which may constitute or be considered to promote gambling;`}
                        </li>
                        <li>
                          {` 5. Securities, including shares, bonds, debentures, or any other financial instruments or assets of any description;`}
                        </li>
                        <li>
                          {` 6. Living or dead creatures and/or the whole or any part of any animal which has been kept or preserved by any means whether artificial or natural`}
                        </li>
                        <li>{` 7. Weapons of any description;`}</li>
                        <li>
                          {` 8. Liquor, tobacco products, drugs, psychotropic substances, narcotics, intoxicants of any description and medicines;`}
                        </li>
                        <li>
                          {` 9. Items that to your knowledge are defective, fake, damaged, false or misleading or that may through normal use harm another Site user’s interest or health`}
                        </li>
                        <li>{` 10. Non-transferable vouchers; and`}</li>
                        <li>{` 11. Chemicals.`}</li>
                      </ol>
                      <li>{`1.Post items you do not have a right to link to or include;`}</li>
                      <li>{`2.Post counterfeit or stolen items;`}</li>
                      <li>{`3.Breach or circumvent any laws, third party rights or our systems, policies or determinations of your account status;`}</li>
                      <li>{`4.Use our Services if you no longer fulfil the eligibility criteria or are not able to form legally binding contracts, or are temporarily or indefinitely suspended from using our Services;`}</li>
                      <li>{`5.Fail to pay for items purchased by you, unless you have a valid reason as set out in any of our policies;`}</li>
                      <li>{`6.Fail to deliver items sold by you (if applicable), unless you have a valid reason as set out in any of our policies;`}</li>
                      <li>{`7.Use contact information provided to you during the course of a transaction on the Site to solicit additional sales offline or on another website;`}</li>
                      <li>{`8.Manipulate the price of any item;`}</li>
                      <li>{`9.Interfere with any other user’s listings;`}</li>
                      <li>{`10.Take any action that may undermine the Site’s feedback and ratings systems;`}</li>
                      <li>{`11.Post false, inaccurate, misleading, deceptive, defamatory or similar content;`}</li>
                      <li>{`12.Transfer your account to another party without our prior written consent;`}</li>
                      <li>{`13.Distribute or post spam, unsolicited or bulk electronic communications or similar;`}</li>
                      <li>{`14.Distribute viruses or any other technologies that may harm our Services or the interests or property of other users;`}</li>
                      <li>{`15.Infringe:`}</li>
                      <ol className="pl-16">
                        <li>{`1.The copyright, trademark, patent, publicity, moral, database, and/or other intellectual property rights (collectively, "Intellectual Property Rights" ) that belong to or are licensed to us; or`}</li>
                        <li>{`2.Any Intellectual Property Rights that belong to third parties;`}</li>
                      </ol>
                      <li>{`16.Harvest or otherwise collect information about users without their consent; or`}</li>
                      <li>{`17.Circumvent any technical measures we use to provide the Services.`}</li>
                    </ol>
                  </ol>
                </ol>

                <ol className=" pl-5 mt-5 mb-6">
                  <li>{`1.Intellectual property rights`}</li>
                  <ol className=" pl-7 ">
                    <li>{`1.Except for the rights expressly granted under these Terms of Use:`}</li>
                    <ol className=" pl-10 ">
                      <li>{`1.All content included on the Site, including but not limited to text, graphics, logos, images, audio clips, digital downloads and software is our property or the property of our licensors. We (or our licensors, as the case may be) retain all right, title and interest in and to the Site and the Services, including, without limitation, all Intellectual Property Rights therein; and`}</li>
                      <li>{`2.All rights, title and interest in and to any information, materials or other content that you provide in connection with your use of the Services, including all Intellectual Property Rights therein, will become our property.`}</li>
                    </ol>
                    <li>{`2.You agree that you have no right to use any of our trademarks without our prior written consent.`}</li>
                    <li>{`3.All rights not expressly granted to you in these Terms of Use are reserved and retained by us or our licensors.`}</li>
                  </ol>
                </ol>

                <ol className=" pl-5 mt-5 mb-6">
                  <li>{`1.Warranties, representations & undertakings`}</li>
                  <ol className=" pl-7 ">
                    <li>{`1.You warrant, represent and undertake that:`}</li>
                    <ol className=" pl-10 ">
                      <li>{`1.You shall fully comply and will at all times continue to fully comply with all applicable laws, statutes and regulations, including, without limitation, all privacy laws and content regulation;`}</li>
                      <li>{`2.You have full power and authority to enter into these Terms of Use and the execution and performance of your obligations under these Terms of Use does not conflict with:`}</li>
                      <ol className=" pl-16 ">
                        <li>{`1.Any laws, rules, regulations or governmental guidelines to which you are subject to; or`}</li>
                        <li>{`2.Any other agreements to which you are a party to or to which you are otherwise bound by;`}</li>
                      </ol>
                      <li className="mb-2.5">{`3.If you create or use an account on behalf of a business entity, you represent 
                      that you are authorized to act on behalf of such business and bind the business to these Terms of Use. 
                      Such account is deemed to be owned and controlled by the business entity;`}</li>
                      <li>{`1.You own or have the authority to grant the rights and licenses granted to us by you under these Terms of Use; and`}</li>
                      <li>{`2.Any content you submit as part of your use of the Services and any products that you list do not violate the rights of any third 
                       party anywhere in the world including, without limitation,
                          any Intellectual Property Rights (whether registered or not).`}</li>
                    </ol>
                    <li>{`1.Subject to clause ‎5.1, the Services are provided to you on an “as is” basis without representations, warranties or conditions of any kind. We disclaim all warranties, conditions and representations of any kind, whether express, implied or collateral, including, but not limited to, all conditions, representations or warranties of merchantability, of fitness for a particular or general purpose, of non-infringement, of compatibility or that the Services are secure or error free or will operate without interruption or will be provided in a timely or proper manner or at all.`}</li>
                    <li>{`2.Furthermore, whilst we attempt to be as accurate as possible, we do not warrant that product descriptions or other content of any Service is accurate, complete, reliable, current, or error-free. Additionally, as a buyer, you agree that we are not responsible for examining or warranting the listings or content provided by us or third parties through the Services, and that you will not attempt to hold us liable for any inaccuracies or defects in any of the listings. As a seller, it is your responsibility to review the content of your listings for accuracy and you will not attempt to hold our catalogue/content providers or us responsible for inaccuracies.`}</li>
                  </ol>
                </ol>

                <ol className="pl-5 mt-5 mb-6">
                  <li>{`1.Liability & indemnities`}</li>
                  <ol className=" pl-7 ">
                    <li>{`1.Nothing in these Terms of Use shall limit or exclude a party’s liability:`}</li>
                    <ol className="pl-10">
                      <li>{`1.For fraud, including fraudulent misrepresentation, perpetrated by that party;`}</li>
                      <li>{`2.For death or personal injury caused by the negligence of that party; or`}</li>
                      <li>{`3.For any other liability that cannot be limited or excluded under applicable law.`}</li>
                    </ol>
                    <li>{`2.Subject to clause ‎5.1, in no event will we, our parent company, subsidiaries and affiliates, and our, and their directors, officers, agents, employees, suppliers, subcontractors or licensors be liable, whether based on an action or claim in contract, tort, negligence, breach of statutory duty or otherwise arising out of or in relation to these Terms of Use for loss of profits, loss of data or information, business interruption or other pecuniary loss or for any special, indirect, incidental or consequential damages, even if we, our affiliates, directors, officers, agents, employees, licensors, subcontractors or suppliers have been advised of the possibility of such damages.`}</li>
                    <li>{`3.In addition, to the extent permitted by applicable law, we (including our parent company, subsidiaries and affiliates and our, and their directors, officers, agents, employees, suppliers, subcontractors or licensors) are not liable, and you agree not to hold us responsible, for any damages or losses resulting directly or indirectly from:`}</li>
                    <ol className="pl-10">
                      <li>{`1.The content or other information you provide when using the Services;`}</li>
                      <li>{`2.Your use of or your inability to use our Services;`}</li>
                      <li>{`3.Pricing, shipping, format or other guidance provided by us;`}</li>
                      <li>{`4.Delays or disruptions in our Services;`}</li>
                      <li>{`5.Viruses or other malicious software obtained by accessing or linking to our Services;`}</li>
                      <li>{`6.Bugs, errors or inaccuracies of any kind in our Services;`}</li>
                      <li>{`7.Damage to your hardware device from the use of products sold on the Site or our Services;`}</li>
                      <li>{`8.The content, actions or inactions of third parties using our Services;`}</li>
                      <li>{`9.A suspension or other action taken by us with respect to your use of the Services;`}</li>
                      <li>{`10.The duration or manner in which your listings appear in search results; or`}</li>
                      <li>{`11.Your need to modify practices, content or behavior or your loss of or inability to do business as a result of changes to these Terms of Use.`}</li>
                    </ol>
                    <li>{`4.Subject to clause ‎5.1, if clauses ‎5.2 or ‎5.3 are held to be unenforceable or inapplicable for any reason, then the total liability applicable to us, our parent company, subsidiaries and affiliates and our, and their directors, officers, agents, employee, suppliers, subcontractors or licensors, to you, whether based on an action or claim in contract, negligence or breach of statutory duty or otherwise, arising out of or in relation to these Terms of Use shall be limited to the lower of:`}</li>
                    <ol className="pl-10">
                      <li>{`1.The price the item sold for on our Site and its original shipping costs; and`}</li>
                      <li>{`2.The amount of fees in dispute not to exceed the total fees that you paid to us in the twelve (12) months prior to the action giving rise to the liability; or`}</li>
                      <li>{`3.AED 300.`}</li>
                    </ol>
                    <li>{`5.You agree to indemnify and hold us, our parent company, subsidiaries and affiliates and our, and their directors, officers, agents, employee, suppliers, subcontractors or licensors harmless from and against any losses, damages and expenses (including legal fees and attorney’s fees) (“Claims”) arising out of or relating to:
                `}</li>
                    <ol className="pl-10">
                      <li>{`1.Any claims or demands made by any third party due to or arising out of your use of the Services;`}</li>
                      <li>{`2.Your violation of any of the provisions of these Terms of Use, including, without limitation, any of the warranties, representations and undertakings;`}</li>
                      <li>{`3.Your violation of any applicable laws, including, without limitation, data protection or anti-spam laws; or`}</li>
                      <li>{`4.The manner in which you use our Services, including, without limitation, that the content you post, the items you list or your trademarks infringe the Intellectual Property Rights of any third party or that the content of your listings is slanderous, defamatory, obscene or violates any other rights (including privacy rights) of any third party (including other Site users).
                 `}</li>
                    </ol>
                  </ol>
                </ol>
                <ol className="pl-5 mt-5 mb-6">
                  <li>{`1.Suspension, Termination & Cancellation`}</li>
                  <ol className=" pl-7 mt-2.5 ">
                    <li>{`1.Without prejudice to any of our rights and remedies and without any liability to you, we may limit, suspend or withdraw a user’s access to the Services, cancel any product(s) order and/or remove hosted content submitted by you at our sole discretion. For the avoidance of doubt, any amounts paid and received by us in relation to a cancelled product(s) order will be refunded.`}</li>
                  </ol>
                </ol>

                <ol className="pl-5 mt-5 mb-6">
                  <li>{`1.REPORTING VIOLATIONS OF THESE TERMS OF USE`}</li>
                  <ol className=" pl-7 mt-2.5 ">
                    <li>{`1.We are committed to ensuring that listed items and content on our Site comply with these Terms of Use. If you believe that a listed item or content breaches these Terms of Use, please notify us on the details in clause ‎‎8.12 and we will investigate.`}</li>
                  </ol>
                </ol>

                <ol className="pl-5 mt-5 mb-6">
                  <li>{`1.NUTSARABIA AFFILIATES & ADDITIONAL FUNCTIONS`}</li>
                  <ol className=" pl-7 mt-2.5 ">
                    <li>{`1.NutsArabia eCommerce is owned By Al Alam Al Lazeez Trading L.L.C LLC and/or its affiliates ("NutsArabia’s Affiliates") provide website features and other products and services to you when you use or sign-up as a buyer and/or seller on the Site. “Affiliate” means, with respect to a particular person, any entity that directly or indirectly controls, is controlled by, or is under common control with such person.`}</li>
                    <li>{`2.To enhance your experience across the Site and with NutsArabia’s Affiliates, you hereby agree that we may set-up additional services, functions and/or accounts on your behalf, by using the information you provide to us on the Site.`}</li>
                  </ol>
                </ol>

                <ol className="pl-5 mt-5 mb-6">
                  <li>{`1.General`}</li>
                  <ol className=" pl-7 mt-2.5 ">
                    <li>{`1.Governing Law. These Terms of Use and any non-contractual rights or obligations arising out of or in connection with it shall be governed by and construed in accordance with the laws of the United Arab Emirates, as applied in the Emirate of Dubai.`}</li>
                    <li>{`2.Dispute Resolution. If you have an issue with our Services, please contact us. We will endeavor to resolve your issue as soon as possible. Any disputes or Claims arising out of or in connection with these Terms of Use, including any non-contractual rights or obligations arising out of or in connection with these Terms of Use shall be referred to and finally resolved by arbitration under the Arbitration Rules of the DIFC – LCIA Arbitration Centre, which Rules are deemed to be incorporated by reference into this clause. The number of arbitrators shall be one. The seat, or legal place, of arbitration shall be Dubai International Financial Centre. The language to be used in the arbitration shall be English.`}</li>
                    <li>{`3.Third Party Rights. A person who is not a party to these Terms of Use has no right to enforce any of its terms.`}</li>
                    <li>{`4.Relationship of the Parties. Nothing contained in these Terms of Use will be deemed or construed by the parties or any third party to create the relationship of partnership, joint venture or agency between the parties, it being understood that the parties will at all times remain independent parties contracting for Services.`}</li>
                    <li>{`5.Further Assurances. The parties will do and execute or arrange for the doing and executing of each necessary act, document and thing reasonably within its power to implement and give effect to these Terms of Use to its full extent, including, without limitation, assisting each other in complying with applicable law.`}</li>
                    <li>{`6.Assignment. These Terms of Use will be binding upon and ensure to the benefit of the parties and their respective successors and permitted assigns. You agree that you will not assign or transfer these Terms of Use or any of your rights or obligations under these Terms of Use, whether directly or indirectly, without first obtaining our prior written consent, such consent not to be unreasonably withheld.`}</li>
                    <li>{`7.Entire Agreement. These Terms of Use and the documents referred to or incorporated herein by reference contain the entire agreement between the parties with respect to the subject matter and supersede all prior agreements, negotiations and representations, written or oral, relating to its subject matter. Except as provided in these Terms of Use and the documents referred to or incorporated into these Terms of Use by reference, there are no conditions, representations, warranties, undertakings or agreements between the parties whether direct, indirect, collateral, express or implied.`}</li>
                    <li>{`8.Amendment. These Terms of Use cannot be modified, varied, amended or supplemented in any way by you. We reserve the right to modify, vary, amend or supplement these Terms of Use at any time and from time to time. We will post the current version of these Terms of Use on the Site and each such change will be effective upon posting on the Site or upon the date designated by us as the “effective date” (if any). Your continued use of the Services following any such change constitutes your agreement to be bound by and its acceptance of these Terms of Use as so modified.`}</li>
                    <li>{`9.Severability. If any provision of these Terms of Use is determined by any court of competent jurisdiction to be invalid, illegal or unenforceable, that provision will be severed from these Terms of Use and the remaining provisions will continue in full force and effect so long as the economic or legal substance of the transactions contemplated hereby is not affected in any manner materially adverse to either of the parties.`}</li>
                    <li>{`10.Force Majeure. Neither party will be liable for any loss or damage or for any delay or failure in performance due to acts beyond the control of such party whether or not such acts could reasonably be anticipated (including acts of God, legislative, judicial or regulatory acts of any provincial or the federal government, court or regulatory authority, acts of any of our subcontractors or any third party providers of goods or Services to us, labour disruptions, blackouts, embargoes).`}</li>
                    <li>{`11.No Waiver. Any waiver by us of any of the provisions of these Terms of Use will not constitute a waiver of any other provision (whether similar or not), nor will any such waiver constitute a continuing waiver of that particular provision, unless expressly provided by us in writing.`}</li>
                    <li>{`12.Communications. You may contact us through email, social media or live chat on the Site, or by calling our call centre on +97143990014 (UAE)`}</li>
                  </ol>
                </ol>
              </ol>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {`Survival`}
            </h2>
            <div className="font-sans leading-7">
              <p>
                {`
          All provisions that either expressly or by their nature survive, will survive suspension or termination of your membership of the Site. `}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TermsAndConditions.getLayout = (page: ReactElement) => {
  return (
    <Layout title="Terms & Conditions" description="this is Terms & Conditions">
      {page}
    </Layout>
  );
};

export default TermsAndConditions;
