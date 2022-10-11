import { ReactElement } from "react"
import React from "react"
import Link from "next/link"
import Layout from "@modules/layout/templates"
import PageHeader from "@modules/products/components/header/PageHeader"
import { NextPageWithLayout } from "types/global"

const PrivacyPolicy: NextPageWithLayout = () => {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      {/* <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
             {` Last updated: February 15, 2022`}
            </h2>
            <div className="font-sans leading-7">
              <p>
                {`At KachaBazar, accessible from kachabazar dot com, one of our
                main priorities is the privacy of our visitors. This Privacy
                Policy document contains types of information that is collected
                and recorded by KachaBazar and how we use it. If you have
                additional questions or require more information about our
                Privacy Policy, do not hesitate to contact us.we may receive
                additional information about you such as your name, email
                address, phone number, the contents of the message and/or
                attachments you may send us, and any other information you may
                choose to provide. When you register for an Account, we may ask
                for your contact information, including items such as name,
                company name, address, email address, and telephone number.`}
              </p>
              <p>
               {` This Privacy Policy applies only to our online activities and is
                valid for visitors to our website with regards to the
                information that they shared and/or collect in KachaBazar.we may
                receive additional information about you such as your name,
                email address, phone number, the contents of the message and/or
                attachments you may send us, we may ask for your contact
                information, including items such as name, company name,
                address, email address, and telephone number. This policy is not
                applicable to any information collected offline or via channels
                other than this website. Our Privacy Policy was created with the
                help of the Free Privacy Policy Generator.`}
              </p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
             {` Consent`}
            </h2>
            <div className="font-sans leading-7">
              <p>
               {` By using our website, you hereby consent to our Privacy Policy
                and agree to its terms.`}
              </p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
             {` Information we collect`}
            </h2>
            <div className="font-sans leading-7">
              <p>
                {`The personal information that you are asked to provide, and the
                reasons why you are asked to provide it, will be made clear to
                you at the point we ask you to provide your personal
                information. If you contact us directly, we may receive
                additional information about you such may choose to provide.
                When you register for an Account, we may ask for your contact
                information, including items such as name, company name,
                address, email address, and telephone number.`}
              </p>
              <p>
                {`Please note that the Company will not ask you to share any
                sensitive data or information via email or telephone. If you
                receive any such request by email or telephone, please do not
                respond/divulge any sensitive data or information and forward
                the information relating to the same to`}
              </p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {`How we use your information`}
            </h2>
            <div className="font-sans leading-7">
              <p>
                {`We use the information we collect in various ways, including to:`}
              </p>

              <ol>
                <li>
                 {` 1. Provide, operate, and maintain our website, to provide you
                  with updates and other information.`}
                </li>
                <li>
                 {` 2. Improve, personalize, and expand our website,and other
                  information relating to the website.`}
                </li>
                <li>
                 {` 3. Understand and analyze how you use our website, to provide
                  you with updates and other information relating to the
                  website.`}
                </li>
                <li>
                 {` 4. Develop new products, services, features, and
                  functionality,and other information relating to the website.`}
                </li>
                <li>
                  {`5. Communicate with you, either directly or through one of our
                  partners, including for customer service, to provide you with
                  updates.`}
                </li>
                <li>
                 {` 6. Send you emails. To provide you with updates and other
                  information relating to the website, and for marketing and
                  promotional purposes`}
                </li>
                <li>
                 {` 7. Find and prevent fraud. To provide you with updates and
                  other information relating to the website, and for marketing
                  and promotional purposes`}
                </li>
              </ol>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {`Log Files`}
            </h2>
            <div className="font-sans leading-7">
              <p>
                {`KachaBazar follows a standard procedure of using log files.
                These files log visitors when they visit websites. All hosting
                companies do this and a part of hosting. The information
                collected by log files include internet protocol (IP) addresses,
                browser type, Internet Service Provider (ISP), date and time
                stamp, referring/exit pages, and possibly the number of clicks.
                These are not linked to any information that is personally
                identifiable. The purpose of the information is for analyzing
                trends, administering the site, tracking users' movement on the
                website, and gathering demographic information.`}
              </p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {`Advertising Partners Privacy Policies`}
            </h2>
            <div className="font-sans leading-7">
              <p>
                {`You may consult this list to find the Privacy Policy for each of
                the advertising partners of KachaBazar. Third-party ad servers
                or ad networks uses technologies like cookies, JavaScript, or
                Web Beacons that are used in their respective advertisements and
                links that appear on KachaBazar, which are sent directly to
                users' browser. They automatically receive your IP address when
                this occurs. These technologies are used to measure the
                effectiveness of their advertising campaigns and/or to
                personalize the advertising content that you see on websites
                that you visit. Note that KachaBazar has no access to or control
                over these cookies that are used by third-party advertisers.`}
              </p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {`Third Party Privacy Policies`}
            </h2>
            <div className="font-sans leading-7">
              <p>
                {`Third-party ad servers or ad networks uses technologies like
                cookies, JavaScript, or Web Beacons that are used in their
                respective advertisements and links that appear on KachaBazar,
                which are sent directly to users' browser. They automatically
                receive your IP address when this occurs. These technologies are
                used to measure the effectiveness of their advertising campaigns
                and/or to personalize the advertising content that you see on
                websites that you visit. Note that KachaBazar has no access to
                or control over these cookies that are used by third-party
                advertisers.`}
              </p>
              <p>
                {`KachaBazar's Privacy Policy does not apply to other advertisers
                or websites. Thus, we are advising you to consult the respective
                Privacy Policies of these third-party ad servers for more
                detailed information. It may include their practices and
                instructions about how to opt-out of certain options. You can
                choose to disable cookies through your individual browser
                options. To know more detailed information about cookie
                management with specific web browsers, it can be found at the
                browsers' respective websites.`}
              </p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {`CCPA Privacy Rights`}
            </h2>
            <div className="font-sans leading-7">
              <p>
                {`Under the CCPA, among other rights, California consumers have
                the right to: Request that a business that collects a consumer's
                personal data disclose the categories and specific pieces of
                personal data that a business has collected about consumers.
                Request that a business delete any personal data about the
                consumer that a business has collected. Request that a business
                that sells a consumer's personal data, not sell the consumer's
                personal data. If you make a request, we have one month to
                respond to you. If you would like to exercise any of these
                rights, please contact us.`}
              </p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {`Children's Information`}
            </h2>
            <div className="font-sans leading-7">
              <p>
                {`Another part of our priority is adding protection for children
                while using the internet. We encourage parents and guardians to
                observe, participate in, and/or monitor and guide their online
                activity.Request that a business delete any personal data about
                the consumer that a business has collected. If you make a
                request, we have one month to respond to you. If you would like
                to exercise any of these rights, please contact us.`}
              </p>
              <p>
                {`KachaBazar does not knowingly collect any Personal Identifiable
                Information from children under the age of 13. If you think that
                your child provided this kind of information on our website, we
                strongly encourage you to contact us immediately and we will do
                our best efforts to promptly remove such information from our
                records.`}
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {` Last updated: 25 November 2020`}
            </h2>
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {` Welcome to NutsArabia`}
            </h2>
            <div className="mb-8 lg:mb-12 last:mb-0">
              <p>
                {`This Privacy Policy sets out the basis on which any personal data, including but not limited to payment details and other information we collect from you or other sources or that you provide to us ("Information") will be handled by us in connection with your access and use of www.NutsArabia.com, and/or the NutsArabia mobile application (collectively, the "Platform"), services and applications (collectively, the "Services"). We understand the importance you place on the Information, and we are committed to protecting and respecting your privacy. Please read the following carefully to understand our practices regarding your Information. By using our Services, you agree to the handling of your Information in accordance with this Privacy Policy.

References in this Privacy Policy to "we", "our" or "us" (or similar) are references to NutsArabia eCommerce Owned By Al Alam Al Lazeez Trading L.L.C. References to "user" or "you" (or similar) are references to you as an individual or legal entity as the case may be.`}
              </p>
              <p>
                {` This Privacy Policy applies only to our online activities and is
                valid for visitors to our website with regards to the
                information that they shared and/or collect in KachaBazar.we may
                receive additional information about you such as your name,
                email address, phone number, the contents of the message and/or
                attachments you may send us, we may ask for your contact
                information, including items such as name, company name,
                address, email address, and telephone number. This policy is not
                applicable to any information collected offline or via channels
                other than this website. Our Privacy Policy was created with the
                help of the Free Privacy Policy Generator.`}
              </p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {` What information we may collect from you`}
            </h2>
            <p>
              {`We may collect and process the following Information about you:`}
            </p>
            <ol>
              <li>
                {` 1.  Information that you provide by filling in forms on our Platform, including information provided at the time of registering to use our Platform and other co- registrations (e.g. social media logins), subscribing to our Services, posting material or requesting further services.`}
              </li>
              <li>
                {` 2.  the Information you provide when you enter a competition or promotion via our Platform, provide reviews, testimonials or feedback on our Platform.`}
              </li>
              <li>
                {` 3. Information you provide us, or that we may collect from you, when you report a problem with our Platform.`}
              </li>
              <li>{` 4. a record of correspondence if you contact us.`}</li>
              <li>
                {`5. general, aggregated, demographic and non-personal Information.`}
              </li>
              <li>
                {` 6.  if you download or use our mobile application, we may have access to details about your location and your mobile device, including a unique identifier for your device.`}
              </li>
              <li>
                {` 7. details of transactions you carry out through our Platform and of the fulfilment of your orders.`}
              </li>
              <li>
                {` 8. details about your computer, including but not limited to your IP address, operating system and browser type, as well as information about your general internet usage (e.g. by using technology that stores information on or gains access to your device, such as cookies, tracking pixels, web beacons, etc., (together, "Cookies")).`}
              </li>
              <li>
                {` 9. your email address from a third party if you indicate that you have consented to that third party sharing your Information with us and
  any other Information we consider necessary to enhance your experience on the Platform.`}
              </li>
            </ol>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {` How we will use your information`}
            </h2>
            <p>{`We may use Information held about you in the following ways:`}</p>
            <div className="font-sans leading-7">
              <ol>
                <li>
                  {` 1.    to provide you with information, products or services that you request from us or which we feel may interest you, where you have consented to be contacted for such purposes.`}
                </li>
                <li>
                  {` 2.    to provide you with location-based services, such as advertising, search results and other personalised content`}
                </li>
                <li>
                  {` 3. to carry out our obligations arising from any contracts entered into between you and another entity using our Platform or between you and us.`}
                </li>
                <li>{` 4. to improve our Services and to deliver a better and more personalised service to you.`}</li>
                <li>
                  {`5.  to ensure that content from our Platform is presented in the most effective manner for you and the device you use to access our Platform.`}
                </li>
                <li>{` 6.  to notify you about changes to our Services.`}</li>
                <li>
                  {` 7.  for any other reason which we deem necessary to enhance your experience of the Platform.`}
                </li>
                <li>
                  {` 8.  to administer and manage our incentives programs and fulfil your requests for incentives,and/or to allow you to participate in sweepstakes and to notify you if you are a sweepstakes winner.`}
                </li>
              </ol>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {`To whom we may disclose your information`}
            </h2>
            <div className="font-sans leading-7">
              <p>
                {`Information about our customers is an important part of our business. We share your Information only as described below and with businesses that follow practices at least as protective as those described in this Privacy Policy:`}
              </p>

              <ol>
                <li>
                  {`1.`} <strong>{`Other Businesses.`}</strong>{" "}
                  {`   To offer you our Services, we may engage with businesses who are affiliates of us and/or non-affiliated service providers (e.g. logistics businesses used to deliver products to you, marketing companies, payments processers to process online transactions, etc.). We may involve other businesses in your transactions, who may store your Information in a digital wallet to make your use of our Services more efficient.`}
                </li>
                <p>
                  {`You understand that it is important that such businesses have
                  access to the relevant Information to perform their functions.
                  We will ensure that these businesses do not use your
                  Information for other purposes. We may also receive
                  Information from these business (e.g. updated delivery and
                  address information), which we may use (e.g. to correct our
                  records and deliver your next purchase). By using our
                  Platform, you hereby freely and specifically consent to the
                  transfer, storage, use, and disclosure of your Information
                  among businesses who are affiliates of us and/or
                  non-affiliated service providers, wherever located. These
                  businesses shall be contractually bound to respect the
                  confidentiality of your Information.`}
                </p>
                <li>
                  {`2.`}
                  <strong>{`Marketing and Promotional Offers`}</strong>{" "}
                  {`  . We may also use your Information to provide you with information about goods and services which may be of interest to you and enhance your Platform experience, service messages, new features, enhancements, special offers and events of interest. We may contact you via various channels, including without limitation emails, push notifications, web notifications, post, telephone, in-app messages and news feed cards.`}
                </li>
                <p>
                  {`We may permit third parties to use your Information. For
                  example, we may provide advertisers Information to help them
                  reach the kind of audience they want to target and to enable
                  us to comply with our commitments to our advertisers (e.g. by
                  displaying their advertisements to a target audience).
                  Additionally, you may be asked to provide additional
                  Information to participate in some of our market research
                  activities, including competitions and promotions. For
                  example, if you win a competition, you may be asked to provide
                  further personal data to establish your eligibility and
                  provide you with the prize. This Information may be collected
                  by us or our co-sponsors or vendors for the promotion. Note
                  that you should review such third parties’ privacy policies to
                  see how they may use any information that they collect.`}
                </p>
                <li>
                  {`3.`} <strong>{`Business Transfers.`}</strong>
                  {`  In the event that we or substantially all of our assets are acquired, customer information will be one of the transferred assets.`}
                </li>
                <li>
                  {`4.`}
                  <strong> {`Protection of Our Platform and Others.`}</strong>
                  {` We release account and other Information when we believe such a release is appropriate to comply with the law and law enforcement investigations and to protect the rights, property or safety of our users or others. This includes exchanging information with other companies and organisations for various reasons, such as fraud protection and credit risk reduction.
`}
                </li>
                <p>
                  {`Note that our Platform may, from time to time, contain links
                  to and from the websites of our partner networks, advertisers
                  and affiliates. If you follow a link to any of these websites,
                  please note that these websites have their own privacy
                  policies and that we do not accept any responsibility or
                  liability for these policies. Please check these policies
                  before you submit any personal data or other information to
                  these websites.`}
                </p>
              </ol>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {`How we store your information`}
            </h2>
            <div className="font-sans leading-7">
              <p>
                {`The Information that we collect from you may be transferred to, and stored at, a destination outside of the UAE. It may also be processed by staff operating outside the UAE who work for us or for one of our suppliers. Such staff may be engaged in, among other things, the fulfilment of your order, the processing of your payment details and the provision of support services. We will store your Information for as long as necessary to fulfil the purposes indicated in this Privacy Policy or as otherwise permitted or required by law. Your Information may be transferred, stored, processed and used by our affiliated companies and/or non-affiliated service providers in one or more countries outside your originating country. Your payment details may be transferred to and stored with our affiliated companies in order to, among other things, process your payment details and provide support services to you.`}
              </p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {`What security measures we apply`}
            </h2>
            <div className="font-sans leading-7">
              <p>
                {`We maintain commercially reasonable technical, administrative, and physical safeguards to ensure your Information is treated securely and in accordance with this Privacy Policy, and to protect against unauthorized access or alteration to, disclosure, or destruction of your Information. We may, for example, use encryption technology to secure your Information during transmission to our Platform as well as external firewall and on-host firewall technology to prevent network level attacks. Only those authorized employees, contractors, and agents who need to know your Information in connection with the performance of their services are allowed to access this Information.`}
              </p>
              <p>{`It is important for you to protect yourself against unauthorised access to your password and to your devices used to access our Services. You are responsible for keeping your password confidential. For example, ensure that you sign off when you have finished using a shared device.`}</p>
              <p>{`Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your Information, we cannot guarantee the security of your Information transmitted to our Platform and any transmission is at your own risk.`}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {`How can you access and amend your information`}
            </h2>
            <div className="font-sans leading-7">
              <p>
                {`You are able to access a broad range of information about your account and your interactions with the Platform for the purpose of viewing and, in certain cases, updating your Information.`}
              </p>
              <p>
                {`Examples of information you can access easily at the Platform include:`}
              </p>
              <ol>
                <li>
                  {` 1.  up-to-date information regarding recent orders.`}
                </li>
                <li>
                  {` 2.  personally identifiable information (including name, e-mail, password, communications and personalised advertising preferences).`}
                </li>
                <li>
                  {` 3. payment settings (including credit card information) and`}
                </li>
                <li>{` 4. e-mail notification settings.`}</li>
              </ol>
              <p>{`You can opt-out of receiving future marketing communications from us at any time by adjusting your customer communication preferences, through the unsubscribe link within the email`}</p>
              <p>{`communication. For marketing via your mobile application, you will need to adjust your notifications settings in the general section of your mobile.`}</p>
              <p>{`Also, our system will place cookies when you log on to our Platform and this is to ensure you have an enjoyable user experience and are able to utilise all aspects of the Platform. You may disable Cookies by changing the settings on your browser. If you disable Cookies, it will affect how our Platform works and you may not be able to access or use certain areas of our Platform or full functionality. For example, performance cookies collect information about how you use the Site, for instance, which pages you visit most often, which allows us to provide you with targeted and relevant choices that enhance your Site experience.`}</p>
              <p>{`We may retain a copy of your Information for compliance reasons. When you update Information, we may retain a copy of the prior version for our records.`}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {`What if we change our privacy policy?`}
            </h2>
            <div className="font-sans leading-7">
              <p>
                {`Our business changes constantly, and our Privacy Policy may therefore also need to change. We will post the current version of this Privacy Policy on the Platform and each such change will be effective upon posting on the Platform or upon the date designated by us as the "effective date".`}
              </p>
              <p>{`We may e-mail periodic reminders of our notices and conditions, but you should check our Platform frequently to see recent changes.`}</p>
              <p>{`It is your obligation to regularly check the Privacy Policy. Your continued use of the Platform following any such change constitutes your agreement to this Privacy Policy as so modified.`}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {`How you can contact us`}
            </h2>
            <div className="font-sans leading-7">
              <p>
                {`If you have any concerns about your Information on the Platform, please contact us at info@nutsarabia.com with a thorough description, and we will try to resolve it.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
PrivacyPolicy.getLayout = (page: ReactElement) => {
  return (
    <Layout title="Privacy Policy" description="This is privacy policy page">
      {page}
    </Layout>
  )
}

export default PrivacyPolicy
