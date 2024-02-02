import styles from "./Post.module.css"

// hooks
import { useParams } from "react-router-dom"
import { useFecthDocument } from "../../hooks/useFetchDocument"

function Post() {
    const {id} = useParams()
    const {document: post, loading} = useFecthDocument("posts", id)

    return (
        <div className={styles.post_container}>
            {loading && <p>Carregando Post...</p>}
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <img src={post.image} alt={post.title} />
                    <p>{post.body}</p>
                    <h3>Este post trata sobre: </h3>
                    <div className={styles.tags}>
                        {post.tags.map((tag) => (
                            <p key={tag}> 
                                <span>#</span>
                                {tag}
                            </p>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Post