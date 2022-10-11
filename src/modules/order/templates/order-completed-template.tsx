import { Order } from "@medusajs/medusa"
import { useRouter } from "next/router"
import { usePaymentMethod } from "@lib/context/paymeny-method-context"
import InvoiceForDownload from "@modules/common/components/invoice/InvoiceForDownload"
import Help from "@modules/order/components/help"
import Items from "@modules/order/components/items"
import OrderDetails from "@modules/order/components/order-details"
import OrderSummary from "@modules/order/components/order-summary"
import PaymentDetails from "@modules/order/components/payment-details"
import ShippingDetails from "@modules/order/components/shipping-details"
import { PDFDownloadLink } from "@react-pdf/renderer"
import React, { useRef, useEffect, useState } from "react"
import {
  IoArrowForward,
  IoCloudDownloadOutline,
  IoPrintOutline,
  IoReturnUpBackOutline,
} from "react-icons/io5"
import { GrMoney } from "react-icons/gr"
import ReactToPrint from "react-to-print"
import Invoice from "../../../modules/common/components/invoice/Invoice"
import { useCheckout } from "@lib/context/checkout-context"
import PaymentModal from "@modules/common/components/modal/PaymentModal"

type OrderCompletedTemplateProps = {
  order: Order
}

const OrderCompletedTemplate: React.FC<OrderCompletedTemplateProps> = ({
  order,
}) => {
  const printRef = useRef<any>()
  console.log("printRef", printRef)
  const router = useRouter()
  const { paymentMethodGloble } = usePaymentMethod()
  const [abortedStatus, setAbortedStatus] = useState<any>(null)
  const [abortedMessage, setAbortedMessage] = useState<any>(null)
  const [modalOpen, setModalOpen] = useState<any>(false)

  useEffect(() => {
    console.log("routerMessage---->", router.query)
    const orderDetails = router.query
    console.log("oderDetails---->", orderDetails)
    setAbortedStatus(orderDetails.statusOrder)
    setAbortedMessage(orderDetails.statusMessage)
    console.log("abortedStatus", abortedStatus)
    console.log("abortedMessage", abortedMessage)
  }, [router.query])

  // const { onPaymentCompleted } = useCheckout()
  // const handleCCAVPayment = () => {
  //   onPaymentCompleted()
  //   // location.href = "/api/ccavRequestHandler?merchant_id=45990&order_id=332"
  // }

  console.log("paymentMethodGloble", paymentMethodGloble)

  // useEffect(() => {
  //   console.log("order=======>", order)
  //   if (order && Object.keys(order).length > 0 && paymentMethodGloble) {
  //     if (paymentMethodGloble.toLowerCase() === "card") {
  //       router.push(
  //         "/api/ccavRequestHandler?displayId=" +
  //           order.display_id +
  //           "&orderId=" +
  //           order.id +
  //           "&currency=" +
  //           order.currency_code +
  //           "&totalAmount=" +
  //           order.total +
  //           "&billingName=" +
  //           order.customer.first_name +
  //           "&billingAddress=" +
  //           order.shipping_address.address_1 +
  //           "&billingCity=" +
  //           order.shipping_address.city +
  //           "&billingState=" +
  //           "&billingZip=" +
  //           order.shipping_address.postal_code +
  //           "&billingCountry=" +
  //           order.shipping_address.country_code +
  //           "&billingTel=" +
  //           order.shipping_address.phone +
  //           "&billingEmail=" +
  //           order.customer.email +
  //           "&deliveryName=" +
  //           order.shipping_address.first_name +
  //           "&deliveryAddress=" +
  //           order.shipping_address.address_1 +
  //           order.shipping_address.address_2 +
  //           "&deliveryCity=" +
  //           order.shipping_address.city +
  //           "&deliveryState=" +
  //           "&deliveryZip=" +
  //           order.shipping_address.postal_code +
  //           "&deliveryCountry=" +
  //           order.shipping_address.country_code +
  //           "&deliveryTel=" +
  //           order.shipping_address.phone
  //       )
  //     }
  //   }
  // }, [order])

  const getGreeting = (status: any) => {
    switch (status.toLowerCase()) {
      case "success":
        return "Thank You. "

      case "aborted":
        return "Your transaction is cancelled."

      case "failure":
        return "Authentication Failed."

      default:
        return "Thank You. "
    }
  }

  const getMessage = (status: any) => {
    switch (status.toLowerCase()) {
      case "success":
        return "Your payment was successfull."

      case "aborted":
        return "Please retry payment."

      case "failure":
        return " Please retry."

      default:
        return "Your order have been received !"
    }
  }

  // const handlePayment = () => {
  //   router.push(
  //     "/api/ccavRequestHandler?displayId=" +
  //       order.display_id +
  //       "&orderId=" +
  //       order.id +
  //       "&currency=" +
  //       order.currency_code +
  //       "&totalAmount=" +
  //       order.total +
  //       "&billingName=" +
  //       order.customer.first_name +
  //       "&billingAddress=" +
  //       order.shipping_address.address_1 +
  //       "&billingCity=" +
  //       order.shipping_address.city +
  //       "&billingState=" +
  //       "&billingZip=" +
  //       order.shipping_address.postal_code +
  //       "&billingCountry=" +
  //       order.shipping_address.country_code +
  //       "&billingTel=" +
  //       order.shipping_address.phone +
  //       "&billingEmail=" +
  //       order.customer.email +
  //       "&deliveryName=" +
  //       order.shipping_address.first_name +
  //       "&deliveryAddress=" +
  //       order.shipping_address.address_1 +
  //       order.shipping_address.address_2 +
  //       "&deliveryCity=" +
  //       order.shipping_address.city +
  //       "&deliveryState=" +
  //       "&deliveryZip=" +
  //       order.shipping_address.postal_code +
  //       "&deliveryCountry=" +
  //       order.shipping_address.country_code +
  //       "&deliveryTel=" +
  //       order.shipping_address.phone
  //   )
  // }

  // useEffect(() => {
  //   if (order && Object.keys(order).length > 0 && paymentMethodGloble) {
  //     if (paymentMethodGloble.toLowerCase() === "card") {
  //       console.log("paymentMethodGloble", paymentMethodGloble)
  //     }
  //   }
  // }, [order])

  console.log("display_id", order.display_id)
  console.log("id", order.id)
  console.log("currency_code", order.currency_code)
  console.log("total", order.total)
  console.log("shipping_address.first_name", order.shipping_address.first_name)
  console.log("shipping_address.address_1", order.shipping_address.address_1)
  console.log("shipping_address.address_2", order.shipping_address.address_2)
  console.log("shipping_address.city", order.shipping_address.city)
  console.log(
    "shipping_address.country_code",
    order.shipping_address.country_code
  )

  // console.log("billing_state", order.shipping_address.province)
  console.log(
    "shipping_address.postal_code",
    order.shipping_address.postal_code
  )
  console.log(
    "shipping_address.country_code",
    order.shipping_address.country_code
  )
  console.log("shipping_address.phone", order.shipping_address.phone)
  console.log("email", order.email)

  return (
    // <div className="bg-gray-50 py-6 min-h-[calc(100vh-64px)]">
    //   <div className="content-container flex justify-center">
    //     <div className="max-w-4xl h-full bg-white w-full">
    //       <OrderDetails order={order} />
    //       <Items
    //         items={order.items}
    //         region={order.region}
    //         cartId={order.cart_id}
    //       />
    //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10 border-b border-gray-200">
    //         <PaymentDetails
    //           payments={order.payments}
    //           paymentStatus={order.payment_status}
    //         />
    //         <ShippingDetails
    //           shippingMethods={order.shipping_methods}
    //           address={order.shipping_address}
    //         />
    //       </div>
    //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10">
    //         <Help />
    //         <OrderSummary order={order} />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="max-w-screen-2xl mx-auto py-10 px-3 sm:px-6">
      {
        /* showCard */ modalOpen && (
          // <div className="mb-3">
          //   <CardElement />{" "}
          //   <p className="text-red-400 text-sm mt-1">
          //     {/* {error} */}
          //   </p>
          // </div>
          <PaymentModal
            order={order}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            msg={`You will be redirected to CCAvenue site to complete the order`}
          />
        )
      }
      <div
        /* className="bg-emerald-100 rounded-md mb-5 px-4 py-3" */ className="flex rounded-md mb-5 px-4 py-3  justify-between items-center"
        style={{ background: "#DDC5A2" }}
      >
        <label>
          {abortedStatus ? getGreeting(abortedStatus) : "Thank You"}{" "}
          <span className="font-bold" style={{ color: "#592316" }}>
            {order.shipping_address.first_name}{" "}
            {order.shipping_address.last_name},
          </span>{" "}
          {/* Your order have been received ! */}
          {abortedStatus
            ? getMessage(abortedStatus)
            : "Your order have been received !"}
        </label>

        {paymentMethodGloble?.toLowerCase() === "card" && (
          <button
            // onClick={() => handleCCAVPayment()}
            // onClick={() => handlePayment()}
            onClick={() => setModalOpen(true)}
            // className="mb-3 sm:mb-0 md:mb-0 lg:mb-0 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white transition-all font-serif text-sm font-semibold h-10 py-2 px-5 rounded-md"
            className="mb-3 sm:mb-0 md:mb-0 lg:mb-0 flex items-center justify-center text-white transition-all font-serif text-sm font-semibold h-10 py-2 px-5 rounded-md"
            style={{ background: "#301B28" }}
          >
            Make Payment{" "}
            <span className="ml-2  ">
              <IoArrowForward />
            </span>
          </button>
        )}

        {(abortedStatus?.toLowerCase() === "aborted" ||
          abortedStatus?.toLowerCase() === "failure") && (
          <button
            // onClick={() => handleCCAVPayment()}
            // onClick={() => handlePayment()}
            onClick={() => setModalOpen(true)}
            // className="mb-3 sm:mb-0 md:mb-0 lg:mb-0 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white transition-all font-serif text-sm font-semibold h-10 py-2 px-5 rounded-md"
            className="mb-3 sm:mb-0 md:mb-0 lg:mb-0 flex items-center justify-center text-white transition-all font-serif text-sm font-semibold h-10 py-2 px-5 rounded-md"
            style={{ background: "#301B28" }}
          >
            Retry Payment{" "}
            <span className="ml-2  ">
              <IoArrowForward />
            </span>
          </button>
        )}
      </div>
      <div className="bg-white rounded-lg shadow-sm">
        <Invoice data={order} printRef={printRef} />
        <div className="bg-white p-8 rounded-b-xl">
          <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between"></div>
          <div className="bg-white p-8 rounded-b-xl">
            <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between">
              {/* <PDFDownloadLink
                document={<InvoiceForDownload data={order} />}
                fileName="Invoice"
              >
                {({ blob, url, loading, error }) =>
                  loading ? (
                    "Loading..."
                  ) : (
                    <button className="mb-3 sm:mb-0 md:mb-0 lg:mb-0 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white transition-all font-serif text-sm font-semibold h-10 py-2 px-5 rounded-md">
                      Download Invoice{" "}
                      <span className="ml-2 text-base">
                        <IoCloudDownloadOutline />
                      </span>
                    </button>
                  )
                }
              </PDFDownloadLink> */}

              <ReactToPrint
                trigger={() => (
                  <button
                    className="mb-3 sm:mb-0 md:mb-0 lg:mb-0 flex items-center justify-center text-white transition-all font-serif text-sm font-semibold h-10 py-2 px-5 rounded-md"
                    style={{ background: "#301B28" }}
                  >
                    Print Invoice{" "}
                    <span className="ml-2">
                      <IoPrintOutline />
                    </span>
                  </button>
                )}
                content={() => printRef.current}
                documentTitle="Invoice"
              />

              {/* {paymentMethodGloble?.toLowerCase() === "card" && (
                  <button
                    // onClick={() => handleCCAVPayment()}
                    // onClick={() => handlePayment()}
                    onClick={() => setModalOpen(true)}
                    // className="mb-3 sm:mb-0 md:mb-0 lg:mb-0 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white transition-all font-serif text-sm font-semibold h-10 py-2 px-5 rounded-md"
                    className="mb-3 sm:mb-0 md:mb-0 lg:mb-0 flex items-center justify-center text-white transition-all font-serif text-sm font-semibold h-10 py-2 px-5 rounded-md"
                    style={{ background: "#301B28" }}
                  >
                    Make Payment{" "}
                    <span className="ml-2  ">
                      <IoArrowForward />
                    </span>
                  </button>
                )}

                {abortedStatus && (
                  <button
                    // onClick={() => handleCCAVPayment()}
                    // onClick={() => handlePayment()}
                    onClick={() => setModalOpen(true)}
                    // className="mb-3 sm:mb-0 md:mb-0 lg:mb-0 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white transition-all font-serif text-sm font-semibold h-10 py-2 px-5 rounded-md"
                    className="mb-3 sm:mb-0 md:mb-0 lg:mb-0 flex items-center justify-center text-white transition-all font-serif text-sm font-semibold h-10 py-2 px-5 rounded-md"
                    style={{ background: "#301B28" }}
                  >
                    Retry Payment{" "}
                    <span className="ml-2  ">
                      <IoArrowForward />
                    </span>
                  </button>
                )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderCompletedTemplate
