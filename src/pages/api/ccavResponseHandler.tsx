import { decrypt } from "../../services/ccavutil"
import qs from "querystring"
import { NextApiRequest, NextApiResponse } from "next"
import Link from "next/link"

export default async (request: NextApiRequest, response: NextApiResponse) => {
  let baseURL =
    "http://localhost:3000" /* "https://nuts-arabia-testing.vercel.app" */
  var ccavEncResponse = "",
    ccavResponse = "",
    workingKey = "EE7011F11B93A71FA2A57861571A0385", //Put in the 32-Bit key shared by CCAvenues.
    ccavPOST: any = ""
  // request.on("data", function (data) {
  // console.log("request=====>",request)
  // console.log("data=====>",data)
  // })

  // ccavEncResponse +=request.body.encResp;
  // ccavPOST = qs.parse(ccavEncResponse);
  var encryption = request.body.encResp
  ccavResponse = decrypt(encryption, workingKey)
  console.log("request=====>", request.body)
  console.log("ccavResponse======>", ccavResponse)
  let splitQueryParam = ccavResponse.split("&")

  // ORDER ID

  let orderID: any = splitQueryParam.filter((eachQuery) =>
    eachQuery.includes("merchant_param1")
  )
  orderID = orderID[0].split("=")[1]
  orderID = "order_" + orderID.substring(5)
  console.log("orderID======>", orderID, typeof orderID)

  // ORDER STATUS

  let orderStatus: any = splitQueryParam.filter((eachQuery) =>
    eachQuery.includes("order_status")
  )
  orderStatus = orderStatus[0].split("=")[1]
  // orderStatus = orderStatus
  console.log("orderStatus======>", orderStatus, typeof orderStatus)

  // STATUS MESSAGE

  let statusMessage: any = splitQueryParam.filter((eachQuery) =>
    eachQuery.includes("status_message")
  )
  statusMessage = statusMessage[0].split("=")[1]

  console.log("status_message======>", statusMessage, typeof statusMessage)

  // FAILURE MESSAGE

  let failureMessage: any = splitQueryParam.filter((eachQuery) =>
    eachQuery.includes("failure_message")
  )
  failureMessage = failureMessage[0].split("=")[1]

  console.log("failure_message======>", failureMessage, typeof failureMessage)

  switch (orderStatus.toLowerCase()) {
    case "success":
      console.log("orderStatus->", orderStatus)
      response.writeHead(301, {
        Location:
          baseURL +
          "/order/confirmed/" +
          orderID +
          "?statusMessage=" +
          statusMessage +
          "&statusOrder=" +
          orderStatus,
      })
      break

    case "aborted":
      response.writeHead(301, {
        Location:
          baseURL +
          "/order/confirmed/" +
          orderID +
          "?statusMessage=" +
          statusMessage +
          "&statusOrder=" +
          orderStatus,
      })
      break

    case "failure":
      response.writeHead(301, {
        Location:
          baseURL +
          "/order/confirmed/" +
          orderID +
          "?statusMessage=" +
          statusMessage +
          "&statusOrder=" +
          orderStatus,
      })
      break
    default:
      break
  }
  // response.writeHead(301, {
  //   Location: baseURL + "/order/confirmed/" + orderID,
  // })
  response.end()
}
