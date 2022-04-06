//librerias
import express from 'express'
import fileUpload from 'express-fileupload'
import postsRoutes from './routes/posts.routes.js'

const app = express()
//middlewares
app.use(express.json())
app.use(fileUpload(
    {
        //para almacenar las imagenes de forma local
        useTempFiles: true,
        //para decir en que ruta voy a guardar dichas imagenes
        tempFileDir: "./upload"
    }
))
//routes
app.use(postsRoutes)

export default app