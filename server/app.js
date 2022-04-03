//librerias
import express from 'express'
//rutas
import postsRoutes from './routes/posts.routes.js'

const app = express()
app.use(postsRoutes)

export default app