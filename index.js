import app from "./app.js"
import { PORT } from "./app/config/config.js"


app.listen(PORT, () => {
  console.log("Server started on port " + PORT)
})
