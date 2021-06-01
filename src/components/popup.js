import React from "react";
import "./popup.css"
 
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <>
        <div className="title">
            Here is the title
        </div>
        <div className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magni accusantium consequuntur sed facilis, error architecto necessitatibus dolor aliquid modi minus optio voluptatibus neque enim! Dolore numquam repudiandae sunt modi.</p>
        </div>
        </>
      </div>
    </div>
  );
};
 
export default Popup;