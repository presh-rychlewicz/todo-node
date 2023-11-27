import { RequestHandler } from "express"
import { getTasks, updateTasks } from "../../modules"
import { Task } from "../../types"

const completeTask: RequestHandler<P, ReqBody> = async (req, res) => {
  const tasks = await getTasks()
  const taskId = req.params.taskId
  const taskIndex = tasks.findIndex((t) => t.id === taskId)
  const task = tasks[taskIndex]

  if (!task) {
    return res.send({
      error: "Task with given id does not exists",
    })
  }

  const newTask: Task = {
    ...task,
    isDone: true,
  }
  const newTasks = [...tasks]
  newTasks[taskIndex] = newTask

  updateTasks(newTasks)

  return res.send(newTask)
}

type P = {
  taskId: Task["id"]
}

type ReqBody =
  | Task
  | {
      error: string
    }

export { completeTask }
