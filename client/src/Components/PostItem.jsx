// import React from 'react'


const PostItem = ({ postID, postImg, title, body, category, authorID }) => {



    return (
        <article className="post">
            <div className="post__img">
                <img src={postImg} alt={title} />
            </div>
            <div className="post__title-body">
                <h3>{title}</h3>
                {/* <p>{body.length > 10 ? body.substring(5) : body}</p> */}
                <p>{body}</p>
            </div>
            <div className="author__cat">
                <div className="author">

                </div>
            </div>


        </article>
    )
}

export default PostItem