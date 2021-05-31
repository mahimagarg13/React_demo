function fsorm(){
    return(
        <div>
            <h1>Contact Us</h1>
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
 

            </div>
        
    );
}


export default form;