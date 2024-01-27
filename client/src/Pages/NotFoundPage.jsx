import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="container error_page-container">
            <div className="return__home-btn">
                <Link className="return__btn">Home Page</Link>
            </div>
            <h1>Page Not Found</h1>
        </div>
    )
}

export default NotFoundPage