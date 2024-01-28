
import { useState } from "react";
import blogImg1 from "../assets/images/blog1.jpg";
import blogImg2 from "../assets/images/blog2.jpg";
import blogImg3 from "../assets/images/blog3.jpg";
import blogImg4 from "../assets/images/blog4.jpg";
import PostItem from "./PostItem";


const samplePosts = [
    {
        id: 1,
        postImg: blogImg1,
        title: "Getting the most out of reading",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque soluta similique. Similique id temporibus dignissimos, tenetur quasi illum facilis?",
        catagory: "Education",
        authorID: 1
    },
    {
        id: 2,
        postImg: blogImg2,
        title: "Showcasing amazing culture",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque soluta similique. Similique id temporibus dignissimos, tenetur quasi illum facilis?",
        catagory: "Arts",
        authorID: 2
    },
    {
        id: 3,
        postImg: blogImg3,
        title: "How to grow your small garden",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque soluta similique. Similique id temporibus dignissimos, tenetur quasi illum facilis?",
        catagory: "Agriculture",
        authorID: 3
    },
    {
        id: 4,
        postImg: blogImg4,
        title: "Getting the most out of reading",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque soluta similique. Similique id temporibus dignissimos, tenetur quasi illum facilis?",
        catagory: "Education",
        authorID: 4
    }
]

const Posts = () => {

    const [posts, setPosts] = useState(samplePosts)

    return (
        <section className="posts">
            <div className="container post__container">

                {
                    posts.map(({ id, postImg, title, body, category, authorID }) =>
                        <PostItem key={id} postID={id} postImg={postImg} title={title} body={body} catagory={category} authorID={authorID} />
                    )
                }
            </div>
        </section>

    )
}

export default Posts