import { Link } from "react-router-dom"
import PostAuthor from "../Components/PostAuthor"
import RThum from "../assets/images/blog20.jpg"

const PostDetailsPage = () => {
    return (
        <section className="post__details">
            <div className="container post__details-container">
                <div className="post__details-header">
                    <PostAuthor />
                    <div className="post__details-btns">
                        <Link to={`/posts/:pid/edit`} className="btn btn__edit">Edit</Link>
                        <Link to={`/posts/:pid/delete`} className="btn btn__delete">Delete</Link>
                    </div>
                </div>

                <div className="post__details-content">
                    <div className="post__img">
                        <img src={RThum} alt="" />
                    </div>

                    <div className="post__details-body-">
                        <h1>The Exceptional Features of The Quantum Mechanics</h1>
                        <div className="post__details-desc">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod obcaecati commodi animi laboriosam aut consequuntur maxime cupiditate delectus, eum omnis ad quisquam nihil dolorum, voluptate reprehenderit rerum a. Molestiae quaerat error iste adipisci veritatis accusantium, voluptatem natus qui laudantium dolore itaque. Molestias, hic veritatis recusandae natus quaerat et labore?
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquid itaque voluptates iste, repellendus corporis cum officiis esse. Maiores et ipsa aut ea mollitia pariatur, est vel itaque sequi, corporis a, error similique in facilis saepe. Iste, corporis.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis illum corrupti enim odio, est beatae quia sit tenetur aperiam totam, in vel aspernatur nostrum voluptas dolor, doloribus illo error expedita repellat voluptatem? Ex, eaque consectetur? Sequi dolor sed totam beatae cumque harum, quos molestias aliquid omnis a maiores soluta! Repellendus magnam unde est laborum nam nemo aperiam magni beatae nesciunt, vel commodi ab quisquam officiis eveniet vero temporibus laboriosam atque. In libero eaque mollitia velit aperiam provident numquam neque tempora sunt sapiente consequatur, error rem explicabo corporis fugit ut impedit eius labore ullam illum? Qui expedita, esse velit ea quia quos ducimus quis, placeat, mollitia quam voluptatum. Possimus sapiente quam praesentium quasi in commodi quaerat, debitis nisi laborum asperiores sequi!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod obcaecati commodi animi laboriosam aut consequuntur maxime cupiditate delectus, eum omnis ad quisquam nihil dolorum, voluptate reprehenderit rerum a. Molestiae quaerat error iste adipisci veritatis accusantium, voluptatem natus qui laudantium dolore itaque. Molestias, hic veritatis recusandae natus quaerat et labore?
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquid itaque voluptates iste, repellendus corporis cum officiis esse. Maiores et ipsa aut ea mollitia pariatur, est vel itaque sequi, corporis a, error similique in facilis saepe. Iste, corporis.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis illum corrupti enim odio, est beatae quia sit tenetur aperiam totam, in vel aspernatur nostrum voluptas dolor, doloribus illo error expedita repellat voluptatem? Ex, eaque consectetur? Sequi dolor sed totam beatae cumque harum, quos molestias aliquid omnis a maiores soluta! Repellendus magnam unde est laborum nam nemo aperiam magni beatae nesciunt, vel commodi ab quisquam officiis eveniet vero temporibus laboriosam atque. In libero eaque mollitia velit aperiam provident numquam neque tempora sunt sapiente consequatur, error rem explicabo corporis fugit ut impedit eius labore ullam illum? Qui expedita, esse velit ea quia quos ducimus quis, placeat, mollitia quam voluptatum. Possimus sapiente quam praesentium quasi in commodi quaerat, debitis nisi laborum asperiores sequi!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PostDetailsPage