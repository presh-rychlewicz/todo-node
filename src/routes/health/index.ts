import { RequestHandler } from "express"

const health: RequestHandler = async (_, res) => {
  res.json({
    status: "OK",
  })
}

export { health }
