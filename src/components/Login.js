import "./Login.css"


function Login() {
    return (
<div className="main_div">
        <div className="box">
            <h1>Sign in here</h1>
            <form method="" action="">
                <div className="inputBox">
                    <input type="text" name="username" autocomplete="off" required />
                    <label> Username </label>
                </div>
                <div className="inputBox">
                    <input type="password" name="password" autocomplete="off" required />
                    <label> Password </label>
                    </div>
                   
            <input type="submit" name=" " value="Sign in" />       
        </form>
        </div>
    </div>
    );
}

export default Login;


