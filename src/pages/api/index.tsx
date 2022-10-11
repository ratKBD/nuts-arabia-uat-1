import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("req.query", req.query)
  res.send("Hello world!")
}
