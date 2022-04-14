import Post from "../models/Posts.js"
import { uploadImage, deleteImage } from "../libs/cloudinary.js"
import fs from 'fs-extra'

//req.query, req.body, req.params
export const getPosts = async (req, res, next) => {

    try {

        const posts = await Post.find()
        return res.send(posts)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getPostById = async (req, res, next) => {

    try {

        const post = await Post.findById(req.params.id)
        if (!post) {
            return res.sendStatus(404)
        }
        return res.json(post)

    } catch (error) {

        return res.status(500).json({ message: error.message })
    }
}

//todavia no implemente esto.
export const getPostByQuery = (req, res, next) => {
    return res.send('get post by query selector')
}

export const createPost = async (req, res, next) => {

    try {

        const {
            title,
            description,
        } = req.body

        let image;

        if (req.files?.image){
            const result = await uploadImage(req.files.image.tempFilePath)
            await fs.remove(req.files.image.tempFilePath)
            image = {
                url: result.secure_url,
                public_id: result.public_id
            }
        }

        const newPost = new Post({
            title,
            description,
            image
        })

        await newPost.save()

        return res.json(newPost)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}

export const updatePostById = async (req, res, next) => {

    try {
        /*
        const post = await Post.updateOne(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        */
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if(!updatedPost) throw new Error("post not found")
        return res.status(200).send(updatedPost)
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
}

export const deletePost = async (req, res, next) => {
    
    try {

        const removedPost = await Post.findByIdAndDelete(req.params.id)
        if(!removedPost){
            return res.sendStatus(404)
        }
        if(removedPost.image.public_id){
            await deleteImage(removedPost.image.public_id)
        }

        return res.status(200).send(removedPost)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}