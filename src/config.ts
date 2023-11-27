import path from "path"

const DATA_FILE_NAME = "db.json"
const PATH_TO_DATE_FILE = path.join(__dirname, "..", DATA_FILE_NAME)
const PORT = 3005

export { PATH_TO_DATE_FILE, PORT }
