import { usePosts } from "../context/postContext"
export function PostForm() {

    const { posts, setPosts } = usePosts()

    return (
        <>
            <h1>Post Form</h1>
            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </>
    )
}
