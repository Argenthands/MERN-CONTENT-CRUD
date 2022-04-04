import Post from "../models/Posts.js"

//req.query, req.body, req.params
export const getPosts = async (req, res, next)=> {
    const posts = await Post.find()
    res.send(posts)
}

//todavia no implemente esto.
export const getPostById = async (req, res, next)=> {
    const post = await Post.findById(req.params.id)
    if(!post){
        return res.sendStatus(404)
    }
    return res.json(post)
}

//todavia no implemente esto.
export const getPostByQuery = (req, res, next)=> {
    return res.send('get post by query selector')
}

export const createPost = async (req, res, next)=> {

    const {
        title,
        description,
    } = req.body

    const newPost = new Post({
        title,
        description
    })

    await newPost.save()
    return res.json(newPost)
}

export const updatePost = async (req, res, next)=> {
    /*
    const post = await Post.updateOne(
        { _id: req.params.id },
        req.body,
        { new: true }
    )
    */
    const post = await Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    if(!post){
        console.log('imposible to modify, because the id does not exist')
        return res.sendStatus(404)
    }
    return res.sendStatus(200)
}

export const deletePost = async (req, res, next)=> {
    const postRemoved = await Post.findByIdAndDelete(req.params.id)
    if(!postRemoved) return res.sendStatus(404)
    return res.sendStatus(200)//204
}