import {
    useState,
    createContext,
    useContext,
    useEffect
} from "react"

import {
    getPostsRequest,
    createPostRequest,
    //updatePostRequest,
    deletePostRequest
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

    const deletePost = async (id) => {
        const res = await deletePostRequest(id)
        if(res.status === 200){
            setPosts(posts.filter(post => post._id !== id))
        }
    }

    useEffect(() => {
        getPosts()
    }, [])


    return <postContext.Provider value={{
        posts,
        setPosts,
        getPosts,
        createPost,
        deletePost,
    }}>
        {children}
    </postContext.Provider>
}
