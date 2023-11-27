import { RequestHandler } from "express"
import { ValidationError, validationResult } from "express-validator"
import { getTasks } from "../../modules"
import { Task } from "../../types"
import taskListValidator from "./validator"

const taskList: RequestHandler<
  undefined,
  ResBody,
  undefined,
  ResQuery
> = async (req, res) => {
  const result = validationResult(req)
  const hasAnyErrors = !result.isEmpty()
  if (hasAnyErrors) {
    return res.send({ errors: result.array() })
  }

  const status = req.query.status || "all"
  const tasks = await getTasks()

  let tasksToDisplay: Array<Task> = []
  switch (status) {
    case "pending":
      tasksToDisplay = tasks.filter((t) => !t.isDone)
      break

    case "done":
      tasksToDisplay = tasks.filter((t) => t.isDone)
      break

    case "all":
      tasksToDisplay = tasks
      break
  }

  return res.send(tasksToDisplay)
}

type ResBody =
  | Array<Task>
  | {
      errors: Array<ValidationError>
    }
type Status = "all" | "done" | "pending"
type ResQuery = {
  status: Status
}

export { taskList, taskListValidator }
