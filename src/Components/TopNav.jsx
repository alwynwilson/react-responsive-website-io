import React from 'react'
import logo from '../assets/Logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TopNav() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" className='me-2'/>Nexcent</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#features">Gallery</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><button className=' text-' style={{background:'white',border:'none',borderRadius:"5px",padding:'8px'}}>Log In</button></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <button className=' text-light' style={{background:'green',border:'none',borderRadius:"5px",padding:'8px'}}>Sign up</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    // <div className="container">
    //     <div id="header">
    //       <div className="row">
    //         <div className="col-lg-3">
    //           <h2 className='mt-2'><img src={logo} alt="" className='me-2'/>Nexcent</h2>
    //         </div>
    //         <div className="col"></div>
    //         <div className="col-lg-6 nav-right d-flex mt-2 ms-5">
    //             <a href="" style={{fontSize:'20px',marginTop:'12px',marginRight:'80px',textDecoration:'none',color:'black'}}>Home</a>
    //             <a href="" style={{fontSize:'20px',marginTop:'12px',marginRight:'80px',textDecoration:'none',color:'black'}}>About</a>
    //             <a href="" style={{fontSize:'20px',marginTop:'12px',marginRight:'80px',textDecoration:'none',color:'black'}}>Gallery</a>
    //             <a href="" style={{fontSize:'20px',marginTop:'12px',marginRight:'25px',textDecoration:'none',color:'black'}}>Contact</a>
    //         </div>
    //         <div className="col-lg-2">
    //           <button className='mt-3 ms-3 text-' style={{marginTop:'12px',background:'white',border:'none',borderRadius:"5px",padding:'8px'}}>Log In</button>
    //           <button className='mt-3 ms-3 text-light' style={{marginTop:'12px',background:'green',border:'none',borderRadius:"5px",padding:'8px'}}>Sign up</button>

    //         </div>
    //       </div>
    //     </div>
    //   </div>
  )
}

export default TopNav