import "./Form.css"


function Form(){
    return(
        <div className="main">
            
            <div className="contact-details">
            <h1> Contact Us </h1>
            <h3>our mailing address is:</h3>
              <p>  H.no.-44,abc road,<br />
                Madhya Pradesh,India<br />
                Phone- 0987456321</p>
</div>
<div className="details">
            <div className="inputBox">
            <label> Username </label><br />
                    <input type="text" name="username" autocomplete="off" required />
                  
                </div><br />

                <div className="inputBox">
                <label> Email </label><br />
                    <input type="text" name="username" autocomplete="off" required />
              
                </div><br />

                <div className="inputBox1">
                <label> Message </label><br/>
                    <textarea type="textbox" name="type here" autocomplete="off" required />
                 
                </div><br />
                </div>
               <a href="">Submit</a> 
 
            </div>
        
    );
}


export default Form;