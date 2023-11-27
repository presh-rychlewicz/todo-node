import { Task } from "../types"
import updateTasks from "./updateTasks"

const initializeTasks = () => {
  const initialTasks: Task[] = []

  updateTasks(initialTasks)

  return initialTasks
}

export default initializeTasks
