import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Posts() {
    const {posts, fetchPosts} = useContext(GlobalContext)

    useEffect(fetchPosts, []);

    return (
        <div className="container">
            <h1 className="mb-4">Lista dei post</h1>
            <div className="row gap-3">
                {
                    posts.map(p => {
                        return (
                            <div key={p.id} className="card col-3 flex-grow-1" >
                                <div className="card-body">
                                    <h5 className="card-title">{p.title}</h5>
                                    <p className="card-text">{p.content}</p>
                                    <Link to={`/posts/${p.id}`} className="btn btn-primary align-self-end">Apri Post</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}