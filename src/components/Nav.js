import "./Nav.css"
import logo from "./images/logo.jpeg"

function Nav() {
    return (

        <div className="logo">
            <img src={logo} />
                <div className="dropdown">

                    <button className="dropbtn">Inspiration</button>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Find Work </button>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <a href="Aboutus" className="button">About us</a>
                <a href="Contactus" className="button">Contact Us</a>
                <div className="dropdown">
                    <button className="dropbtn">Hire Designer</button>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <button href="/login.html" className="button2"><a href="/login">Sign in</a></button>
                <button href="/signup.html" className="button3"><a href="/signup" > Signup</a></button>
            </div>
  );
}

export default Nav;
