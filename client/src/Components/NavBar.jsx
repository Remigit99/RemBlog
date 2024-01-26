import { Link } from "react-router-dom"

const NavBar = () => {
    return (

        <nav>
            <div className="container nav__container">
                <div className="nav__logo">
                    <Link to="/">
                        <h3>Rem<span>Blog</span></h3>
                    </Link>
                </div>

                <ul className="nav__links">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar