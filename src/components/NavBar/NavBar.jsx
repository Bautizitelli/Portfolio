 import { Container, Navbar, Image, Nav, Row, Col, Button } from 'react-bootstrap';
 import { Link, useLocation } from 'react-router-dom';
 import style from './NavBar.module.css';
 import { useLanguage } from '../LanguageContext';

function NavBar() {
  const location = useLocation()
  const { pathname } = location
  const { language, toggleLanguage } = useLanguage();
  const proyects = language === 'es' ? 'PROYECTOS' : 'PROYECTS'
  const home = language === 'es' ? 'INCIO' : 'HOME'
  const contact = language === 'es' ? 'CONTACTO' : 'CONTACT'

  return (

    <div className={style.navbar}> 
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      <Image src="/perfil.jpg" roundedCircle className={style.image} />
         <Navbar.Brand>BAUTISTA ZITELLI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
          <Container>
            <Row>
              {pathname !== '/' && <Col className={style.column}><Link to="/" className={style.links}>{home}</Link></Col>}
              {pathname !== '/proyects' && <Col className={style.column}><Link to="/proyects" className={style.links}>{proyects}</Link></Col>}
              {pathname !== '/contact' && <Col className={style.column}><Link to="/contact" className={style.links}>{contact}</Link></Col>}
            </Row>
          </Container>
          </Nav>
            <div className={`d-flex align-items-center ${style.button}`}>
                <Button onClick={toggleLanguage} variant="outline-dark" >
                  {language === 'es' ? 'Switch to english' : 'Cambiar a español'}
                </Button>
              </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar; 