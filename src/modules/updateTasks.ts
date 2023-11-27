import fs from "fs"

import { PATH_TO_DATE_FILE } from "../config"
import { Task } from "../types"

const updateTasks = (tasks: Array<Task>) => {
  const initialData = JSON.stringify(tasks, null, 4)
  fs.writeFileSync(PATH_TO_DATE_FILE, initialData)
}

export default updateTasks
