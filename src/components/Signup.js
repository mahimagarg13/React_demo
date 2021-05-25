import "./Signup.css"

function signup() {
    return (
        < div className = "main_div" >
        <div className="box">
            <h1>Sign up here</h1>
            <form method="" action="">
                <div className="inputBox">
                    <input type="text" name="username" autocomplete="off" required />
                    <label> Username </label>
                </div>

                <div className="inputBox">
                    <input type="text" name="username" autocomplete="off" required />
                    <label> Email </label>
                </div>

                <div className="inputBox">
                    <input type="password" name="password" autocomplete="off" required />
                    <label> Password </label>
                </div>

                <div className="inputBox">
                    <input type="password" name="password" autocomplete="off" required />
                    <label> Confirm Password </label>
                </div>


                <input type="submit" name=" " value="Sign up" />
                </form>
        </div>
                        </div>



    );
}
export default signup;