import { any } from "cypress/types/bluebird"
import Cookies from "js-cookie"
import React, { createContext, useReducer } from "react"

export const UserContext = createContext("")

let userInfo: any = Cookies.get("userInfo")
let shippingAddress: any = Cookies.get("shippingAddress")
let couponInfo: any = Cookies.get("couponInfo")

const initialState = {
  userInfo: userInfo ? JSON.parse(userInfo) : null,
  shippingAddress: shippingAddress ? JSON.parse(shippingAddress) : {},
  couponInfo: couponInfo ? JSON.parse(couponInfo) : {},
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, userInfo: action.payload }

    case "USER_LOGOUT":
      return {
        ...state,
        userInfo: null,
      }

    case "SAVE_SHIPPING_ADDRESS":
      return { ...state, shippingAddress: action.payload }

    case "SAVE_COUPON":
      return { ...state, couponInfo: action.payload }
  }
}

export const UserProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value: any = { state, dispatch }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
