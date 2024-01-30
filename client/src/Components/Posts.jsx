
import { useState } from "react";
import { samplePosts } from "../PostData";
import PostItem from "./PostItem";




const Posts = () => {

    const [posts, setPosts] = useState(samplePosts)

    return (
        <section className="posts">
            <div className="container post__container">
                {posts.length > 0 ?
                    posts.map(({ id, postImg, title, body, category, authorID }) =>
                        <PostItem key={id} postID={id} postImg={postImg} title={title} body={body} category={category} authorID={authorID} />
                    )
                    : <h1> No Post Here</h1>
                }
            </div>
        </section>

    )
}

export default Posts