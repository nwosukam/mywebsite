import './about.css';
import { Link } from "react-router-dom";
import logo from './logo2.png';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './back.png';
import sciencepic from './sciencepic.jpeg';
import museumpic from './museumpic.jpeg';
import codingkid from './codingkid.jpeg';
import comppic from './comppic.jpeg';
import musicapp from './musicappp.png';
import personal from './personal.jpeg';
import currentcoding from './currentcoding.jpeg';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function About() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);  };
  return (
    <section className='' id='yes2'>
    <Navbar expand="lg" className="p-3 w-75 w-md-100 w-sm-100 mx-auto rounded-5 fixed-top" id='nav3'>
      <Container>
         <img src={logo} alt="Kamsi's Avatar" width="50" height="50" className="d-inline-block align-text-top rounded-5"/>
        <Navbar.Brand href="#" className='ps-3 text-white'>NWOSU KAMSIYOCHUKWU</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link className="nav-link link-hover text-white" to="/mywebsite">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link active link-hover text-white" aria-current="page" to="/about">About</Link>
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
<section id='body-ab'>

    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={ExampleCarouselImage} alt="First Slide" id='slideimg' />
        <Carousel.Caption style={{ position: 'absolute', top: '10%', textAlign: 'left' }}>
          <h2>Where It All Started From</h2>
          <p style={{ fontSize:'20px'}}>My interest in science and technology didn’t begin with code — it started with curiosity. I’ve always enjoyed asking how things work and experimenting with ideas, whether that meant taking things apart, trying new tools, or exploring how technology shapes everyday life.</p>
          <div className='d-flex pt-3'>
          <img src={sciencepic} width='40%' style={{ height: '300px'}}/>
          <img src={museumpic} width='40%' className='ms-auto'/>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ExampleCarouselImage} alt="Second Slide" id='slideimg' />
        <Carousel.Caption style={{ position: 'absolute', top: '10%', textAlign: 'left' }}>
          <h2>Learning By Doing</h2>
          <p style={{ fontSize:'20px'}}>Some of my most important lessons came from hands-on experiences. From school science projects to experimenting with computers and software, I learned that trial and error is part of the process. Each challenge taught me patience, creativity, and how to think logically when things don’t work the first time.</p>
          <div className='d-flex pt-3'>
          <img src={codingkid} width='40%' style={{ height: '300px'}}/>
          <img src={comppic} width='40%' className='ms-auto'/>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ExampleCarouselImage} alt="Third Slide" id='slideimg' />
        <Carousel.Caption style={{ position: 'absolute', top: '5%', textAlign: 'left' }}>
          <h2>Discovering Software Engineering</h2>
          <p style={{ fontSize:'20px'}}>As I explored technology more deeply, I discovered software engineering. Writing my first lines of code showed me how ideas could turn into real, usable applications, and that feeling has kept me motivated ever since. Every project I work on helps me grow, not just as a developer, but as a thinker. I’ve learned how to stay curious, learn from mistakes, and improve with feedback.</p>
          <div className='d-flex pt-3'>
          <img src={musicapp} width='50%' style={{ height: '300px'}}/>
          <img src={comppic} width='40%' className='ms-auto'/>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ExampleCarouselImage} alt="Fourth Slide" id='slideimg' />
        <Carousel.Caption style={{ position: 'absolute', top: '0%', textAlign: 'left' }}>
          <h2>Looking Ahead</h2>
          <p style={{ fontSize:'20px'}}>My journey is still ongoing, and I’m excited about what’s ahead. I’m eager to learn from real-world experiences, collaborate with others, and continue building my skills in science and technology as I grow into my role as a software engineer.</p>
          <div className='d-flex pt-3'>
          <img src={personal} width='40%' style={{ height: '400px'}}/>
          <img src={currentcoding} width='40%' className='ms-auto'/>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</section>
  
  <section className='text-center text-light' id='footer-ab'>
    <div className='d-flex justify-content-center align-items-center gap-3 w-100' id='socials'>
            <a className='btn text-light link-hover'>
              <Link className="nav-link link-hove text-white" to="/mywebsite">Home</Link>
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

export default About;