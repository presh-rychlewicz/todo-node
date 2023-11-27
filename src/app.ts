import bodyParser from "body-parser"
import express from "express"
import { Client } from "pg"
import {
  addTask,
  addTaskValidator,
  completeTask,
  deleteTask,
  health,
  main,
  taskList,
  taskListValidator,
  undoTask,
  version,
} from "./routes"

const app = express()

app.use(express.json())
app.use(bodyParser.json())

// TEMP
// ;(async () => {
//   const client = new Client()
//   await client.connect()

//   const res = await client.query("SELECT $1::text as message", ["Hello world!"])
//   console.log(res.rows[0].message) // Hello world!
//   await client.end()
// })()

// ROUTES
app.delete("/deleteTask/:taskId", deleteTask)
app.get("/", main)
app.get("/health", health)
app.get("/taskList", taskListValidator, taskList)
app.get("/version", version)
app.post("/addTask", addTaskValidator, addTask)
app.put("/completeTask/:taskId", completeTask)
app.put("/undoTask/:taskId", undoTask)

export default app
