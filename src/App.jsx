import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import DefaultLayout from "./layouts/DEfaultLayout";
import { GlobalProvider } from "./contexts/GlobalContext";

function App() {

    return (
        <>
            <GlobalProvider>
                <BrowserRouter>
                    <Routes>
                        <Route Component={DefaultLayout}>
                            <Route path="/" Component={HomePage} />
                            <Route path="/about" Component={About} />
                            <Route path="/posts" Component={Posts} />
                            <Route path="/posts/:id" Component={Post} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </GlobalProvider>
        </>
    )
}

export default App
