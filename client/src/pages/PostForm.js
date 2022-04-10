import { usePosts } from "../context/postContext"
export function PostForm() {

    const { posts, setPosts } = usePosts()

    return (
        <div>
            <h1>Post Form</h1>
            <div>
                <label>{posts}</label>
                <button onClick={()=>setPosts([1,2,3])}>
                    ADD
                </button>
            </div>
        </div>
    )
}
