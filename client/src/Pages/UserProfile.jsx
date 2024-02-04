
import { Link } from "react-router-dom"
import AVT17 from "../assets/images/avatar17.jpg"

const UserProfile = () => {
    return (
        <section className="profile">
            <div className="container profile__container">

                <div className="my__posts-profile">

                    <Link className="my__posts">My Posts</Link>
                </div>

                <div className="profile__avatar">
                    <form className="form__avatar">
                        <img src={AVT17} alt="" />
                    </form>
                </div>

                <h1>Aderemi Abiodun</h1>

                <form className="form__profile">
                    <input type="text" name="Fullname" id="Fullname" placeholder="Aderemi Abiodun" />

                    <input type="email" name="email" id="email" placeholder="deremidev@gmail.com" />

                    <input type="password" name="currentPassword" id="currentPassword" placeholder="Current Password" />

                    <input type="password" name="newPassword" id="newPassword" placeholder="New Password" />

                    <input type="password" name="confirmNewPassword" id="confirmNewPassword" placeholder="Confirm New Password" />

                    <button className="btn btn-update" type="submit">Update My Details</button>
                </form>
            </div>
        </section>
    )
}

export default UserProfile