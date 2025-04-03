import { Fragment, useState } from "react";
import emailjs from 'emailjs-com';
import classes from "./Contact.module.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ji1de1l', 'template_u1yzk57', e.target, 'NSwcs1l_iN3ZChMvX')
    .then((result) => {
      setFormData({emai: "", subject: "", message: ""});
    })
    .catch((error) => console.error("Error sending email: ", error));
  };
  return (
    <Fragment>
      <div className={classes.content}>
      <h2>Contact Me</h2>
        <form className={classes.form} onSubmit={handleSubmit}>
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />

          <label>Subject</label>
          <input 
            type="text" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
            required 
          />

          <label>Message</label>
          <textarea 
            name="message" 
            rows="4" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          ></textarea>

          <button className={classes.button} type="submit">Send Message</button>
        </form>
      </div>
    </Fragment>
  )
}

export default Contact;