import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { useMemo, useState } from "react"

const useFilter = (data: any) => {
  const [pending, setPending] = useState([])
  const [processing, setProcessing] = useState([])
  const [delivered, setDelivered] = useState([])
  const [sortedField, setSortedField] = useState("")
  const router = useRouter()

  const productData = useMemo(() => {
    let services = data
    //filter user order
    if (router.pathname === "/user/dashboard") {
      const orderPending = services.filter(
        (statusP: any) => statusP.status === "Pending"
      )
      setPending(orderPending)

      const orderProcessing = services.filter(
        (statusO: any) => statusO.status === "Processing"
      )
      setProcessing(orderProcessing)

      const orderDelivered = services.filter(
        (statusD: any) => statusD.status === "Delivered"
      )
      setDelivered(orderDelivered)
    }

    //service sorting with low and high price
    if (sortedField === "Low") {
      console.log("ascending")
      services = services.sort(
        (a: any, b: any) =>
          a.variants[0].prices[0].amount < b.variants[0].prices[0].amount && -1
      )
    }
    if (sortedField === "High") {
      console.log("descending")
      services = services.sort(
        (a: any, b: any) =>
          a.variants[0].prices[0].amount > b.variants[0].prices[0].amount && -1
      )
    }

    return services

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortedField, data])

  return {
    productData,
    pending,
    processing,
    delivered,
    setSortedField,
  }
}

export default useFilter
