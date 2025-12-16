import './Experience.css';
import { Link } from "react-router-dom";
import logo from './logo2.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Accordion from 'react-bootstrap/Accordion';
import AccordionBody from 'react-bootstrap/AccordionBody'
import AccordionHeader from 'react-bootstrap/AccordionHeader'
import AccordionItem from 'react-bootstrap/AccordionItem'
import java from './javascript.png'
import calc from './calculator.png'
import react from './react.png'
import chos from './chos.png'
import boot from './bootstrap.png'
import andrew from './andrew.png'
import bc from './bc.jpg'
import api from './api.png'
import c14 from './c14logo.jpg'
import html from './html.png'
import css from './css.png'
import musicapp from './musicappp.png'
import smiley from './smiley.png'
import { FaLinkedin } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

function Experience() {
  return (
    <section className='' id='main-exp'>
    <Navbar expand="lg" className="p-3 w-75 w-md-100 w-sm-100 mx-auto rounded-5 fixed-top" id='nav4'>
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
              <Link className="nav-link active link-hover text-white" aria-current="page" to="/experience">Experience</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link link-hover text-white" to="/contact">Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
<section id='body-exp'>
  {/* <Accordion className='mx-auto pt-5' id='acc'>
      <AccordionItem eventKey="0" id='item1'>
        <AccordionHeader id='head1'>Accordion Item #1</AccordionHeader>
        <AccordionBody id='body1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </AccordionBody>
      </AccordionItem>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
       <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>   */}
<div id='intro' className='text-center'>
    <h1>Most of my software developing journey has been with the <br />Code14 Labs company.</h1>
    <div id='company'>
<img alt='logo' src={c14}/> 
<a className='text-white btn d-flex gap-1' href='http://code14-Labs.tech'><MdLanguage className='spec' size={28} color="#ffffffff" /><p className='link-hover'>Company Website</p></a>
<a className='text-white btn d-flex gap-1' href='https://www.linkedin.com/company/code-4teen/'> <FaLinkedin className='spec' size={28} color="#0a66c2" /><p className='link-hover'>Linkedin Page</p></a>
    </div> 

      <h2>Code4Teen Labs Internship Experience</h2>
      <p id='intop'>Code4Teen Labs is a tech company that focuses on teaching coding to teenagers and kids. During my time with Code4Teen Labs, I have had the opportunity to work on various projects and gain valuable experience in software development. Below is a summary of my experience with the company over the years:</p> 

   </div>   
    <div className='d-flex gap-5 flex-column justify-content-center align-items-center mb-5 pb-5' id='pallets-div'>

    <div id='pallets'>
    <h3 id='year'>2022</h3>
    <div id='content'>
      <p>This year I joined the team not yet as an intern but under the mentorship of the company owner. This year I started learning the basics of Javascript. I learnt the core concepts of how variables, functions, objects and arrays worked. I was then able to implement some of those core concepts into some simple tools like a calculator app, a to-do list and other apps</p>
    </div>
    <div id='image-div'>
      <img src={java} width='70px'/>
      <img src={calc} width='70px'/>
    </div>
    </div>

   <div id='pallets'>
    <h3 id='year'>2023</h3>
    <div id='content'>
      <p>This year, I was accepted as an intern where I supported various company activities. I helped train ICT teachers from different schools by explaining HTML and CSS during in-person sessions. I also contributed to the development of the Coscharis Motors website by attending project meetings, documenting minutes, and supporting implementation based on client requirements. Additionally, I strengthened my JavaScript skills by learning the React framework, including components, props, state, and hooks.
</p>
    </div>
    <div id='image-div'>
      <img src={react} width='70px'/>
      <img src={chos} width='70px'/>
    </div>
    </div>

   <div id='pallets'>
    <h3 id='year'>2024</h3>
    <div id='content'>
      <p>In 2024, I completed a summer internship where I created and formatted coding task hints for the Andrew Teaches Coding learning book, participated in outreach events such as Code4Teen at Tech Fest Lagos, and provided one-on-one coding support to children. I also developed the company website footer using React, Bootstrap, and CSS, managed student login details for Starfields Schools on the Andrew Teaches Coding Learning Book, and improved my Bootstrap 5 styling skills.
</p>
    </div>
    <div id='image-div'>
      <img src={boot} width='70px'/>
      <img src={andrew} width='70px'/>
    </div>
    </div>

   <div id='pallets'>
    <h3 id='year'>2025</h3>
    <div id='content'>
      <p>In 2025, I supported ICT teacher training by explaining HTML and CSS during in-person sessions and represented Code4Teen at the British Council. I helped design some parts of the Teacher Interface for creating and managing assessments in the Andrew Teaches Coding book and strengthened my skills in API usage and backend integration.

</p>
    </div>
    <div id='image-div'>
      <img src={bc} width='70px'/>
      <img src={api} width='70px'/>
    </div>
    </div>
    </div>
<h1>Here are the programming languages I have learnt,</h1>
    <div id='lang' className='d-flex justify-content-center align-items-center gap-3 p-2 mb-5 pb-5'>
<div>
  <img src={html} width='70px'/>
  <h3>HTML</h3>
  <p>HTML (HyperText Markup Language) is the standard language used to create and structure web pages. It uses tags like h1, p, img, a tags to define elements such as links, text, images and forms which make up the basic structure of the webpage.</p>
</div>
<div>
  <img src={css} width='70px'/>
  <h3>CSS</h3>
  <p>CSS (Cascading Style Sheets) is a language used to control the appearance of web pages. It defines styles like colors, fonts, layouts, spacing, and animations, allowing you to make websites look attractive and consistent.</p>
</div>
<div>
  <img src={java} width='70px'/>
  <h3>JavaScript</h3>
  <p>JavaScript is a programming language used to make web pages interactive and dynamic. It allows websites to respond to user actions, update content without reloading, and control elements like buttons, forms, animations, and games</p>
</div>
<div>
  <img src={react} width='70px'/>
  <h3>React</h3>
  <p>React is a JavaScript library used to build fast and reusable user interfaces, especially for single-page applications. It uses components to break the UI into small, manageable pieces and updates the page efficiently when data changes.</p>
</div>
<div>
  <img src={boot} width='70px'/>
  <h3>Bootsrtap</h3>
  <p>Bootstrap is a popular CSS framework used to build responsive and mobile-friendly websites quickly. It provides ready-made components like buttons, navbars, grids, and forms, along with a flexible layout system.</p>
</div>
    </div>
<h1>And here are some personal project I've worked on myself,</h1>
 <div id='proj' className='d-flex justify-content-center align-items-center p-2'>
  <div>
  <a href='https://kamsi-music-player.netlify.app'><img src={musicapp} width='300px'/></a>
   <a href='https://kamsi-music-player.netlify.app' className='btn text-white link-hover'> <h3>Music Player App</h3> </a>
  <p>I built a Music Player App that allows users to search for songs and play them easily. It provides many songs based on the search you've put in with the album cover and the artists. The app includes basic playback controls and a responsive, user-friendly interface, demonstrating my ability to create functional and interactive web applications.</p>
  </div>
    <div>
  <a href='https://smiley-rush1011.netlify.app/'><img src={smiley} width='300px'/></a>
   <a href='https://smiley-rush1011.netlify.app/' className='btn text-white link-hover'><h3>Mood Text Generator</h3></a>
  <p>I built a Mood Text Generator App that generates context-appropriate text based on the mood selected by the user. The app offers multiple mood options and instantly produces text that reflects the chosen emotional tone. It demonstrates dynamic content generation and a clean, responsive interface, making it a strong example of interactive web application development.</p>
  </div>
 </div>
</section>
  
  <section className='text-center text-light' id='footer-exp'>
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

export default Experience;