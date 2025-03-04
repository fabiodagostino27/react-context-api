import { Children, createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
    const url = import.meta.env.VITE_ENDPOINT;
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});

    const fetchPosts = () => {
        fetch(url)
            .then((res) => res.json())
            .then(data => setPosts(data))
    };

    const fetchPost = (id) => {
        fetch(`${url}/${id}`)
            .then((res) => res.json())
            .then(data => setPost(data))
        
    };

    return (
        <GlobalContext.Provider value={{post, posts, setPost, setPosts}}>
            {children}
        </GlobalContext.Provider>
    )
};

export {GlobalContext, GlobalProvider};