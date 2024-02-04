import { Link } from "react-router-dom"


const RegisterPage = () => {
    return (
        <section className="register">
            <div className="container register__container">
                <h1>Sign Up</h1>
                <div className="form">
                    {/* <div className="error-msg">An error occured</div> */}
                    <form >
                        <input type="text" name="Fullname" id="Fullname" placeholder="Full name" />
                        <input type="email" name="email" id="email" placeholder="Email" />
                        <input type="password" name="password" id="password" placeholder="Password" autoComplete="off" />
                        <input type="password" placeholder="Confirm Password" autoComplete="off" name="confirmpassword" id="confirmpassword" />

                        <button className="btn submit-btn" type="submit">Submit</button>
                    </form>

                    <p>Have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </section>
    )
}

export default RegisterPage