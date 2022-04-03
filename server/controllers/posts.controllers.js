//req.query, req.body, req.params
export const getPosts =  (req, res, next)=> {
    res.send([])
}

export const getPostById = (req, res, next)=> {
    res.send('geting a post')
}

export const getPostByQuery = (req, res, next)=> {
    const {} = req.query
}

export const createPost =  (req, res, next)=> {
    res.send('new post created')
}

export const updatePost = (req, res, next)=> {
    res.send('updated the post')
}

export const deletePost = (req, res, next)=> {
    res.send('the post was deleted')
}