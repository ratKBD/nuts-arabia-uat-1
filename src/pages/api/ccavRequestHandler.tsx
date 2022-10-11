import { encrypt } from "../../services/ccavutil"
import { NextApiRequest, NextApiResponse } from "next"
import getDisplayableprice from "@services/PriceService"
import CountryMapperService from "@services/CountryService"

export default async (request: NextApiRequest, response: NextApiResponse) => {
  var body = "",
    workingKey = "EE7011F11B93A71FA2A57861571A0385", //Put in the 32-Bit key shared by CCAvenues.
    accessCode = "AVIK04JG35BN29KINB", //Put in the Access Code shared by CCAvenues.
    encRequest = "",
    formbody = ""
  console.log("req.query", request.query)
  console.log("query", request)
  let merchantId = "45990"
  let displayId = request.query.displayId
  let orderId = request.query.orderId
  let currency: any = request.query.currency
  currency = currency.toUpperCase()
  let totalAmount = request.query.totalAmount
  totalAmount = totalAmount ? getDisplayableprice(totalAmount) : "0.00"
  let billingName = request.query.billingName
  let billingAddress = request.query.billingAddress
  let billingCity = request.query.billingCity
  let billingState = request.query.billingState
  let billingZip = request.query.billingZip
  let billingCountry = request.query.billingCountry
  billingCountry =
    CountryMapperService.mapCountryCodeToCountryName(billingCountry)
  let billingTel = request.query.billingTel
  let billingEmail = request.query.billingEmail
  let deliveryName = request.query.deliveryName
  let deliveryAddress = request.query.deliveryAddress
  let deliveryCity = request.query.deliveryCity
  let deliveryState = request.query.deliveryState
  let deliveryZip = request.query.deliveryZip
  let deliveryCountry = request.query.deliveryCountry
  let deliveryTel = request.query.deliveryTel

  //   request.on("data", function (data) {
  //   debugger
  let baseURL =
    "http://localhost:3000" /* "https://nuts-arabia-testing.vercel.app" */
  // body += data
  //"+request.query.orderId+"
  body =
    "merchant_id=" +
    merchantId +
    "&order_id=" +
    displayId +
    "&currency=" +
    currency +
    "&amount=" +
    totalAmount +
    "&redirect_url=" +
    baseURL +
    "/api/ccavResponseHandler&cancel_url=" +
    baseURL +
    "/api/ccavResponseHandler&language=EN&billing_name=" +
    billingName +
    "&billing_address=" +
    billingAddress +
    "&billing_city=" +
    billingCity +
    "&billing_state=" +
    billingState +
    "&billing_zip=" +
    billingZip +
    "&billing_country=" +
    billingCountry +
    "&billing_tel=" +
    billingTel +
    "&billing_email=" +
    billingEmail +
    "&delivery_name=" +
    deliveryName +
    "&delivery_address=" +
    deliveryAddress +
    "&delivery_city=" +
    deliveryCity +
    "&delivery_state=" +
    deliveryState +
    "&delivery_zip=" +
    deliveryZip +
    "&delivery_country=" +
    deliveryCountry +
    "&delivery_tel=" +
    deliveryTel +
    "&merchant_param1=" +
    orderId +
    "&merchant_param2=additional+Info.&merchant_param3=additional+Info.&merchant_param4=additional+Info.&merchant_param5=additional+Info.&promo_code=&customer_identifier="
  console.log("data", body)
  encRequest = /* ccav. */ encrypt(body, workingKey)

  console.log("encRequest", encRequest)

  formbody =
    '<form id="nonseamless" method="post" name="redirect" action="https://secure.ccavenue.ae/transaction/transaction.do?command=initiateTransaction"/> <input type="hidden" id="encRequest" name="encRequest" value="' +
    encRequest +
    '"><input type="hidden" name="access_code" id="access_code" value="' +
    accessCode +
    '"><script language="javascript">document.redirect.submit();</script></form>'
  //   })

  //   request.on("end", function () {
  response.writeHead(200, { "Content-Type": "text/html" })
  response.write(formbody)
  response.end()
  //   })
  //   return
  //   res.send("Hello world!")
}
