import useEnrichedLineItems from "@lib/hooks/use-enrich-line-items"
import DiscountCode from "@modules/checkout/components/discount-code"
import SkeletonCartPage from "@modules/skeletons/templates/skeleton-cart-page"
import { useCart, useMeCustomer } from "medusa-react"
import { useContext, useState } from "react"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import ItemsTemplate from "./items"
import Summary from "./summary"
import { IoBagCheckOutline, IoClose, IoBagHandle } from "react-icons/io5"
import { SidebarContext } from "@modules/common/components/context/SidebarContext"
import Link from "next/link"
import { useRouter } from "next/router"
import CartItem from "../CartItem"
import getDisplayableprice from "@services/PriceService"

const CartTemplate = () => {
  const router = useRouter()
  const { cart } = useCart()
  const { customer, isLoading } = useMeCustomer()
  const items: any = useEnrichedLineItems()
  const [modalOpen, setModalOpen] = useState(false)
  const { toggleCartDrawer, closeCartDrawer } = useContext(SidebarContext)

  console.log("cartIT", cart)
  console.log("items", items)

  if (!cart || !cart?.id?.length || isLoading) {
    return <SkeletonCartPage />
  }

  // const handleOpenLogin = () => {
  //   if (router.push("/?redirect=/checkout")) {
  //     toggleCartDrawer()
  //     setModalOpen(!modalOpen)
  //   }
  // }

  const checkoutClass = (
    <button
      onClick={closeCartDrawer}
      className="w-full py-3 px-3 rounded-lg flex items-center justify-between bg-heading text-sm sm:text-base text-white focus:outline-none transition duration-300"
      style={{background:"#592316"}}
    >
      <span className="align-middle font-medium font-serif">
        Proceed To Checkout
      </span>
      <span className="rounded-lg font-bold font-serif py-2 px-3 bg-white" style={{color:"#A32E00"}}>
        {/* ${/* total.toFixed(2) */}
        {cart.region.currency_code.toUpperCase()}{" "}
        {getDisplayableprice(cart.subtotal)}
      </span>
    </button>
  )

  return (
    // {modalOpen && (
    //   <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    // )}
    // <div className="bg-gray-50 py-12">
    // <div className="content-container">
    <>
      <div className="flex flex-col w-full h-full justify-between items-middle bg-white rounded cursor-pointer">
        <div className="w-full flex justify-between items-center relative px-5 py-4 border-b bg-indigo-50 border-gray-100">
          <h2 className="font-semibold font-serif text-lg m-0 text-heading flex items-center">
            <span className="text-xl mr-2 mb-1">
              <IoBagCheckOutline />
            </span>
            Shopping Cart
          </h2>
          <button
            onClick={closeCartDrawer}
            className="inline-flex text-base items-center justify-center text-gray-500 p-2 focus:outline-none transition-opacity hover:text-red-400"
          >
            <IoClose />
            <span className="font-sens text-sm text-gray-500 hover:text-red-400 ml-1">
              Close
            </span>
          </button>
        </div>
        {/* {cart.items.length ? (
          <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-8">
            <div className="flex flex-col bg-white p-6 gap-y-6">
              {!customer && <SignInPrompt />}
              <ItemsTemplate region={cart?.region} items={items} />
            </div>
            <div className="relative">
              <div className="flex flex-col gap-y-8 sticky top-12">
                {cart && cart.region && (
                  <>
                    <div className="bg-white p-6">
                      <Summary cart={cart} />
                    </div>
                    <div className="bg-white p-6">
                      <DiscountCode cart={cart} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            {!customer && <SignInPrompt />}
            <EmptyCartMessage />
          </div>
        )} */}

        <div className="overflow-y-scroll flex-grow scrollbar-hide w-full max-h-full">
          {items?.length === 0 && (
            <div className="flex flex-col h-full justify-center">
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center w-20 h-20 rounded-full" style={{background:"#DDC5A2"}}>
                  <span className=" text-4xl block" style={{color:"#592316"}}>
                    <IoBagHandle />
                  </span>
                </div>
                <h3 className="font-serif font-semibold text-gray-700 text-lg pt-5">
                  Your cart is empty
                </h3>
                <p className="px-12 text-center text-sm text-gray-500 pt-2">
                  No items added in your cart. Please add product to your cart
                  list.
                </p>
              </div>
            </div>
          )}
          {items?.map((item: any, i: any) => (
            <CartItem key={i + 1} item={item} cart={cart} />
          ))}
        </div>

        <div className="mx-5 my-3">
          {items?.length === 0 ? (
            /* checkoutClass */ <></>
          ) : (
            <span>
              {
                /* !userInfo */ false ? (
                  <div /* onClick={handleOpenLogin} */>{checkoutClass}</div>
                ) : (
                  <Link href="/checkout">
                    <a>{checkoutClass}</a>
                  </Link>
                )
              }
            </span>
          )}
        </div>
      </div>
    </>
    // </div>
    // </div>
  )
}

export default CartTemplate
