import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <ul className="footer__categories">
                    <li><Link to="/posts/categories/Agriculture">Agriculture</Link></li>
                    <li><Link to="/posts/categories/Arts">Arts</Link></li>
                    <li><Link to="/posts/categories/Finance">Finance</Link></li>
                    <li><Link to="/posts/categories/Education">Education</Link></li>
                    <li><Link to="/posts/categories/Entertainment">Entertainment</Link></li>
                    <li><Link to="/posts/categories/Investment">Investment</Link></li>
                    <li><Link to="/posts/categories/Weather">Weather</Link></li>
                    <li><Link to="/posts/categories/Sport">Sport</Link></li>
                    <li><Link to="/posts/categories/Uncategorized">Uncategorized</Link></li>
                </ul>
            </div>
            <div className="copyright">
                <small>
                    &copy; Copyrite Aderemi Abiodun 2024. All Rights Reserved.
                </small>
            </div>
        </footer>
    )
}

export default Footer