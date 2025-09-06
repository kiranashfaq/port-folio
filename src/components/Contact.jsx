import { use } from "react";
import { useState } from "react";
function  Contact(){

const [blur , setBlur] = useState("")
const[popup , setPopup] = useState("")
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1c7df65f-e017-424f-957e-80ac736ffa39");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
     toggle()
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
function toggle(){
 setBlur("active")
 setPopup("active")
}
function close(){
  setBlur("")
  setPopup("") 
}



    return(
        <>
        
<div className={blur} id="blur">
      <h1 id="contactus" className=" con-name text-center con mt-5">Contact Me</h1>  
      <br /><br /><br />


      <div className="container text-center" >
        <div className="row align-items-start">
          <div className="col-12 col-sm-4 text-start">
            <div className="d-flex">
              <div><i className="fa-solid fa-envelope fa-2xl" style={{ color: '#25a1cb' }}></i></div>
              <div><h3 className="contact-me-heading ps-3">Email</h3></div>       
            </div>
            <p className="contact-content">
            kiran.ashfaq148@gmail.com
            </p>
            <br /><br />

            <div className="d-flex">
              <div><i className="fa-sharp fa-shake fa-solid fa-phone fa-2xl" style={{ color: '#25a1cb' }}></i></div>
              <div><h3 className="contact-me-heading ps-3">Phone</h3></div>       
            </div>
            <p className="contact-content">
              03223366412
            </p>
            <br /><br />

            <div className="d-flex">
              <div><i className="fa-solid fa-location-dot fa-2xl" style={{ color: '#25a1cb' }}></i></div>
              <div><h3 className="contact-me-heading ps-3">Country</h3></div>       
            </div>
            <p className="contact-content">
              Pakistan
            </p>
          </div>

          <div className="col-12 col-sm-8 text-center">
            <form action="" onSubmit={onSubmit} className="contact-form">
              <div className="inp-div">
                <div className="inp-div-1">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="contact-inp col-8 col-sm-8 " 
                name="name"
                required
              />
              </div>
              <div className="inp-div-1">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="contact-inp col-8 col-sm-8" 
                name="email"
                required
              />
              </div>
              </div>
              <br /><br />
              <input 
                type="number" 
                placeholder="Phone number" 
                className="phone-inp col-8 col-sm-8" 
                name="phone number"
                required
              />
              <br /><br />
              <textarea 
                placeholder="Your message"  
                cols="33" 
                rows="6" 
                className="text-area"
                name="message"
                required
              ></textarea>
              <br /><br />
              <button className="hire mb-4">Send Message</button>
              
            </form>
          </div>
        </div>
      </div>
      

      <br /><br />
      <hr className="hr" />    
      <br />
      <h3 className="port logo about-heading footer-name text-center">Kiran Ashfaq</h3>   
      <p className="end-para end-line">
        I would try to deeply explore your request to prepare a web solution specifically for your needs.
      </p>     
      <br /><br /> 
      <p className="end-para copy">
        © 2024 Copyright: Designed by <span className="kiran port">Kiran</span>
      </p>
      <a href="#top" className="text-end">
        <i className="fa-solid fa-arrow-up fa-2xl arrow" style={{ color: '#32c1f1' }}></i>
      </a>
      </div>
      <div className={popup} id="popup">
  <h2>Your message has been sent Successfully</h2>
  <button onClick={close} className="hire">close</button>
</div>
        </>
    )
}
export default Contact