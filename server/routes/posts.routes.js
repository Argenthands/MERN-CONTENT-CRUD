import { Router } from 'express'
import {
    getPosts,
    getPostById,
    createPost,
    updatePostById,
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

router.put('/posts/:id', updatePostById)

router.delete('/posts/:id', deletePost)


export default router