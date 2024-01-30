import { Link } from "react-router-dom"

import AVATAR10 from "../assets/images/avatar10.jpg"

const PostAuthor = () => {
    return (
        <div>
            <Link to="/" className="author__info">
                <div className="author__avatar">
                    <img src={AVATAR10} alt="" />
                </div>
                <div className="author__name">
                    <h5>By: Aderemi Abiodun</h5>
                    <small>Just Now</small>
                </div>
            </Link>

        </div>
    )
}

export default PostAuthor