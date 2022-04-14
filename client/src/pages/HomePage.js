import { usePosts } from "../context/postContext"
import { VscEmptyWindow } from "react-icons/vsc"


export function HomePage() {

    const { posts } = usePosts()

    if(posts.length === 0) return (
        <>
            <VscEmptyWindow />
            <h1> There are not Posts</h1>
        </>
    )

    return (
        <>
            <h1>Home Page</h1>
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
