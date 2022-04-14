import {
    useState,
    createContext,
    useContext,
    useEffect
} from "react"

import {
    getPostsRequest,
    createPostRequest
} from "../api/posts"

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

    const createPost = async (post) => {
        const res = await createPostRequest(post)
        setPosts([...posts, res.data])
    }

    useEffect(() => {
        getPosts()
    }, [])


    return <postContext.Provider value={{
        posts,
        setPosts,
        getPosts,
        createPost,
    }}>
        {children}
    </postContext.Provider>
}
