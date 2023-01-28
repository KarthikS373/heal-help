import type { NextApiRequest, NextApiResponse } from "next"

import API_RESPONSE from "./_api.types"

const handler = (req: NextApiRequest, res: NextApiResponse<API_RESPONSE>) => {
  res.status(200).json({
    message: "Successfully connected",
    data: undefined,
    error: undefined,
  })
}

export default handler
