import "./Aboutus.css"
import imgone from "./images/imgone.jpg"
import Popup from "./popup"
import React, { useState } from 'react';
// import "./popup.css"

function Aboutus() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (

        <div className="section">
            <div className="container">
                <div className="content-section">
                    <div className="title">
                        <h1>About Us</h1>
                    </div>
                    <div className="content">
                        <h3>Lorem ipsum dolor sit nobis nostrum  </h3>
                        <p id="testing"> Lorem ipsum dolor sit , nobis nostrum cupiditate ab aut
                        voluptates qui exercitationem voluptate, nihil fuga! Alias
              molestias illo consequuntur incidunt iure, aliquid numquam.</p>
                        <div className="button">
                            <a href="#" onClick={togglePopup}>Read More</a>
                            {isOpen && <Popup handleClose={togglePopup}
                            />}
                        </div>
                    </div>

                </div>
                <div className="image-section">
                    <img src={imgone} />

                </div>
            </div>
        </div>
    );
}

export default Aboutus;