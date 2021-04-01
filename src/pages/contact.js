import React from "react"
import Link from "gatsby-link"

const ContactForm = () => {
    return (
      <div className='ContactForm'>
        <h1>My Site</h1>
        <div><Link to="/test-homepage">Test-Homepage</Link></div>
        <div><Link to="/contact">Contact</Link></div>
        <div><Link to="/posts">Posts</Link></div>
        <div><Link to="/">Go Home</Link></div> 
        <h1 style={{backgroundColor: "lightblue"}}>Contact Form!</h1>       
        <form name="contact-form-ks" method="post" data-netlify-honeypot="bot-field" data-netlify="true" >      
        <label>
            First Name : <input type="text" name="name" id="name" />
        </label>
        <label>
            Last Name : <input type="text" name="name" id="name" />
        </label>      
        <label>
            Email :  <input type="email" name="email" id="email" />
        </label>
        <label>
            Phone Number: <input type="tel" name="subject" id="subject" />
        </label>
        <button>Send</button>
        <input type="reset" value="Clear" />
        </form>
      </div>
    );
  };
  
  export default ContactForm;


