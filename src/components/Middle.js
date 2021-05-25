import "./Middle.css"
import logo from "./images/img.jpg"
function Middle() {
    return (
        <div className="middle">
            <div className="blank" id="a">
                <h1>Discover the world’s
    top designers and creatives</h1>
                <h4>
                    webbywords is the leading destination to find and showcase creative work and home to the
                    world's best design professionals.
  </h4>
                <button href="/signup.html" class="button4"><a href="/signup.html"> Signup</a></button>


            </div>
            <div className="img">
                <img src={logo} />
            </div>
        </div>
    );
}

export default Middle;