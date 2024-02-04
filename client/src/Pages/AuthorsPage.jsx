

import Author1 from "../assets/images/avatar10.jpg"
import Author2 from "../assets/images/avatar11.jpg"
import Author3 from "../assets/images/avatar12.jpg"
import Author4 from "../assets/images/avatar13.jpg"
import Author5 from "../assets/images/avatar14.jpg"

const authors = [
    { id: 1, avatar: Author1, name: "Aderemi Abiodun", posts: 10 },
    { id: 2, avatar: Author2, name: "Ilelaboye Ridwan", posts: 12 },
    { id: 3, avatar: Author3, name: "Akinleye Samuel", posts: 8 },
    { id: 4, avatar: Author4, name: "Odeyemi Akinyemi", posts: 6 },
    { id: 5, avatar: Author5, name: "Aderemi Oyindamola", posts: 2 },

]



const AuthorsPage = () => {
    return (
        <section className="authors__page">
            <div className="container authors__page-container">
                {
                    authors.map(({ id, avatar, name, posts }) => {
                        return (
                            <div className="author" key={id}>
                                <div className="author__avatar">
                                    <img src={avatar} alt={name} />
                                </div>
                                <div className="author__info">
                                    <h4>{name}</h4>
                                    <h5>Posts:      {posts}</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default AuthorsPage;