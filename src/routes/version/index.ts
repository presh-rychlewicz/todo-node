import { RequestHandler } from "express"
const pjson = require("../../../package.json")

const version: RequestHandler = async (_, res) => {
  res.json({
    version: pjson.version,
  })
}

export { version }
