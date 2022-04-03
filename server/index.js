//librerias
import express from 'express'
//componentes
import { conectDB } from './db.js'
import { PORT } from './config.js'
//rutas
import postsRoutes from './routes/posts.routes.js'

const app = express()
conectDB()
app.use(postsRoutes)

app.listen(PORT)
console.log("Server is running on port", PORT)