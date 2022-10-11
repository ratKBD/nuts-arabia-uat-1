import getDisplayableprice from "@services/PriceService"
import React from "react"
import LineItemPrice from "../line-item-price"

const OrderTable = ({ data }: any) => {
  return (
    <tbody className="bg-white divide-y divide-gray-100 text-serif text-sm">
      {data?.items?.map((item: any, i: any) => (
        <tr key={i}>
          <th className="px-6 py-1 whitespace-nowrap font-normal text-gray-500 text-left">
            {i + 1}{" "}
          </th>
          <td className="px-6 py-1 whitespace-nowrap font-normal text-gray-500">
            {item.title}
          </td>
          <td className="px-6 py-1 whitespace-nowrap font-bold text-center">
            {item.quantity}{" "}
          </td>
          <td className="px-6 py-1 whitespace-nowrap font-bold text-center font-DejaVu">
            {/* ${item.unit_price}.00{" "} */}
            {`${data.currency_code.toUpperCase()} ${getDisplayableprice(
              item.unit_price
            )}`}
          </td>

          <td className="px-6 py-1 whitespace-nowrap text-right font-bold font-DejaVu k-grid text-red-500">
            {/* ${item.itemTotal}.00 */}
            {/* <LineItemPrice
              variant={item.variant as CalculatedVariant}
              quantity={item.quantity}
              region={data.region}
            /> */}
            {`${data.currency_code.toUpperCase()} ${getDisplayableprice(
              item.unit_price * item.quantity
            )}`}
          </td>
        </tr>
      ))}
    </tbody>
  )
}

export default OrderTable
