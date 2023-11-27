import { query } from "express-validator"

const taskListValidator = query("status").custom((input) => {
  const validOptions = ["all", "done", "pending"]
  const isCorrect = validOptions.includes(input)
  if (!isCorrect) {
    throw new Error("Status should be one of all|done|pending")
  }

  return isCorrect
})

export default taskListValidator
