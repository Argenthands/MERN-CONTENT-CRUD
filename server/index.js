import app from './app.js'
//componentes
import { conectDB } from './db.js'
import { PORT } from './config.js'

conectDB()
app.listen(PORT)
console.log("Server is running on port", PORT)