import { useState, createContext, useContext, useEffect } from "react"
import { getPostsRequest } from "../api/posts"

// exporto un hoock con el contexto y el state
const postContext = createContext()
export const usePosts = () => {
    const context = useContext(postContext)
    return context
}

export const PostProvider = ({ children }) => {

    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        //take the posts from the server
        const res = await getPostsRequest()
        setPosts(res.data)
    }
    useEffect(() => {
        getPosts()
    }, [])


    return <postContext.Provider value={{
        posts,
        setPosts,
        getPosts,
    }}>
        {children}
    </postContext.Provider>
}
