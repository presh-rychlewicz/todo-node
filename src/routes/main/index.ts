import { RequestHandler } from "express"

const main: RequestHandler = (req, res) => {
  res.send("Hello World!")
}

export { main }
