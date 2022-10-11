import React from "react"
import MainModal from "./MainModal"
import Button from "@modules/common/components/button"
import { IoArrowForward } from "react-icons/io5"
import { useCheckout } from "@lib/context/checkout-context"
import { Order } from "@medusajs/medusa"
import { useRouter } from "next/router"

const PaymentModal = ({ modalOpen, setModalOpen, msg, order }: any) => {
  // const { onPaymentCompleted } = useCheckout()
  const router = useRouter()
  console.log("modalOrder", order)
  // const handleCCAVPayment = () => {
  //   onPaymentCompleted()
  //   // location.href = "/api/ccavRequestHandler?merchant_id=45990&order_id=332"
  // }

  const handlePayment = () => {
    router.push(
      "/api/ccavRequestHandler?displayId=" +
        order.display_id +
        "&orderId=" +
        order.id +
        "&currency=" +
        order.currency_code +
        "&totalAmount=" +
        order.total +
        "&billingName=" +
        order.customer.first_name +
        "&billingAddress=" +
        order.shipping_address.address_1 +
        "&billingCity=" +
        order.shipping_address.city +
        "&billingState=" +
        "&billingZip=" +
        order.shipping_address.postal_code +
        "&billingCountry=" +
        order.shipping_address.country_code +
        "&billingTel=" +
        order.shipping_address.phone +
        "&billingEmail=" +
        order.customer.email +
        "&deliveryName=" +
        order.shipping_address.first_name +
        "&deliveryAddress=" +
        order.shipping_address.address_1 +
        order.shipping_address.address_2 +
        "&deliveryCity=" +
        order.shipping_address.city +
        "&deliveryState=" +
        "&deliveryZip=" +
        order.shipping_address.postal_code +
        "&deliveryCountry=" +
        order.shipping_address.country_code +
        "&deliveryTel=" +
        order.shipping_address.phone
    )
  }

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block overflow-y-auto h-full transition-all transform bg-white shadow-xl rounded-xl">
        {/* <div className="inline-block overflow-y-auto h-full align-middle transition-all transform bg-white shadow-xl rounded-2xl w-64 p-2"> */}
        <div className="border-b-2 p-4 font-semibold text-2xl flex mb-4 ">
          Confirmation
        </div>
        <div className="px-4 font-normal text-lg flex ">{msg}</div>
        <div className="p-4">
          <Button onClick={() => handlePayment()}>
            <div
              className="border  transition-all rounded py-3 text-center text-sm font-serif font-medium text-white flex justify-center w-full"
              style={{ background: "#301B28" }}
            >
              Continue
              <span className="text-xl ml-2">
                <IoArrowForward />
              </span>
            </div>
          </Button>
        </div>
      </div>
    </MainModal>
  )
}
export default PaymentModal
