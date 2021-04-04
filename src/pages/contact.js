/*import React from "react"
import Link from "gatsby-link"

const ContactForm = () => {
    return (
      <div className='ContactForm'>
        <h1>My Site</h1>
        <div><Link to="/test-homepage">Test-Homepage</Link></div>
        <div><Link to="/contact">Contact</Link></div>
        <div><Link to="/posts_new">Posts</Link></div>
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
  */

import React from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Link from "gatsby-link"

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default () => (
  <Formik
    initialValues={{
      fname: '',
      lname: '',
      email: '',
      phone: '',
    }}
    onSubmit={
      (values, actions) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact-demo", ...values })
        })
        .then(() => {
          alert('Success');
          actions.resetForm()
        })
        .catch(() => {
          alert('Error');
        })
        .finally(() => actions.setSubmitting(false))
      }
    }
    validate={values => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const errors = {};
      if(!values.fname) {
        errors.fname = 'First Name Required'
      }
      if(!values.lname) {
        errors.lname = 'Last Name Required'
      }      
      if(!values.email || !emailRegex.test(values.email)) {
        errors.email = 'Valid Email Required'
      }
      if(!values.phone) {
        errors.phone = 'Phone Number Required'
      }
      return errors;
    }}
  >
  {() => (
    <div>
    <h1>My Site</h1>
    <div><Link to="/test-homepage">Test-Homepage</Link></div>
    <div><Link to="/contact">Contact</Link></div>
    <div><Link to="/posts_new">Posts</Link></div>
    <div><Link to="/">Go Home</Link></div> 
    <h1 style={{backgroundColor: "lightblue"}}>Contact Form!</h1> 
    <Form name="contact-demo" data-netlify={true}>
      <label htmlFor="fame">First Name: </label>
      <Field name="fname" />
      <ErrorMessage name="fname" /><br></br>

      <label htmlFor="lname">Last Name: </label>
      <Field name="lname" />
      <ErrorMessage name="lname" /><br></br>     

      <label htmlFor="email">Email: </label>
      <Field name="email" />
      <ErrorMessage name="email" /><br></br>

      <label htmlFor="phone">Message: </label>
      <Field name="phone" />
      <ErrorMessage name="phone" /><br></br>

      <button type="submit">Send</button><br></br>
    </Form>
    </div> 
  )}
  </Formik>
)


