import { RequestHandler } from "express"
import { getTasks, updateTasks } from "../../modules"
import { Task } from "../../types"
import crypto from "crypto"
import { ValidationError, validationResult } from "express-validator"

const addTask: RequestHandler<undefined, ResBody, ReqBody> = async (
  req,
  res
) => {
  const result = validationResult(req)
  const hasAnyErrors = !result.isEmpty()
  if (hasAnyErrors) {
    return res.send({ errors: result.array() })
  }

  const tasks = await getTasks()
  const taskName = req.body.taskName
  console.log({
    taskName,
    alfa: req.body,
  })

  const newTask: Task = {
    name: taskName,
    id: crypto.randomUUID(),
    isDone: false,
  }
  const newTasks = [...tasks, newTask]

  updateTasks(newTasks)

  res.json({ taskId: newTask.id })
}

type ResBody =
  | {
      taskId: Task["id"]
    }
  | {
      errors: Array<ValidationError>
    }

type ReqBody = {
  taskName: Task["name"]
}

export { addTask }
export { default as addTaskValidator } from "./validator"
