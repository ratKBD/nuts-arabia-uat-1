import { useCart, useCartShippingOptions } from "medusa-react"
import React from "react"
import { useForm } from "react-hook-form"
import { FiTruck } from "react-icons/fi"

export interface IInputShippingProps {
  value: any
  label: any
  cost: any
  cart?: any
  handleChange?: any
  register?: any
  selectedValue?: any
  fn?: any
}

type ShippingOption = {
  value: string
  label: string
  price: string
}

// type ShippingProps = {
//   cart: Omit<Cart, "refundable_amount" | "refunded_total">

// }

type ShippingFormProps = {
  soId: string
}

const InputShipping: React.FC<IInputShippingProps> = ({
  value,
  label,
  cost,
  cart,
  handleChange,
  register,
  selectedValue,
  fn,
  // time, cost ,handleShippingCost ,
}) => {
  console.log("InputShippingSelectedValue", selectedValue)
  const [selectedShipingUpdate, setSelectedShipingUpdate] =
    React.useState<any>(false)
  const { addShippingMethod, setCart } = useCart()
  const {
    control,
    setError,
    formState: { errors },
  } = useForm<ShippingFormProps>({
    defaultValues: {
      soId: cart.shipping_methods?.[0]?.shipping_option_id,
    },
  })
  console.log("register", register)
  console.log("shippingMethod", addShippingMethod)
  console.log("control", control)
  // console.log("setCart", setCart)

  // Fetch shipping options
  const { shipping_options, refetch } = useCartShippingOptions(cart.id, {
    enabled: !!cart.id,
  })

  React.useEffect(() => {
    console.log("selectedValue", selectedValue === value, selectedValue, value)
    if (selectedValue === value) {
      console.log("fn default")
      setSelectedShipingUpdate(true)
    } else {
      setSelectedShipingUpdate(false)
    }
  }, [selectedValue])

  console.log("shippingOption", shipping_options)
  // Any time the cart changes we need to ensure that we are displaying valid shipping options
  React.useEffect(() => {
    const refetchShipping = async () => {
      await refetch()
    }

    // refetchShipping()
  }, [cart, refetch])

  const submitShippingOption = (soId: string) => {
    addShippingMethod.mutate(
      { option_id: soId },
      {
        onSuccess: ({ cart }) => setCart(cart),
        onError: () =>
          setError(
            "soId",
            {
              type: "validate",
              message:
                "An error occurred while adding shipping. Please try again.",
            },
            { shouldFocus: true }
          ),
      }
    )
  }

  // const handleChange = (value: string, fn: (value: string) => void) => {
  //   submitShippingOption(value)
  //   fn(value)
  // }

  return selectedValue === value ? (
    <div>
      {console.log("rendering", selectedValue, value)}
      <div className="p-3 card border border-gray-200 bg-white rounded-md">
        <label className="cursor-pointer label">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl mr-3 text-gray-400">
                <FiTruck />
              </span>
              <div>
                <h6 className="font-serif font-medium text-sm text-gray-600">
                  {label}
                </h6>
                <p className="text-xs text-gray-500 font-medium">
                  <span className="font-medium text-gray-600">
                    Cost : {cost}
                  </span>
                </p>
              </div>
            </div>
            <input
              // onClick={() => handleShippingCost(cost)}
              onClick={() => {
                fn(value)
                handleChange(value)
              }}
              // {...register(`shippingOption`, {
              //   required: `Shipping Option is required!`,
              // })}
              checked
              name="shippingOption"
              type="radio"
              value={value}
              className="form-radio outline-none focus:ring-0 " style={{color:"#592316"}}
            />
          </div>
        </label>
      </div>
    </div>
  ) : (
    <div>
      <div className="p-3 card border border-gray-200 bg-white rounded-md">
        <label className="cursor-pointer label">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl mr-3 text-gray-400">
                <FiTruck />
              </span>
              <div>
                <h6 className="font-serif font-medium text-sm text-gray-600">
                  {label}
                </h6>
                <p className="text-xs text-gray-500 font-medium">
                  <span className="font-medium text-gray-600">
                    Cost : {cost}
                  </span>
                </p>
              </div>
            </div>
            <input
              // onClick={() => handleShippingCost(cost)}
              onClick={() => handleChange(value)}
              // {...register(`shippingOption`, {
              //   required: `Shipping Option is required!`,
              // })}
              name="shippingOption"
              type="radio"
              value={value}
              className="form-radio outline-none focus:ring-0 text-emerald-500"
            />
          </div>
        </label>
      </div>
    </div>
  )
}

export default InputShipping
