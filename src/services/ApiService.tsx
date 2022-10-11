import axios from "axios"
import React from "react"

let MEDUSA_BACKEND_URL =
  /* "http://localhost:9000"   */ "https://nutsarabia-backend-staging-tiz3i.ondigitalocean.app"

const ApiService = {
  getAllProduct: async () => {
    const res = await axios.get(`${MEDUSA_BACKEND_URL}/store/products`)
    const userData = await res.data.products
    console.log("getData", userData)
    return userData
  },
}

export default ApiService
