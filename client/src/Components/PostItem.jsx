import { Link } from "react-router-dom"

import PostAuthor from "./PostAuthor"


const PostItem = ({ postID, postImg, title, body, category, authorID }) => {

    return (
        <article className="post">
            <div className="post__img">
                <img src={postImg} alt={title} />
            </div>
            <div className="post__title-body">
                <Link to={`/posts/${postID}`}>
                    <h3>{title.length > 32 ? title.substring(0, 30) + "..." : title}</h3>
                </Link>
                <p>{body.length > 100 ? body.substring(0, 120) + "..." : body}</p>
            </div>
            <div className="author__cat">
                <PostAuthor />
                <div className="author__post-cat">
                    <Link to={`/posts/categories/${category}`}>
                        {category}
                    </Link>
                </div>
            </div>


        </article>
    )
}

export default PostItem