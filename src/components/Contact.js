import './Contact.css';
import { Link } from "react-router-dom";
import logo from './logo2.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { set, useForm } from "react-hook-form"
import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Typewriter from 'typewriter-effect';

function Contact() {
  //   const { register, handleSubmit, formState: { errors } } = useForm()
  // const onSubmit = (data) => console.log(data)
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [messageLength, setMessageLength] = useState(0);

  const [status, setStatus] = useState("");
   const [loading, setLoading] = useState(false);
  //  const onSubmit = async (data) => {
  //   try {
  //     const response = await emailjs.send(
  //       "service_ai4qjhe",
  //       "template_6mhz8ya",
  //       data,
  //       "40pNRrU7M0A9Zu7QQ"
  //     );

  //     setStatus("Message sent successfully!");
      
  //   } catch (error) {
  //     console.error(error);
  //     setStatus("Failed to send message. Try again.");
  //   }
  // };

  const sendEmail = (e) => {
    setLoading(true);
    emailjs.sendForm('service_ai4qjhe', 'template_6mhz8ya', form.current, '40pNRrU7M0A9Zu7QQ')
      .then(() => {
          alert('Message sent successfully!');
           setLoading(false);
          form.current.reset();
      }, (error) => {
          alert('Failed to send message, please try again', error.text);
           setLoading(false);
      }
    );
  }
    

  return (

 <section className='' id='main-con'>
    <Navbar expand="lg" className="p-3 w-75 w-md-100 w-sm-100 mx-auto rounded-5 fixed-top" id='nav'>
      <Container>
         <img src={logo} alt="Kamsi's Avatar" width="50" height="50" className="d-inline-block align-text-top rounded-5"/>
        <Navbar.Brand href="#" className='ps-3 text-white'>NWOSU KAMSIYOCHUKWU</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link className="nav-link link-hover text-white" to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link link-hover text-white" to="/about">About</Link>
              </Nav.Link>    
            <Nav.Link>
              <Link className="nav-link link-hover text-white" to="/experience">Experience</Link>
            </Nav.Link>
            <Nav.Link>
               <Link className="nav-link active link-hover text-white" aria-current="page" to="/contact">Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
<section id='body-con'>
    {/* <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="email" {...register("email", { required: true })} />
      <textarea
      {...register("text", { required: true })} 
      style={{
        width: '500px',
        height: '200px',
      }} />
      {errors.firstName && <span>This field is required</span>}
      {errors.email && <span>This field is required</span>}
      <input type="submit" />
    </form> */}

    
    <h1 style={{ textAlign: "center", color: "white" }}>Contact Me</h1>
        <h2 style={{ textAlign: "center", marginTop: "10px", color: "white" }}>kamsee417@gmail.com</h2>
        <h2 style={{ textAlign: "center", marginTop: "10px", color: "white" }}>nwosukam333@gmail.com</h2>
        <h2 style={{ textAlign: "center", marginTop: "10px", color: "white" }}>+234 7066679419</h2>
      <form
      ref={form}
      onSubmit={handleSubmit(sendEmail)}
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "20px",
        color: "white",
        borderRadius: "10px",
        boxShadow: "0 0 100px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(133, 133, 133, 0.7)",
      }}
    >
      <h2>Send Email</h2>

      {/* NAME */}
      <div id='inputs' style={{
        display: "flex",
        flexDirection: "row",
      }}>
        <div 
        id='label-inputs'
        style={{      
            display: "flex",
        flexDirection: "column",
        marginRight: "200px",
        gap: "5px",
}}>
        <label>Your Name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          style={{ width: "160%", padding: "5px" }}
        />
        {errors.name && (
          <p style={{ color: "red", fontSize: "14px" }}>{errors.name.message}</p>
        )}
      

      {/* EMAIL */}
      
        <label>Your Email</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          style={{ width: "160%", padding: "5px"}}
        />
        {errors.email && (
          <p style={{ color: "red", fontSize: "14px" }}>{errors.email.message}</p>
        )}
      

      {/* SUBJECT */}
      
        <label>Subject</label>
        <input
          type="text"
          {...register("subject", { required: "Subject is required" })}
          style={{ width: "160%", padding: "5px" }}
        />
        {errors.subject && (
          <p style={{ color: "red", fontSize: "14px" }}>
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* MESSAGE */}
      <div>
        <label>Message</label>
        <textarea
        id='textarea'
          rows="5"
          {...register("message", {
            required: "Message cannot be empty",
            maxLength: {
              value: 600,
              message: "Maximum 600 characters allowed",
            },
            onChange: (e) => setMessageLength(e.target.value.length),
          })}
          style={{ width: "120%", padding: "5px", height: "300px" }}
        ></textarea>

        {/* CHARACTER COUNTER */}
        <div style={{ textAlign: "right", fontSize: "14px" }}>
          {messageLength}/600
        </div>

        {errors.message && (
          <p style={{ color: "red", fontSize: "14px" }}>
            {errors.message.message}
          </p>
        )}
      </div>
</div>
      <button
        type="submit"
        style={{
          padding: "12px",
          background: "rgba(58, 56, 56, 0.7)",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {loading ? <Typewriter options={{
    strings:[
      "Sending...",],
     autoStart: true,
     loop: true,
       cursor: '_', 
       delay: 40,
       deleteSpeed: 50  }}/> : 'Send Email'}
      </button>
    </form>
</section>
  
  <section className='text-center text-light' id='footer-con'>
    <div className='d-flex justify-content-center align-items-center gap-3 w-100' id='socials'>
            <a className='btn text-light link-hover'>
              <Link className="nav-link link-hover text-white" to="/">Home</Link>
            </a>
            <a className='btn text-light link-hover' href="https://github.com/Kamsi245">Github</a>
            <a className='btn text-light link-hover' href="https://www.linkedin.com/in/kamsiyochukwu-nwosu-871ba8390/">LinkedIn</a>
            <a className='btn text-light link-hover' href="#">
              <Link className="nav-link link-hover" to="/contact">Contact</Link>
            </a>
      </div>
      <hr className='bg-light' id='footline'/>
    <div>
      <p className='m-0'>© 2025 Kamsi Nwosu. All rights reserved.</p>
    </div>
  </section>
    </section>
  );
}

export default Contact;