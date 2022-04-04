import { Router } from 'express'
import {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    getPostByQuery,
} from '../controllers/posts.controllers.js'

const router = Router()

router.get('/', (req, res, next)=>{
    res.send('<h1>Soy el home</h1>')
})

router.get('/post/', getPostByQuery)

router.get('/posts/:id', getPostById)

router.get('/posts/', getPosts)

router.post('/posts/', createPost)

router.put('/posts/:id', updatePost)

router.delete('/posts/:id', deletePost)


export default router