import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
// import './Navbarr.css';

const Navbarr = () => {
    const navigate = useNavigate();

  return (
    <>
      <Navbar expand="lg" className='navigasi' style={{backgroundColor: 'darkblue'}}>
      <Container style={{backgroundColor: 'darkblue'}}>
        <Navbar.Brand href="#home" style={{color:"yellow",fontWeight: "bold"}}>Movie Addict</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=> navigate('/')} style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link onClick={()=> navigate('/now-playing')} style={{color:"white"}}>Now Playing</Nav.Link>
            <Nav.Link onClick={()=> navigate('/popular')} style={{color:"white"}}>Popular</Nav.Link>
            <Nav.Link onClick={()=> navigate('/top-rated')} style={{color:"white"}}>Top Rated</Nav.Link>
            <Nav.Link onClick={()=> navigate('/up-coming')} style={{color:"white"}}>Up Coming</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navbarr;