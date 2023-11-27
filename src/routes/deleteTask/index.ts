import { RequestHandler } from "express"
import { getTasks, updateTasks } from "../../modules"
import { Task } from "../../types"

const deleteTask: RequestHandler<P> = async (req, res) => {
  const tasks = await getTasks()
  const taskId = req.params.taskId
  const newTasks = [...tasks].filter((t) => t.id !== taskId)

  updateTasks(newTasks)

  res.sendStatus(200)
}

type P = {
  taskId: Task["id"]
}

export { deleteTask }
