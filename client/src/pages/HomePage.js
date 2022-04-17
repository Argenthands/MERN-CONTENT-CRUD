import { usePosts } from "../context/postContext"
import { VscEmptyWindow } from "react-icons/vsc"
import { PostCard } from "../components"


export function HomePage() {

    const { posts } = usePosts()

    if(posts.length === 0) return (
        <div className="CardsConteiner">
            <VscEmptyWindow />
            <h1> There are not Posts</h1>
        </div>
    )

    return (
        <div className="CardsConteiner">
            <h1>Home Page</h1>
            <ul>
                {posts.map(post => (
                    <PostCard key={post._id} post={post} />
                ))}
            </ul>
        </div>
    )
}
