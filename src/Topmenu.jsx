import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

import { FcHeatMap } from 'react-icons/fc';
import { FaRegCopyright } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Topmenu() {
  return (
    <IconContext.Provider value={{ size: '2em', color: 'orange' }}>
      <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
        <Container>
          <Navbar.Brand as='div'>
            <FcHeatMap /> &nbsp;
            <Link className='link'>Nuevos Comienzos Madrid</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as='div'>
                <NavLink className='link' to='/servicios'>
                  Servicios y Sanidad
                </NavLink>
              </Nav.Link>
              <Nav.Link as='div'>
                {' '}
                <NavLink className='link' to='/programas'>
                  Ayudas y Programas Sociales
                </NavLink>
              </Nav.Link>
              <Nav.Link as='div'>
                {' '}
                <NavLink className='link' to='/transportes'>
                  Transporte
                </NavLink>
              </Nav.Link>
              <Nav.Link as='div'>
                {' '}
                <NavLink className='link' to='/actividades'>
                  Ocio y Actividades
                </NavLink>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <small>Carlos de Miguel Díaz</small>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </IconContext.Provider>
  );
}

export default Topmenu;
