import {
  CheckoutFormValues,
  CheckoutProvider,
  useCheckout,
} from "@lib/context/checkout-context";
import { useLoader } from "@lib/context/loader-context";
import { usePaymentMethod } from "@lib/context/paymeny-method-context";
import useEnrichedLineItems from "@lib/hooks/use-enrich-line-items";
import { emailRegex } from "@lib/util/regex";
import InputArea from "@modules/account/components/form/InputArea";
import Label from "@modules/account/components/form/Label";
import CartItem from "@modules/cart/CartItem";
import CountrySelect from "@modules/checkout/components/country-select";
import InputPayment from "@modules/checkout/components/form/InputPayment";
import Payment from "@modules/checkout/components/payment";
import PaymentButton from "@modules/checkout/components/payment-button";
import Shipping from "@modules/checkout/components/shipping";
import Button from "@modules/common/components/button";
import ConnectForm from "@modules/common/components/connect-form";
import Error from "@modules/common/components/form/Error";
import Input from "@modules/common/components/input";
import Layout from "@modules/layout/templates";
import useCheckoutSubmit from "hooks/useCheckoutSubmit";
import { useCart } from "medusa-react";
import { ImCreditCard } from "react-icons/im";

import Link from "next/link";

import React, { useState, useEffect } from "react";
import {
  IoArrowForward,
  IoBagHandle,
  IoReturnUpBackOutline,
  IoWalletSharp,
} from "react-icons/io5";
import Loading from "../preloader/Loading";
import SectionLoading from "../preloader/SectionLoading";
import CartTotalSection from "./CartTotalSection";
import ShippingPage from "./ShippingPage";
import PaymentModal from "../modal/PaymentModal";
import { min } from "lodash";

const CheckOutPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { cart } = useCart()

  // if (!cart?.id) {
  //   return null
  // }

  // console.log("checkoutCart", cart)

  const {
    sameAsBilling: { state: checked, toggle: onChange },
    editAddresses: { state: isEdit, toggle: setEdit },
    setAddresses,
    handleSubmit,
    setPaymentSession,
    initPayment,
    cart,
  } = useCheckout();

  const items: any = useEnrichedLineItems();
  const { sectionLoader, sectionLoaderTwo } = useLoader();
  const { setPaymentMethodGloble } = usePaymentMethod();
  const [displayPaymentMethod, setDisplayPaymentMethod] = useState<any>(false);
  const [paymentMethod, setPaymentMethod] = useState<any>(null);
  // console.log("displayPaymentMethod", setDisplayPaymentMethod)
  const [showCard, setShowCard] = useState<any>(false);
  const [modalOpen, setModalOpen] = useState<any>(false);
  // const [value, setValue] = useState<any>({
  //   firstName: "",
  //   lastName: "",
  // })
  const [err, setErr] = useState<any>({
    firstName: "",
    lastName: "",
  });
  console.log("boolean", isEdit);
  console.log("cartCheck", cart);

  useEffect(() => {
    console.log("paymentMethod", paymentMethod);
    if (paymentMethod) {
      setPaymentMethodGloble(paymentMethod);
    }
  }, [paymentMethod]);

  console.log("setAddress", setAddresses);

  useEffect(() => {
    console.log("cart.payment_sessions", cart?.payment_sessions);
    let sessions: any = cart?.payment_sessions;
    let timeout: NodeJS.Timeout | null = null;

    if (sessions?.length > 0) {
      setPaymentSession(sessions[0].provider_id);
    }

    if (displayPaymentMethod) {
      console.log("cart?.payment_sessions", cart?.payment_sessions);
      if (cart?.shipping_address && cart?.payment_sessions) {
        timeout = setTimeout(() => {
          initPayment();
        }, 5000);
      }
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [displayPaymentMethod]);

  // const handleValueChange = (e: any) => {
  //   console.log("targetedValue", e.target.name)
  //   let name: any = e.target.name
  //   let currentValue: any = e.target.value
  //   let eMsg: any

  //   switch (name) {
  //     case "shipping_address.first_name": {
  //       console.log("eValue", e.target.value)

  //       // validation
  //       if (currentValue.trim()) {
  //         if (currentValue.length < 3 || currentValue.length > 15) {
  //           eMsg =
  //             "First Name should have more than 3 characters and less than 20 characters!"
  //         }
  //       } else {
  //         eMsg = "First Name is required"
  //       }

  //       // setValue(ndasd)
  //       setValue({
  //         firstName: currentValue,
  //         lastName: value.lastName,
  //       })
  //       // setError()
  //       setErr({
  //         firstName: eMsg,
  //         lastName: err.lastName,
  //       })
  //     }
  //   }
  // }

  return (
    <>
      <Layout title="Checkout" description="this is checkout page">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="py-10 lg:py-12 px-0 2xl:max-w-screen-2xl w-full xl:max-w-screen-xl flex flex-col md:flex-row lg:flex-row">
            <div className="md:w-full lg:w-3/5 flex h-full flex-col order-2 sm:order-1 lg:order-1">
              <div className="mt-5 md:mt-0 md:col-span-2">
                <ConnectForm<CheckoutFormValues>>
                  {({ register, formState: { errors, touchedFields } }) => (
                    <div /* onSubmit={handleSubmit(submitHandler)} */>
                      {isEdit ? (
                        <div>
                          {sectionLoader ? (
                            <SectionLoading
                              loading={sectionLoader}
                              height={"525px"}
                            />
                          ) : (
                            <>
                              <div className="form-group">
                                <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                                  01. Personal Details
                                </h2>

                                <div className="grid grid-cols-6 gap-6">
                                  {/* <div className="col-span-6 sm:col-span-3">
                                    <Input
                                      label="First name"
                                      {...register(
                                        "shipping_address.first_name"
                                        // {
                                        //   required: "First name is required",
                                        // }
                                      )}
                                      placeholder="First Name"
                                      autoComplete="given-name"
                                      errors={errors}
                                      touched={touchedFields}
                                      handleValueChange={(e: any) =>
                                        handleValueChange(e)
                                      }
                                    />
                                  </div>
                                  <div className="col-span-6 sm:col-span-3">
                                    <Input
                                      minLength={1}
                                      maxLength={20}
                                      label="Last name"
                                      errMsg={`Last Name should have atleast 1 characters!`}
                                      {...register(
                                        "shipping_address.last_name",
                                        {
                                          required: "Last name is required",
                                        }
                                      )}
                                      placeholder="Last Name"
                                      autoComplete="family-name"
                                      errors={errors}
                                      touched={touchedFields}
                                    />
                                  </div> */}
                                  <div className="col-span-6 sm:col-span-3">
                                    <Input
                                      minLength={3}
                                      maxLength={20}
                                      errMsg={`First Name should have more than 3 characters and less than 20 characters!`}
                                      label="First Name"
                                      {...register(
                                        "shipping_address.first_name"
                                        // {
                                        //   required: "First name is required",
                                        //   minLength: {
                                        //     value: 3,
                                        //     message:
                                        //       "First ame should contain atleast 3 character",
                                        //   },
                                        //   maxLength: {
                                        //     value: 15,
                                        //     message:
                                        //       "First ame should not exceed more 15 than ",
                                        //   },
                                        // }
                                      )}
                                      placeholder="First Name"
                                      autoComplete="given-name"
                                      errors={
                                        errors.shipping_address?.first_name
                                      }
                                      touched={touchedFields}
                                    />
                                  </div>
                                  <div className="col-span-6 sm:col-span-3">
                                    <Input
                                      minLength={2}
                                      maxLength={20}
                                      label="Last Name"
                                      errMsg={`Last Name should have atleast 1 characters!`}
                                      {...register(
                                        "shipping_address.last_name",
                                        {
                                          required: "Last name is required",
                                        }
                                      )}
                                      placeholder="Last Name"
                                      autoComplete="family-name"
                                      errors={
                                        errors.shipping_address?.last_name
                                      }
                                      touched={touchedFields}
                                    />
                                  </div>

                                  <div className="col-span-6 sm:col-span-3">
                                    <Input
                                      minLength={3}
                                      // maxLength={10}
                                      // errMsg={`Email should have more than 2 characters and less than 100 characters!`}
                                      errFor={`Email Address`}
                                      regex={
                                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                                      }
                                      label="Email"
                                      {...register("email", {
                                        required: "Email is required",
                                        pattern: emailRegex,
                                      })}
                                      autoComplete="email"
                                      placeholder="example@gmail.com"
                                      errors={errors.email}
                                      touched={touchedFields}
                                    />
                                  </div>
                                  <div className="col-span-6 sm:col-span-3">
                                    {/* <Input
                                      minLength={8}
                                      maxLength={15}
                                      errMsg={`Phone Number cannot be blank, should have more than 8 characters and less than 15 characters!`}
                                      label="Phone"
                                      {...register("shipping_address.phone")}
                                      autoComplete="tel"
                                      errors={errors}
                                      placeholder="Phone number"
                                      touched={touchedFields}
                                    /> */}
                                    <Input
                                      minLength={3}
                                      // errMsg={`Phone Number cannot be blank, should have more than 3 characters and less than 10 characters!`}
                                      errFor={`Phone Number`}
                                      regex={
                                        /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/
                                      }
                                      label="Phone"
                                      {...register("shipping_address.phone", {
                                        required: "Phone is required",
                                      })}
                                      placeholder="Phone Number"
                                      autoComplete="phone-number"
                                      errors={errors.shipping_address?.phone}
                                      touched={touchedFields}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="form-group mt-12">
                                <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                                  02. Shipping Details
                                </h2>
                                <div className="grid grid-cols-6 gap-6 mb-8">
                                  <div className="col-span-6">
                                    <Input
                                      minLength={10}
                                      maxLength={100}
                                      errMsg={`Address should have more than 10 characters and less than 100 characters!`}
                                      label="Address"
                                      {...register(
                                        "shipping_address.address_1",
                                        {
                                          required: "Address is required",
                                        }
                                      )}
                                      autoComplete="address-line1"
                                      errors={
                                        errors.shipping_address?.address_1
                                      }
                                      placeholder="Enter Address"
                                      touched={touchedFields}
                                    />
                                  </div>

                                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                    <Input
                                      minLength={3}
                                      maxLength={30}
                                      errMsg={`City should have more than 3 characters and less than 30 characters!`}
                                      label="City"
                                      {...register("shipping_address.city", {
                                        required: "City is required",
                                      })}
                                      autoComplete="address-level2"
                                      errors={errors.shipping_address?.city}
                                      placeholder="City"
                                      touched={touchedFields}
                                    />
                                  </div>
                                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <CountrySelect
                                      {...register(
                                        "shipping_address.country_code",
                                        {
                                          required: "Country is required",
                                        }
                                      )}
                                      autoComplete="country"
                                      errors={
                                        errors.shipping_address?.country_code
                                      }
                                      touched={touchedFields}
                                    />
                                  </div>
                                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <Input
                                      minLength={4}
                                      maxLength={5}
                                      // regex={/^\\d{5}(-{1}\\d{4})?$/}
                                      errMsg={`Postal should have 4 to 5 digits!`}
                                      // errFor={`Postal Code`}
                                      label="ZIP / Postal"
                                      {...register(
                                        "shipping_address.postal_code",
                                        {
                                          required: "Postal code is required",
                                        }
                                      )}
                                      placeholder="Postal Code"
                                      autoComplete="postal-code"
                                      errors={
                                        errors.shipping_address?.postal_code
                                      }
                                      touched={touchedFields}
                                      errFor={`Postal Code`}
                                    />
                                  </div>

                                  {/* <div className="col-span-6 sm:col-span-3">
                                <Button
                                  // className="max-w-[200px] mt-6"
                                  className="bg-emerald-500 hover:bg-emerald-600 border border-emerald-500 transition-all rounded py-3 text-center text-sm font-serif font-medium text-white flex justify-center w-full"
                                  onClick={handleSubmit(setAddresses)}
                                >
                                  Continue to delivery
                                </Button>
                              </div> */}
                                </div>
                                <div className="grid grid-cols-6 gap-4 lg:gap-6 mt-10 mb-10 ">
                                  <div className="col-span-6 sm:col-span-3">
                                    <Link href="/">
                                      <a className="bg-indigo-50 border border-indigo-100 rounded py-3 text-center text-sm font-medium text-gray-700 hover:text-gray-800 hover:border-gray-300 transition-all flex justify-center font-serif w-full">
                                        <span className="text-xl mr-2">
                                          <IoReturnUpBackOutline />
                                        </span>
                                        Continue Shopping
                                      </a>
                                    </Link>
                                  </div>
                                  <div className="col-span-6 sm:col-span-3">
                                    <button
                                      className="  border  transition-all rounded py-3 text-center text-sm font-serif font-medium text-white flex justify-center w-full"
                                      style={{ background: "#301B28" }}
                                      onClick={handleSubmit(setAddresses)}

                                      // disabled={isEmpty || !stripe || isCheckoutSubmit}
                                    >
                                      Choose Your Delivery Option
                                      <span className="text-xl ml-2">
                                        <IoArrowForward />
                                      </span>
                                    </button>
                                  </div>
                                </div>
                                {/* <Label label="Shipping Cost" />
                            <ShippingPage /> */}
                                <div className="grid grid-cols-6 gap-6">
                                  {/* <div className="col-span-6 sm:col-span-3">
                        <InputShipping
                          handleShippingCost={handleShippingCost}
                          register={register}
                          value="FedEx"
                          time="Today"
                          cost={60}
                        />
                        <Error errorName={errors.shippingOption} />
                      </div> */}

                                  <div className="col-span-6 sm:col-span-3">
                                    {/* <InputShipping
                          handleShippingCost={handleShippingCost}
                          register={register}
                          value="UPS"
                          time="7 Days"
                          cost={20}
                        />
                        <Error errorName={errors.shippingOption} /> */}
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      ) : (
                        <>
                          {cart && cart?.shipping_address ? (
                            <>
                              {sectionLoader ? (
                                <SectionLoading
                                  loading={sectionLoader}
                                  height={"525px"}
                                />
                              ) : (
                                <div className="bg-gray-50 px-8 py-6 text-small-regular">
                                  <div className="form-group">
                                    <div className="flex justify-between">
                                      <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                                        01. Personal Details
                                      </h2>

                                      <button
                                        className="font-medium font-serif text-sm text-gray-500 pb-3 hover:text-red-900"
                                        onClick={setEdit}
                                      >
                                        Edit
                                      </button>
                                    </div>

                                    <div className="grid grid-cols-6 gap-6">
                                      <div className="col-span-6 sm:col-span-3">
                                        <Input
                                          // minLength={3}
                                          // maxLength={20}
                                          label="First name"
                                          // errMsg={`First Name should have more than 3 characters and less than 20 characters!`}
                                          {...register(
                                            "shipping_address.first_name",
                                            {
                                              required: "Firs name is required",
                                            }
                                          )}
                                          placeholder="firstName"
                                          autoComplete="given-name"
                                          errors={errors}
                                          touched={touchedFields}
                                          disabled={true}
                                        />
                                      </div>
                                      <div className="col-span-6 sm:col-span-3">
                                        <Input
                                          // minLength={1}
                                          // maxLength={20}
                                          // errMsg={`Last Name should have more than 1 characters and less than 20 characters!`}
                                          label="Last name"
                                          {...register(
                                            "shipping_address.last_name",
                                            {
                                              required: "Last name is required",
                                            }
                                          )}
                                          placeholder="lastName"
                                          autoComplete="family-name"
                                          errors={errors}
                                          touched={touchedFields}
                                          disabled={true}
                                        />
                                      </div>

                                      <div className="col-span-6 sm:col-span-3">
                                        <Input
                                          // minLength={3}
                                          // maxLength={10}
                                          // errMsg={`Email should have more than 2 characters and less than 100 characters!`}
                                          // errFor={`Email Address`}
                                          // regex={
                                          //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                                          // }
                                          label="Email"
                                          {...register("email", {
                                            required: "Email is required",
                                            pattern: emailRegex,
                                          })}
                                          autoComplete="email"
                                          placeholder="example@gmail.com"
                                          errors={errors}
                                          touched={touchedFields}
                                          disabled={true}
                                        />
                                      </div>
                                      <div className="col-span-6 sm:col-span-3">
                                        <Input
                                          // regex={
                                          //   /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/
                                          // }
                                          // errFor={`Phone Number`}
                                          // errMsg={`Phone Number should have more than 8 characters and less than 15 characters!`}
                                          label="Phone"
                                          {...register(
                                            "shipping_address.phone"
                                          )}
                                          autoComplete="tel"
                                          errors={errors}
                                          placeholder="Phone number"
                                          touched={touchedFields}
                                          disabled={true}
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="form-group mt-12">
                                    <div className="flex justify-between">
                                      <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                                        02. Shipping Details
                                      </h2>

                                      <button
                                        className="font-medium font-serif text-sm text-gray-500 pb-3 hover:text-red-900"
                                        onClick={setEdit}
                                      >
                                        Edit
                                      </button>
                                    </div>
                                    <div className="grid grid-cols-6 gap-6 mb-8">
                                      <div className="col-span-6">
                                        <Input
                                          // minLength={10}
                                          // maxLength={100}
                                          // errMsg={`Address should have more than 10 characters and less than 20 characters!`}
                                          label="Address"
                                          {...register(
                                            "shipping_address.address_1",
                                            {
                                              required: "Address is required",
                                            }
                                          )}
                                          autoComplete="address-line1"
                                          errors={errors}
                                          placeholder="Street address"
                                          touched={touchedFields}
                                          disabled={true}
                                        />
                                      </div>

                                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <Input
                                          // minLength={3}
                                          // maxLength={30}
                                          // errMsg={`City should have more than 3 characters and less than 30 characters!`}
                                          label="City"
                                          {...register(
                                            "shipping_address.city",
                                            {
                                              required: "City is required",
                                            }
                                          )}
                                          autoComplete="address-level2"
                                          errors={errors}
                                          placeholder="City"
                                          touched={touchedFields}
                                          disabled={true}
                                        />
                                      </div>
                                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <CountrySelect
                                          {...register(
                                            "shipping_address.country_code",
                                            {
                                              required: "Country is required",
                                            }
                                          )}
                                          autoComplete="country"
                                          // errors={
                                          //   errors.shipping_address
                                          //     ?.country_code
                                          // }
                                          touched={touchedFields}
                                          disabled={true}
                                        />
                                      </div>
                                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <Input
                                          // minLength={3}
                                          // maxLength={8}
                                          // regex={/^\\d{5}(-{1}\\d{4})?$/}
                                          // errFor={`Postal Code`}
                                          // errMsg={`Postal should have more than 3 characters and less than 8 characters!`}

                                          label="ZIP / Postal"
                                          {...register(
                                            "shipping_address.postal_code",
                                            {
                                              required:
                                                "Postal code is required",
                                            }
                                          )}
                                          placeholder="Postal code"
                                          autoComplete="postal-code"
                                          errors={errors}
                                          touched={touchedFields}
                                          disabled={true}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              <div className="bg-gray-50 px-8 text-small-regular">
                                <Label label="Shipping Cost" />
                                <ShippingPage
                                  register={register}
                                  setDisplayPaymentMethod={
                                    setDisplayPaymentMethod
                                  }
                                />
                              </div>

                              {displayPaymentMethod && (
                                <div className="form-group mt-2">
                                  <div className="bg-gray-50 px-8 py-6 text-small-regular">
                                    <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                                      03. Payment Details
                                    </h2>
                                    {/* {
                                       modalOpen && (
                                   
                                        <PaymentModal
                                          modalOpen={modalOpen}
                                          setModalOpen={setModalOpen}
                                          msg={`You will be redirected to CCAvenue site to complete the order`}
                                        />
                                      )
                                    } */}
                                    <div className="grid grid-cols-6 gap-6">
                                      <div className="col-span-6 sm:col-span-3">
                                        <InputPayment
                                          // setShowCard={setShowCard}
                                          paymentMethod={paymentMethod}
                                          setPaymentMethod={setPaymentMethod}
                                          // setModalOpen={setModalOpen}
                                          register={register}
                                          name="Cash On Delivery"
                                          value="COD"
                                          Icon={IoWalletSharp}
                                        />
                                      </div>
                                      <div className="col-span-6 sm:col-span-3">
                                        <InputPayment
                                          // setShowCard={setShowCard}
                                          paymentMethod={paymentMethod}
                                          setPaymentMethod={setPaymentMethod}
                                          // setModalOpen={setModalOpen}
                                          register={register}
                                          name="Debit or Credit Card"
                                          value="Card"
                                          Icon={ImCreditCard}
                                        />
                                      </div>
                                    </div>
                                    {/* <Payment /> */}
                                  </div>
                                </div>
                              )}
                            </>
                          ) : (
                            ""
                          )}
                        </>
                      )}
                      {/* <div className="bg-gray-50 px-8 text-small-regular">
                        <Label label="Shipping Cost" />
                        <ShippingPage register={register} />
                      </div> */}

                      {!isEdit && displayPaymentMethod && (
                        <div className="bg-gray-50 px-8 py-6 text-small-regular">
                          <div className="grid grid-cols-6 gap-4 lg:gap-6 mt-2">
                            <div className="col-span-6 sm:col-span-3">
                              <Link href="/">
                                <a className="bg-indigo-50 border border-indigo-100 rounded py-3 text-center text-sm font-medium text-gray-700 hover:text-gray-800 hover:border-gray-300 transition-all flex justify-center font-serif w-full">
                                  <span className="text-xl mr-2">
                                    <IoReturnUpBackOutline />
                                  </span>
                                  Continue Shopping
                                </a>
                              </Link>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              {/* <button
                                type="submit"
                                // disabled={isEmpty || !stripe || isCheckoutSubmit} 
                                className="bg-emerald-500 hover:bg-emerald-600 border border-emerald-500 transition-all rounded py-3 text-center text-sm font-serif font-medium text-white flex justify-center w-full"
                              >
                                Confirm Order
                                <span className="text-xl ml-2">
                                  <IoArrowForward />
                                </span>
                              </button> */}
                              <PaymentButton
                                paymentMethod={paymentMethod}
                                paymentSession={cart?.payment_session}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </ConnectForm>
              </div>
            </div>

            <div className="md:w-full lg:w-2/5 lg:ml-10 xl:ml-14 md:ml-6 flex flex-col h-full md:sticky lg:sticky top-28 md:order-2 lg:order-2">
              <div className="border p-5 lg:px-8 lg:py-8 rounded-lg bg-white order-1 sm:order-2">
                <h2 className="font-semibold font-serif text-lg pb-4">
                  Order Summary
                </h2>

                <div className="overflow-y-scroll flex-grow scrollbar-hide w-full max-h-64 bg-gray-50 block">
                  {items?.map((item: any, i: any) => (
                    <CartItem key={i + 1} item={item} cart={cart} />
                  ))}
                  {!cart?.items && (
                    <div className="text-center py-10">
                      <span className="flex justify-center my-auto text-gray-500 font-semibold text-4xl">
                        <IoBagHandle />
                      </span>
                      <h2 className="font-medium font-serif text-sm pt-2 text-gray-600">
                        No Item Added Yet!
                      </h2>
                    </div>
                  )}
                </div>

                {/* <div className="flex items-center mt-4 py-4 lg:py-4 text-sm w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0"> */}
                {/* <form className="w-full">
                    {couponInfo.couponCode ? (
                      <span className="bg-emerald-50 px-4 py-3 leading-tight w-full rounded-md flex justify-between">
                        {" "}
                        <p className="text-emerald-600">Coupon Applied </p>{" "}
                        <span className="text-red-500 text-right">
                          {couponInfo.couponCode}
                        </span>
                      </span>
                    ) : (
                      <div className="flex flex-col sm:flex-row items-start justify-end">
                        <input
                          ref={couponRef}
                          type="text"
                          placeholder="Input your coupon code"
                          className="form-input py-2 px-3 md:px-4 w-full appearance-none transition ease-in-out border text-input text-sm rounded-md h-12 duration-200 bg-white border-gray-200 focus:ring-0 focus:outline-none focus:border-emerald-500 placeholder-gray-500 placeholder-opacity-75"
                        />
                        <button
                          onClick={handleCouponCode}
                          className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border border-gray-200 rounded-md placeholder-white focus-visible:outline-none focus:outline-none px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 mt-3 sm:mt-0 sm:ml-3 md:mt-0 md:ml-3 lg:mt-0 lg:ml-3 hover:text-white hover:bg-emerald-500 h-12 text-sm lg:text-base w-full sm:w-auto"
                        >
                          Apply
                        </button>
                      </div>
                    )}
                  </form> */}
                {/* </div> */}
                <CartTotalSection />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CheckOutPage; /* (() => Promise.resolve(Checkout), { ssr: false }); */
