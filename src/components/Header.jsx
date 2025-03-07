import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Blog</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/posts">Lista Post</NavLink>
                            <NavLink className="nav-link" to="/about">Chi Siamo</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}