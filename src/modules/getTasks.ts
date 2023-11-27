import fs from "fs"
import { PATH_TO_DATE_FILE } from "../config"
import type { Task } from "../types"
import initializeTasks from "./initializeTasks"

const getTasks = () => {
  const doesDbFileExist = fs.existsSync(PATH_TO_DATE_FILE)

  if (doesDbFileExist) {
    return new Promise<Array<Task>>((res) => {
      fs.readFile(PATH_TO_DATE_FILE, "utf-8", (err, data) => {
        if (err) {
          const tasks = initializeTasks()
          res(tasks)
        } else {
          const tasks = JSON.parse(data) as Task[]
          res(tasks)
        }
      })
    })
  } else {
    return initializeTasks()
  }
}

export default getTasks
