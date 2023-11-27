import app from "./app"
import { PORT } from "./config"

app.listen(PORT, () => {
  console.log(`todo-node app listening on port ${PORT}`)
})
