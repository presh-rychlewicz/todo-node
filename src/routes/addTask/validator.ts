import { body } from "express-validator"

const addTaskValidator = body("taskName")
  .not()
  .isEmpty()
  .withMessage("taskName must be provided")

export default addTaskValidator
