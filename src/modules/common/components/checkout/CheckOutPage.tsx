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
import ShippingAddress from "@modules/checkout/components/shipping-address";

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
  const [countryValue, setCountryValue] = useState<any>("sa");

  console.log("setCountryValue", countryValue);

  const [value, setValue] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal: "",
  });

  const [err, setErr] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal: "",
  });

  const [firstName, setFirstName] = useState<any>({
    name: "shipping_address.first_name",
    value: "",
  });
  const [lastName, setLastName] = useState<any>({
    name: "shipping_address.last_name",
    value: "",
  });
  const [email, setEmail] = useState<any>({
    name: "email",
    value: "",
  });
  const [phone, setPhone] = useState<any>({
    name: "shipping_address.phone",
    value: "",
  });
  const [address, setAddress] = useState<any>({
    name: "shipping_address.address_1",
    value: "",
  });
  const [city, setCity] = useState<any>({
    name: "shipping_address.city",
    value: "",
  });
  const [country, setCountry] = useState<any>({
    name: "shipping_address.country_code",
    value: "",
  });
  const [postal, setPostal] = useState<any>({
    name: "shipping_address.postal_code",
    value: "",
  });

  const [countryCode, setCountryCode] = useState<any>("");

  const [validationSuccess, setValidationSuccess] = useState<any>(true);

  // const [shippingName, setShippingName] = useState<any>()

  const [firstNameMsg, setFirstNameMsg] = useState<any>("");
  const [lastNameMsg, setLastNameMsg] = useState<any>("");
  const [emailMsg, setEmailMsg] = useState<any>("");
  const [phoneMsg, setPhoneMsg] = useState<any>("");
  const [addressMsg, setAddressMsg] = useState<any>("");
  const [cityMsg, setCityMsg] = useState<any>("");
  const [countryMsg, setCountryMsg] = useState<any>("");
  const [postalMsg, setPostalMsg] = useState<any>("");

  const [firstNameErr, setFirstNameErr] = useState<any>(true);
  const [lastNameErr, setLastNameErr] = useState<any>(true);
  const [emailErr, setEmailErr] = useState<any>(true);
  const [phoneErr, setPhoneErr] = useState<any>(true);
  const [addressErr, setAddressErr] = useState<any>(true);
  const [cityErr, setCityErr] = useState<any>(true);
  const [countryErr, setCountryErr] = useState<any>(true);
  const [postalErr, setPostalErr] = useState<any>(true);

  const [firstNameMsgD, setFirstNameMsgD] = useState<any>("");
  const [lastNameMsgD, setLastNameMsgD] = useState<any>("");
  const [emailMsgD, setEmailMsgD] = useState<any>("");
  const [phoneMsgD, setPhoneMsgD] = useState<any>("");
  const [addressMsgD, setAddressMsgD] = useState<any>("");
  const [cityMsgD, setCityMsgD] = useState<any>("");
  const [countryMsgD, setCountryMsgD] = useState<any>("");
  const [postalMsgD, setPostalMsgD] = useState<any>("");

  console.log("isEdit", isEdit);
  console.log("cartCheck", cart);

  useEffect(() => {
    console.log("paymentMethod", paymentMethod);
    if (paymentMethod) {
      setPaymentMethodGloble(paymentMethod);
    }
  }, [paymentMethod]);

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

  // useEffect(() => {
  //   setValue({
  //     firstName: firstName,
  //     lastName: lastName,
  //     email: email,
  //     phone: phone,
  //     address: address,
  //     city: city,
  //     postal: postal,
  //   })
  // }, [firstName, lastName, email, phone, address, city, postal])

  // const handleValueChange = (e: any) => {
  //   let inputDetails: any

  //   inputDetails = { name: e.target.name, value: e.target.value }

  //   console.log("handleName", shippingName)
  //   console.log("firstName", firstName)
  //   console.log("lastName", lastName)

  //   // setValue({
  //   //   firstName: firstName,
  //   //   lastName: lastName,
  //   //   email: email,
  //   //   phone: phone,
  //   //   address: address,
  //   //   city: city,
  //   //   // country: country,
  //   //   postal: postal,
  //   // })
  //   console.log("finalValue", value)

  //   // let currentValue: any = e.target.value
  //   // let eMsg: any

  //   // switch (name) {
  //   //   case "shipping_address.first_name": {
  //   //     console.log("eValue", e.target.value)

  //   //     // validation
  //   //     if (currentValue.trim()) {
  //   //       if (currentValue.length < 3 || currentValue.length > 15) {
  //   //         eMsg =
  //   //           "First Name should have more than 3 characters and less than 20 characters!"
  //   //       }
  //   //     } else {
  //   //       eMsg = "First Name is required"
  //   //     }

  //   //     // setValue(ndasd)
  //   //     setValue({
  //   //       firstName: currentValue,
  //   //       lastName: value.lastName,
  //   //     })
  //   //     // setError()
  //   //     setErr({
  //   //       firstName: eMsg,
  //   //       lastName: err.lastName,
  //   //     })
  //   //   }
  //   // }
  //   // switch (name) {
  //   //   case "shipping_address.first_name": {
  //   //     // validation
  //   //     // if (value?.firstName.trim()) {
  //   //     //   if (value.firstName.length < 3 || value.firstName.length > 20) {
  //   //     //     eMsg =
  //   //     //       "First Name should have more than 3 characters and less than 20 characters!"
  //   //     //   }
  //   //     // } else {
  //   //     //   eMsg = "First Name is required"
  //   //     // }

  //   //     // setValue(ndasd)
  //   //     setValue({
  //   //       firstName: firstName,
  //   //     })
  //   //     // setError()
  //   //     setErr({
  //   //       firstName: eMsg,
  //   //       // lastName: err.lastName,
  //   //     })
  //   //   }
  //   //   case "shipping_address.last_name": {
  //   //     // validation
  //   //     if (value?.lastName.trim()) {
  //   //       if (value.firstName.length < 1 || value.firstName.length > 20) {
  //   //         eMsg = "Last Name should have atleast 1 characters!"
  //   //       }
  //   //     } else {
  //   //       eMsg = "Last Name is required"
  //   //     }

  //   //     // setValue(ndasd)
  //   //     setValue({
  //   //       lastName: lastName,
  //   //       // lastName: value.lastName,
  //   //     })
  //   //     // setError()
  //   //     setErr({
  //   //       lastName: eMsg,
  //   //       // lastName: err.lastName,
  //   //     })
  //   //   }

  //   //   case "shipping_address.address_1": {
  //   //     // validation
  //   //     if (value?.address.trim()) {
  //   //       if (value.address.length < 10 || value.address.length > 100) {
  //   //         eMsg =
  //   //           "Address should have more than 10 characters and less than 100 characters!"
  //   //       }
  //   //     } else {
  //   //       eMsg = "Address is required"
  //   //     }

  //   //     // setValue(ndasd)
  //   //     setValue({
  //   //       address: address,
  //   //       // lastName: value.lastName,
  //   //     })
  //   //     // setError()
  //   //     setErr({
  //   //       address: eMsg,
  //   //       // lastName: err.lastName,
  //   //     })
  //   //   }

  //   //   case "shipping_address.city": {
  //   //     // validation
  //   //     if (value?.city.trim()) {
  //   //       if (value.city.length < 3 || value.city.length > 30) {
  //   //         eMsg =
  //   //           "city should have more than 3 characters and less than 30 characters!"
  //   //       }
  //   //     } else {
  //   //       eMsg = "city is required"
  //   //     }

  //   //     // setValue(ndasd)
  //   //     setValue({
  //   //       city: city,
  //   //       // lastName: value.lastName,
  //   //     })
  //   //     // setError()
  //   //     setErr({
  //   //       city: eMsg,
  //   //       // lastName: err.lastName,
  //   //     })
  //   //   }

  //   //   case "shipping_address.postal_code": {
  //   //     if (value?.postal.trim()) {
  //   //       if (value.postal.length < 4 || value.postal.length > 5) {
  //   //         eMsg =
  //   //           "postal should have more than 4 characters and less than 5 characters!"
  //   //       }
  //   //     } else {
  //   //       eMsg = "postal is required"
  //   //     }

  //   //     // setValue(ndasd)
  //   //     setValue({
  //   //       postal: postal,
  //   //       // lastName: value.lastName,
  //   //     })
  //   //     // setError()
  //   //     setErr({
  //   //       postal: eMsg,
  //   //       // lastName: err.lastName,
  //   //     })
  //   //   }

  //   //   default:
  //   //     setErr({
  //   //       firstName: "First Name is required",
  //   //       lastName: "Last Name is required",
  //   //       address: "address is required",
  //   //       city: "city is required",
  //   //       postal: "postal is required",
  //   //     })
  //   // }
  // }

  // const onSubmit = () => {
  //   setFirstNameMsg("")
  //   setLastNameMsg("")
  //   setEmailMsg("")
  //   setPhoneMsg("")
  //   setAddressMsg("")
  //   setCityMsg("")
  //   setPostalMsg("")
  //   console.log("checkName", firstName.name)
  //   let checkFirstName: any = validate(firstName?.name, firstName?.value)
  //   console.log("firstNameError 1", err)
  //   let checkLastName: any = validate(lastName?.name, lastName?.value)
  //   let checkEmail: any = validate(email?.name, email?.value)
  //   let checkPhone: any = validate(phone?.name, phone?.value)
  //   console.log("firstNameError 2", err)
  //   let checkAddress: any = validate(address?.name, address?.value)
  //   let checkCity: any = validate(city?.name, city?.value)
  //   let checkPostal: any = validate(postal?.name, postal?.value)

  //   console.log("checkFN", checkFirstName)
  //   console.log("checkLN", checkLastName)
  //   console.log("checkEM", checkEmail)
  //   console.log("checkPH", checkPhone)
  //   console.log("checkAD", checkAddress)
  //   console.log("checkCI", checkCity)
  //   console.log("checkPO", checkPostal)

  //   if (
  //     checkFirstName &&
  //     checkLastName &&
  //     checkEmail &&
  //     checkPhone &&
  //     checkAddress &&
  //     checkCity &&
  //     checkPostal
  //   ) {
  //     console.log("updation SUCCESSFULL")
  //     handleSubmit(setAddresses)
  //   } else {
  //     console.log("updation FAILED")
  //   }
  // }

  // const validate = (name: any, value: any) => {
  //   console.log("valueCheck", name)
  //   console.log("vCheck", value)
  //   // console.log("errrorMsg", err)
  //   let eMsg: any = ""
  //   let error: any = false

  //   switch (name) {
  //     case "shipping_address.first_name": {
  //       // let eMsg:any
  //       // let error:any = false
  //       // validation
  //       console.log("valueCheck--->", value)
  //       if (value.trim()) {
  //         if (value.length < 3 || value.length > 15) {
  //           error = true
  //           setFirstNameMsgD(
  //             "First Name should have more than 3 characters and less than 15 characters!"
  //           )
  //           console.log('firstNameMsgD',firstNameMsgD)
  //         }
  //         if (!/^[a-zA-Z]+$/.test(value.trim())) {
  //           error = true
  //           setFirstNameMsgD("Improper standard of First Name")
  //         }
  //       } else {
  //         error = true
  //         setFirstNameMsgD("First Name is required")
  //       }
  //       console.log("checkError fn", err, eMsg)

  //       // setErr({ ...err, firstName: /* eMsg */ firstNameMsg })

  //       return !error
  //     }

  //     case "shipping_address.last_name": {
  //       // let eMsg:any
  //       // let error:any = false
  //       // validation
  //       if (value.trim()) {
  //         if (value.length < 1 || value.length > 20) {
  //           error = true
  //           setLastNameMsgD("Last Name should have atleast 1 character!")
  //         }
  //         if (!/^[a-zA-Z]+$/.test(value.trim())) {
  //           error = true
  //           setLastNameMsgD("Improper standard of Last Name")
  //         }
  //       } else {
  //         error = true
  //         setLastNameMsgD("Last Name is required")
  //       }
  //       console.log("checkError ln", err, eMsg)
  //       // setErr({ ...err, lastName: /* eMsg */ lastNameMsg })

  //       return !error
  //     }

  //     case "email": {
  //       // let eMsg:any
  //       // let error:any = false
  //       // validation
  //       if (value.trim()) {
  //         if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
  //           error = true
  //           setEmailMsgD("Improper standard of email")
  //         }
  //       } else {
  //         error = true
  //         setEmailMsgD("email is required")
  //       }

  //       console.log("checkError ln", err, eMsg)
  //       // setErr({ ...err, email: /* eMsg */ emailMsg })

  //       return !error
  //     }

  //     case "shipping_address.phone": {
  //       // let eMsg:any
  //       // let error:any = false
  //       // validation
  //       if (value.trim()) {
  //         if (
  //           !/^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/.test(
  //             value
  //           )
  //         ) {
  //           error = true
  //           setPhoneMsgD("Improper standard of Phone Number")
  //         }
  //       } else {
  //         error = true
  //         setPhoneMsgD("Phone Number is required")
  //       }
  //       console.log("checkError ln", err)
  //       // setErr({ ...err, phone: /* eMsg */ phoneMsg })

  //       return !error
  //     }

  //     case "shipping_address.address_1": {
  //       // let eMsg:any
  //       // let error:any = false
  //       // validation
  //       if (value.trim()) {
  //         if (value.length < 3 || value.length > 100) {
  //           error = true

  //           setAddressMsgD(
  //             "Address should have more than 10 characters and less than 100 characters!"
  //           )
  //         }
  //       } else {
  //         error = true
  //         setAddressMsgD("Address is required")
  //       }
  //       console.log("checkError add", err)
  //       // setErr({ ...err, address: /* eMsg */ addressMsg })
  //       return !error
  //     }
  //     case "shipping_address.city": {
  //       // let eMsg:any
  //       // let error:any = false
  //       // validation
  //       if (value.trim()) {
  //         if (value.length < 3 || value.length > 30) {
  //           error = true

  //           setCityMsgD(
  //             "city should have more than 3 characters and less than 30 characters!"
  //           )
  //         }
  //       } else {
  //         error = true
  //         setCityMsgD("City is required")
  //       }
  //       console.log("checkError ci", err)
  //       // setErr({ ...err, city: /* eMsg */ cityMsg })
  //       return !error
  //     }
  //     case "shipping_address.postal_code": {
  //       // let eMsg:any
  //       // let error:any = false
  //       // validation
  //       if (value.trim()) {
  //         if (value.length < 4 || value.length > 5) {
  //           error = true

  //           setPostalMsgD(
  //             "postal should have more than 4 characters and less than 5 characters!"
  //           )
  //         } else if (!/^[0-9]+$/.test(value)) {
  //           error = true
  //           setPostalMsgD("Improper standard of Postal Code")
  //         }
  //       } else {
  //         error = true
  //         setPostalMsgD("Postal Code is required")
  //       }
  //       console.log("checkError po", err)
  //       // setErr({ ...err, postal: /* eMsg */ postalMsg })
  //       return !error
  //     }
  //   }
  // }

  const handleValueChange = (e: any) => {
    let inputDetails: any;

    inputDetails = { name: e.target.name, value: e.target.value };
    console.log("inputDetails-->", inputDetails);
    let error: any = false;

    // console.log("valu-->", value)
    console.log("inputDetails.value", inputDetails.value);
    console.log("validationSuccess", validationSuccess);

    switch (inputDetails.name) {
      case "shipping_address.first_name": {
        // let eMsg:any
        // validation
        setFirstName({
          name: inputDetails.name,
          value: inputDetails.value,
        });

        console.log("valueCheck--->", inputDetails.value);
        if (inputDetails.value.trim()) {
          setFirstNameMsgD("");
          setFirstNameMsg("");
          setFirstNameErr(false);
          console.log("errs fn", firstNameErr);
          if (inputDetails.value.length < 3 || inputDetails.value.length > 15) {
            // error = true
            setFirstNameErr(true);
            setFirstNameMsgD(
              "First Name should have more than 3 characters and less than 15 characters!"
            );
            console.log("firstNameMsgD", firstNameMsgD);
          }
          if (!/^[a-zA-Z]+$/.test(inputDetails.value.trim())) {
            setFirstNameErr(true);
            setFirstNameMsgD("Improper standard of First Name");
          }
        } else {
          setFirstNameErr(true);
          setFirstNameMsgD("First Name is required");
        }
        // console.log("checkError fn", err, eMsg)

        // setErr({ ...err, firstName: /* eMsg */ firstNameMsg })
        // let temp: any = validationSuccess && !error
        // setValidationSuccess(temp)
        break;
      }

      // {!errror? setValidation(true) : "" }

      case "shipping_address.last_name": {
        // let eMsg:any
        // let error:any = false
        // validation

        setLastName({
          name: inputDetails.name,
          value: inputDetails.value,
        });

        if (inputDetails.value.trim()) {
          setLastNameMsgD("");
          setLastNameMsg("");
          setLastNameErr(false);
          console.log("errs ln", lastNameErr);
          if (inputDetails.value.length < 1 || inputDetails.value.length > 20) {
            setLastNameErr(true);
            setLastNameMsgD("Last Name should have atleast 1 character!");
          }
          if (!/^[a-zA-Z]+$/.test(inputDetails.value.trim())) {
            setLastNameErr(true);
            setLastNameMsgD("Improper standard of Last Name");
          }
        } else {
          setLastNameErr(true);
          setLastNameMsgD("Last Name is required");
        }

        // console.log("checkError ln", err, eMsg)
        // setErr({ ...err, lastName: /* eMsg */ lastNameMsg })
        // let temp: any = validationSuccess && !error
        // setValidationSuccess(temp)
        break;
      }

      case "email": {
        // let eMsg:any
        // let error:any = false
        // validation
        setEmail({
          name: inputDetails.name,
          value: inputDetails.value,
        });
        console.log("mailCheck", inputDetails.value);
        if (inputDetails.value.trim()) {
          setEmailMsgD("");
          setEmailMsg("");
          setEmailErr(false);
          console.log("errs email", emailErr);
          if (
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
              inputDetails.value
            )
          ) {
            setEmailErr(true);
            setEmailMsgD("Improper standard of email");
          }
        } else {
          setEmailErr(true);
          setEmailMsgD("email is required");
        }

        // console.log("checkError ln", err, eMsg)
        // setErr({ ...err, email: /* eMsg */ emailMsg })
        // let temp: any = validationSuccess && !error
        // setValidationSuccess(temp)
        break;
      }

      case "shipping_address.phone": {
        // let eMsg:any
        // let error:any = false
        // validation
        setPhone({
          name: inputDetails.name,
          value: inputDetails.value,
        });

        if (inputDetails.value.trim()) {
          setPhoneMsgD("");
          setPhoneMsg("");
          setPhoneErr(false);
          console.log("errs phone", phoneErr);
          if (
            !/^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/.test(
              inputDetails.value
            )
          ) {
            setPhoneErr(true);
            setPhoneMsgD("Improper standard of Phone Number");
          }
        } else {
          setPhoneErr(true);
          setPhoneMsgD("Phone Number is required");
        }
        // console.log("checkError ln", err)
        // setErr({ ...err, phone: /* eMsg */ phoneMsg })
        // let temp: any = validationSuccess && !error
        // setValidationSuccess(temp)
        break;
      }

      case "shipping_address.address_1": {
        // let eMsg:any
        // let error:any = false
        // validation
        setAddress({
          name: inputDetails.name,
          value: inputDetails.value,
        });
        if (inputDetails.value.trim()) {
          setAddressMsgD("");
          setAddressMsg("");
          setAddressErr(false);
          console.log("errs address", addressErr);
          if (
            inputDetails.value.length < 3 ||
            inputDetails.value.length > 100
          ) {
            setAddressErr(true);

            setAddressMsgD(
              "Address should have more than 10 characters and less than 100 characters!"
            );
          }
        } else {
          setAddressErr(true);
          setAddressMsgD("Address is required");
        }
        // console.log("checkError add", err)
        // setErr({ ...err, address: /* eMsg */ addressMsg })
        // let temp: any = validationSuccess && !error
        // setValidationSuccess(temp)
        break;
      }
      case "shipping_address.city": {
        // let eMsg:any
        // let error:any = false
        // validation
        setCity({
          name: inputDetails.name,
          value: inputDetails.value,
        });
        console.log("city", inputDetails.value);
        if (inputDetails.value.trim()) {
          setCityMsgD("");
          setCityMsg("");
          setCityErr(false);
          console.log("errs city", cityErr);
          if (inputDetails.value.length < 3 || inputDetails.value.length > 30) {
            setCityErr(true);
            setCityMsgD(
              "city should have more than 3 characters and less than 30 characters!"
            );
          }
        } else {
          setCityErr(true);
          setCityMsgD("City is required");
        }
        // console.log("checkError ci", err)
        // setErr({ ...err, city: /* eMsg */ cityMsg })
        // let temp: any = validationSuccess && !error
        // setValidationSuccess(temp)
        break;
      }

      // case "shipping_address.country_code": {
      //   // let eMsg:any
      //   // let error:any = false
      //   // validation
      //   setCountry({
      //     name: inputDetails.name,
      //     // value: inputDetails.value,
      //     value: inputDetails,
      //   })
      //   console.log("countryyyy", inputDetails.value)
      //   if (inputDetails /* .value.trim() */) {
      //     setCountryMsgD("")
      //     setCountryMsg("")
      //     setCountryErr(false)
      //     console.log("errs city", cityErr)
      //     if (inputDetails.value.length === 0) {
      //       console.log("country is empty")
      //       setCountryErr(true)
      //       setCountryMsgD("Country is required")
      //     }
      //   }
      //   // console.log("checkError ci", err)
      //   // setErr({ ...err, city: /* eMsg */ cityMsg })
      //   // let temp: any = validationSuccess && !error
      //   // setValidationSuccess(temp)
      //   break
      // }

      case "shipping_address.postal_code": {
        // let eMsg:any
        // let error:any = false
        // validation
        setPostal({
          name: inputDetails.name,
          value: inputDetails.value,
        });
        if (inputDetails.value.trim()) {
          console.log("postal-->", inputDetails.value.length);
          setPostalMsgD("");
          setPostalMsg("");
          setPostalErr(false);
          console.log("errs postal", postalErr);
          if (inputDetails.value.length < 4 || inputDetails.value.length > 5) {
            console.log("postal valid");
            setPostalErr(true);
            setPostalMsgD("postal should have 4 to 5 Number!");
          } else if (!/^[0-9]+$/.test(inputDetails.value)) {
            setPostalErr(true);
            setPostalMsgD("Improper standard of Postal Code");
          }
        } else {
          setPostalErr(true);
          setPostalMsgD("Postal Code is required");
        }
        // console.log("checkError po", err)
        // setErr({ ...err, postal: /* eMsg */ postalMsg })
        // let temp: any = validationSuccess && !error
        // setValidationSuccess(temp)
        break;
      }
      // default :
      //   setFirstNameMsgD("First Name is required")
      //   setLastNameMsgD("Last Name is required")
      //   setEmailMsgD("email is required")
      //   setPhoneMsgD("Phone Number is required")
      //   setAddressMsgD("Address is required")
      //   setCityMsgD("City is required")
      //   setPostalMsgD("Postal Code is required")
    }

    // let checkFirstName: any = validate(firstName?.name, firstName?.value)
    // let checkLastName: any = validate(lastName?.name, lastName?.value)
    // let checkEmail: any = validate(email?.name, email?.value)
    // let checkPhone: any = validate(phone?.name, phone?.value)
    // let checkAddress: any = validate(address?.name, address?.value)
    // let checkCity: any = validate(city?.name, city?.value)
    // let checkPostal: any = validate(postal?.name, postal?.value)
  };

  const showError = () => {
    console.log("fnCheck", firstName.value);
    if (firstName.value.length === 0) {
      setFirstNameErr(true);
      setFirstNameMsg("First Name is required");
    } else setFirstNameMsg(firstNameMsgD);

    if (lastName.value.length === 0) {
      setLastNameErr(true);
      setLastNameMsg("last Name is required");
    } else setLastNameMsg(lastNameMsgD);

    if (address.value.length === 0) {
      setAddressErr(true);
      setAddressMsg("address is required");
    } else setAddressMsg(addressMsgD);

    if (city.value.length === 0) {
      setCityErr(true);
      setCityMsg("city is required");
    } else setCityMsg(cityMsgD);

    if (email.value.length === 0) {
      setEmailErr(true);
      setEmailMsg("email is required");
    } else setEmailMsg(emailMsgD);

    if (phone.value.length === 0) {
      setPhoneErr(true);
      setPhoneMsg("phone is required");
    } else setPhoneMsg(phoneMsgD);

    if (postal.value.length === 0) {
      setPostalErr(true);
      setPostalMsg("postal is required");
    } else setPostalMsg(postalMsgD);

    // if (country.value.length === 0) {
    //   setCountryErr(true)
    //   setCountryMsg("Country is required")
    // } else setCountryMsg(countryMsgD)

    // console.log("country.value", country.value)
  };
  console.log("validation-->", validationSuccess);

  console.log("countryCode-->", countryCode);

  return (
    <>
      <Layout title="Checkout" description="this is checkout page">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="py-10 lg:py-12 px-0 2xl:max-w-screen-2xl w-full xl:max-w-screen-xl flex flex-col md:flex-row lg:flex-row">
            <div className="md:w-full lg:w-3/5 flex h-full flex-col order-2 sm:order-1 lg:order-1">
              <div className="mt-5 md:mt-0 md:col-span-2">
                <ConnectForm<CheckoutFormValues>>
                  {({
                    register,
                    formState: { errors, touchedFields },
                  }: any) => (
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
                                      // name={name}
                                      placeholder="First Name"
                                      autoComplete="given-name"
                                      errors={errors}
                                      touched={touchedFields}
                                      // handleValueChange={(e: any) =>
                                      //   handleValueChange(e)
                                      // }
                                      inputValue={firstName}
                                      setInputValue={setFirstName}
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
                                      inputValue={lastName}
                                      setInputValue={setLastName}
                                    />
                                  </div> */}
                                  <div className="col-span-6 sm:col-span-3">
                                    <Input
                                      minLength={3}
                                      maxLength={20}
                                      // errMsg={`First Name should have more than 3 characters and less than 20 characters!`}
                                      // errMsg={err?.firstName}
                                      errMsg={firstNameMsg}
                                      label="First Name"
                                      {...register(
                                        "shipping_address.first_name",
                                        {
                                          required: "First name is required",
                                        }
                                      )}
                                      placeholder="First Name"
                                      autoComplete="given-name"
                                      // errors={
                                      //   errors.shipping_address?.first_name
                                      // }

                                      touched={touchedFields}
                                      handleValueChange={(e: any) =>
                                        handleValueChange(e)
                                      }
                                      // inputValue={firstName}
                                      // setInputValue={setFirstName}
                                    />
                                  </div>
                                  <div className="col-span-6 sm:col-span-3">
                                    <Input
                                      minLength={1}
                                      maxLength={20}
                                      label="Last Name"
                                      // errMsg={`Last Name should have atleast 1 characters!`}
                                      errMsg={lastNameMsg}
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
                                      handleValueChange={(e: any) =>
                                        handleValueChange(e)
                                      }
                                      // inputValue={lastName}
                                      // setInputValue={setLastName}
                                    />
                                  </div>

                                  <div className="col-span-6 sm:col-span-3">
                                    <Input
                                      minLength={3}
                                      // maxLength={10}
                                      // errMsg={`Email should have more than 2 characters and less than 100 characters!`}

                                      // errFor={`Email Address`}
                                      errMsg={emailMsg}
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
                                      errors={errors.email}
                                      touched={touchedFields}
                                      handleValueChange={(e: any) =>
                                        handleValueChange(e)
                                      }
                                      // inputValue={email}
                                      // setInputValue={setEmail}
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
                                      errMsg={phoneMsg}
                                      // regex={
                                      //   /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/
                                      // }
                                      label="Phone"
                                      {...register("shipping_address.phone", {
                                        required: "Phone is required",
                                      })}
                                      placeholder="Phone Number"
                                      autoComplete="phone-number"
                                      errors={errors.shipping_address?.phone}
                                      touched={touchedFields}
                                      handleValueChange={(e: any) =>
                                        handleValueChange(e)
                                      }
                                      // inputValue={phone}
                                      // setInputValue={setPhone}
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
                                      // errMsg={`Address should have more than 10 characters and less than 100 characters!`}
                                      errMsg={addressMsg}
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
                                      handleValueChange={(e: any) =>
                                        handleValueChange(e)
                                      }
                                      // inputValue={address}
                                      // setInputValue={setAddress}
                                    />
                                  </div>

                                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                    <Input
                                      minLength={3}
                                      maxLength={30}
                                      // errMsg={`City should have more than 3 characters and less than 30 characters!`}
                                      errMsg={cityMsg}
                                      label="City"
                                      {...register("shipping_address.city", {
                                        required: "City is required",
                                      })}
                                      autoComplete="address-level2"
                                      errors={errors.shipping_address?.city}
                                      placeholder="City"
                                      touched={touchedFields}
                                      handleValueChange={(e: any) =>
                                        handleValueChange(e)
                                      }
                                      // inputValue={city}
                                      // setInputValue={setCity}
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
                                      errMsg={countryMsg}
                                      autoComplete="country"
                                      errors={
                                        errors.shipping_address?.country_code
                                      }
                                      touched={touchedFields}
                                      handleValueChange={(e: any) =>
                                        handleValueChange(e)
                                      }
                                      setCountryValue={setCountryValue}
                                    />
                                  </div>
                                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <Input
                                      minLength={4}
                                      maxLength={5}
                                      // regex={/^\\d{5}(-{1}\\d{4})?$/}
                                      // errMsg={`Postal should have 4 to 5 digits!`}
                                      errMsg={postalMsg}
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
                                      handleValueChange={(e: any) =>
                                        handleValueChange(e)
                                      }
                                      // inputValue={postal}
                                      // setInputValue={setPostal}
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
                                    {!firstNameErr &&
                                    !lastNameErr &&
                                    !emailErr &&
                                    !phoneErr &&
                                    !addressErr &&
                                    !cityErr &&
                                    !postalErr /* &&
                                    !countryErr */ ? (
                                      <button
                                        className="  border  transition-all rounded py-3 text-center text-sm font-serif font-medium text-white flex justify-center w-full"
                                        style={{ background: "#301B28" }}
                                        onClick={() => {
                                          let shippingAdd = {
                                            billing_address: {
                                              address_1: "",
                                              address_2: "",
                                              city: "",
                                              company: "",
                                              country_code: "",
                                              first_name: "",
                                              last_name: "",
                                              phone: "",
                                              postal_code: "",
                                              province: "",
                                            },
                                            email: email.value,
                                            shipping_address: {
                                              address_1: address.value,
                                              address_2: "",
                                              city: city.value,
                                              company: "",
                                              // country_code: country.value,
                                              country_code: countryValue,
                                              first_name: firstName.value,
                                              last_name: lastName.value,
                                              phone: phone.value,
                                              postal_code: postal.value,
                                              province: "",
                                            },
                                          };
                                          setAddresses(shippingAdd);
                                        }}
                                        // disabled={isEmpty || !stripe || isCheckoutSubmit}
                                      >
                                        Choose Your Delivery Option
                                        <span className="text-xl ml-2">
                                          <IoArrowForward />
                                        </span>
                                      </button>
                                    ) : (
                                      <button
                                        className="  border  transition-all rounded py-3 text-center text-sm font-serif font-medium text-white flex justify-center w-full"
                                        style={{ background: "#301B2850" }}
                                        onClick={() => showError()}
                                        // disabled={isEmpty || !stripe || isCheckoutSubmit}
                                      >
                                        Choose Your Delivery Option
                                        <span className="text-xl ml-2">
                                          <IoArrowForward />
                                        </span>
                                      </button>
                                    )}
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

export default CheckOutPage;
/* (() => Promise.resolve(Checkout), { ssr: false }); */
