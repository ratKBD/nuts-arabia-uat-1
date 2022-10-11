import React, { useContext, useState } from "react"

interface PaymentMethodProps {
  children: React.ReactNode
}

interface PaymentMethodContext {
  paymentMethodGloble: any
  setPaymentMethodGloble: any
}

const PaymentMethodContext = React.createContext<PaymentMethodContext | null>(null)

export const PaymentMethodProvider = ({ children }: PaymentMethodProps) => {
  const [paymentMethodGloble, setPaymentMethodGloble] = useState<any>(null)

  return (
    <PaymentMethodContext.Provider
      value={{
        paymentMethodGloble,
        setPaymentMethodGloble
      }}
    >
      {children}
    </PaymentMethodContext.Provider>
  )
}

export const usePaymentMethod = () => {
  const context = useContext(PaymentMethodContext)

  if (context === null) {
    throw new Error("usePaymentMethod must be used within a PaymentMethodProvider")
  }
  return context
}
