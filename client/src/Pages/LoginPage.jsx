import { Link } from "react-router-dom"

const LoginPage = () => {
    return (
        <section className="login">
            <div className="container login__container">
                <h1>Sign Up</h1>
                <div className="form">
                    {/* <div className="error-msg">An error occured</div> */}
                    <form >

                        <input type="email" name="email" id="email" placeholder="Email" />
                        <input type="password" name="password" id="password" />


                        <button type="submit">Submit</button>
                    </form>

                    <p>Don apos; t have an account? <Link to="/register">Sign up</Link></p>
                </div>
            </div>
        </section>
    )
}

export default LoginPage