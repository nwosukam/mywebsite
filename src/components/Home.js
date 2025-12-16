
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import test from'../test.pdf';
import { Link } from "react-router-dom";
import logo from './logo2.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <section className='' id="main">


    <Navbar expand="lg" className="p-3 w-75 w-md-100 w-sm-100 mx-auto rounded-5 fixed-top" id='nav2'>
      <Container>
         <img src={logo} alt="Kamsi's Avatar" width="50" height="50" className="d-inline-block align-text-top rounded-5"/>
        <Navbar.Brand href="#" className='ps-3 text-white'>NWOSU KAMSIYOCHUKWU</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link className="nav-link active link-hover text-white" aria-current="page" to="/mywebsite">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link link-hover text-white" to="/about">About</Link>
              </Nav.Link>    
            <Nav.Link>
              <Link className="nav-link link-hover text-white" to="/experience">Experience</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link link-hover text-white" to="/contact">Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  <section  className='d-flex justify-content-center align-items-center' id='body'>
    <div className='w-75 text-white'>
<h1>Hi,<br/> I'm Kamsiyochukwu (Kamsi) Nwosu.</h1>
<div className='d-flex gap-3' id='typewriter-div'>
  <h1>I'm   </h1>
  <h1 id='typewriter'><Typewriter options={{
    strings:[
      "<span id='red'>a coding talent</span>", 
      "<span id='blue'>a developer</span>", 
      "<span id='green'>a logical thinker</span>",
       "<span id='yellow'>an analyzer</span>"],
     autoStart: true,
      loop: true,
       cursor: '_', 
       delay: 90,
       deleteSpeed: 40  }}/>
       </h1>
       </div>
<p>I’m a Coding Talent with a passion for creativity, problem-solving, and continuous learning. I enjoy transforming ideas into interactive, functional, and appealing digital experiences. Whether it’s developing sleek websites, building responsive user interfaces, or optimizing backend logic, I take pride in writing code that truly makes a difference.</p>
<div className='d-flex gap-3'>
<a className='btn btn-outline-secondary text-light' href={test} download='Kamsi Nwosu Resume'>Download Resume</a>
<button className='btn btn-outline-secondary text-light'>
  <Link className="nav-link" to="/experience">See My Work</Link>
  </button>
</div>
</div>

  </section>
  <section className='text-center text-light' id='footer'>
    <div className='d-flex justify-content-center align-items-center gap-3 w-100' id='socials'>
            <a className='btn text-light link-hover'>
              <Link className="nav-link link-hover" to="/mywebsite">Home</Link>
              </a>
            <a className='btn text-light link-hover' href="https://github.com/Kamsi245">Github</a>
            <a className='btn text-light link-hover' href="https://www.linkedin.com/in/kamsiyochukwu-nwosu-871ba8390/">LinkedIn</a>
            <a className='btn text-light link-hover'>
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

export default Home;
{/* <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: "#333" }} /> */}