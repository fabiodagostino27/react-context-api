import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Post() {
    const {id} = useParams();
    const {post, fetchPost, posts, fetchPosts} = useContext(GlobalContext);

    const navigate = useNavigate();
    useEffect(() => fetchPost(id), [id]);
    useEffect(fetchPosts, [])

    const lastPost = (posts) ? posts[posts.length - 1] : "";
 
    return (
        <div className="container">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>
                <strong>Tags: </strong>
                {
                    post.tags ? post.tags.join(", ") : ""
                }
            </p>
            <div className="d-flex gap-2 justify-content-center">
                <button className={`btn btn-primary ${(id == 1) ? "disabled" : "d-block"}`} onClick={() => navigate(`/posts/${parseInt(id) - 1}`)}>Vai al post precedente</button>
                <button 
                    className={`btn btn-primary ${lastPost && (id == lastPost.id) ? "disabled" : ""}`} 
                    onClick={() => navigate(`/posts/${parseInt(id) + 1}`)}>
                        Vai al post successivo
                </button>
            </div>
        </div>
    )
}