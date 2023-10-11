import React from "react"
import style from './Proyects.module.css'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiJavascript, SiSequelize, SiRedux, SiHtml5, SiCss3 } from 'react-icons/si'
import { useLanguage } from '../LanguageContext';


const Proyects=()=>{
  const { language } = useLanguage();

  const header = language === 'es' ? 'Mis proyectos:' : 'My proyects'
  const technologies = language === 'es' ? 'Tecnologias utilizadas:' : 'Technologies used:'
  const deployedProyect = language === 'es' ? 'Deploy del proyecto' : `Go to the projects deployment`
  const repository = language === 'es' ? 'Ir al repositorio' : 'Repository'
  const backEndRepository = language === 'es' ? 'Repositorio Back End' : 'Back End Repository'
  const frontEndRepository = language === 'es' ? 'Repositorio Front End' : 'Front End Repository'

  return (
    <div className={style.proyects}>
        <div className={style.textContainer}>
        <h2 className={style.textHeader}>{header}</h2>
        <Container>
      <Row>
        <Col>
          <Card className={style.proyectCard}>
            <Card.Body>
              <Card.Title className={style.proyectTitle}>
                {language === 'es' 
                ? 'Proyecto Individual de Henry:'
                : `Henry's individual proyect: `}
                </Card.Title>
              <Card.Text className={style.proyectDescription}>
                {language === 'es' 
                ? `Desarrollé una aplicación web individual en el bootcamp de Henry que permite explorar
                  países con una interfaz intuitiva. Destaco mis habilidades en Front End y Back End.`
                : `I developed an individual web application during the Henry bootcamp that allows users 
                  to explore countries through an intuitive interface. I excel in both front-end and back-end development.`}<br/>{technologies}<br/>
              </Card.Text>
              <Card.Text>
                <Container>
                  <Row>
                    <Col> <div className={style.techContainer}><span ><FaReact/> React</span></div> </Col>
                    <Col> <div className={style.techContainer}><span ><FaNodeJs/> NodeJS</span></div> </Col>
                  </Row>
                  <Row>
                    <Col> <div className={style.techContainer}><span ><SiJavascript/> JavaScript</span></div> </Col>
                    <Col> <div className={style.techContainer}><span ><SiSequelize/> Sequelize</span></div> </Col>
                  </Row> 
                  <Row>
                    <Col> <div className={style.techContainer}><span ><SiRedux/> Redux</span></div> </Col>
                    <Col></Col>
                  </Row> 
                </Container>                
              </Card.Text>                
            </Card.Body>           
          </Card>
            <span className={`d-flex justify-content-center ${style.buttonContainer}`}>
              <Button href='https://github.com/Bautizitelli/Henry-Countries-PI' target="_blank" rel="noopener noreferrer" variant="dark">{repository}</Button>
            </span>
        </Col>
        <Col>
          <Card className={style.proyectCard}>
            <Card.Body>
              <Card.Title className={style.proyectTitle}>
                {language === 'es' 
                ? 'Proyecto Final de Henry:'
                : `Henry's final proyect:`}</Card.Title>
              <Card.Text className={style.proyectDescription}>
                {language === 'es'
                ? `Participé en el desarrollo del Front End en un proyecto grupal para un e-commerce de supermercado, incluyendo diseño y lógica de descuentos.
                  También contribuí a un dashboard de administrador y un sistema de comentarios para compras, 
                  demostrando habilidades en diseño y desarrollo Front End.`
                : `I contributed to the front-end development of a group project for a supermarket e-commerce platform, including both design and discount logic. 
                  Additionally, I worked on an administrator dashboard and a comments system for purchases, showcasing my skills in front-end design and development`} <br/>{technologies}<br/>
              </Card.Text>
              <Card.Text>
                <Container>
                  <Row>
                    <Col> <div className={style.techContainer}><span ><FaReact/> React</span></div> </Col>
                    <Col> <div className={style.techContainer}><span ><FaNodeJs/> NodeJS</span></div> </Col>
                  </Row>
                  <Row>
                    <Col> <div className={style.techContainer}><span ><SiJavascript/> JavaScript</span></div> </Col>
                    <Col> <div className={style.techContainer}><span ><SiSequelize/> Sequelize</span></div> </Col>
                  </Row> 
                  <Row>
                    <Col> <div className={style.techContainer}><span><SiRedux/> Redux</span></div> </Col>
                    <Col> <div className={style.techContainer}><span><img src="/reactadmin-logo.png" height='12px' alt="not found"/>React Admin </span></div></Col>
                  </Row>
                  <Row>
                    <Col> <Button href='https://github.com/alemannc/Super-market-shop' 
                            target="_blank" rel="noopener noreferrer"
                            className={style.repoButton} variant="dark">
                              {backEndRepository}</Button> </Col>
                    <Col> <Button href='https://github.com/MatiasIvanM/Super-market-Repo-FrontEnd' 
                            target="_blank" rel="noopener noreferrer" 
                            className={style.repoButton} variant="dark">
                              {frontEndRepository} </Button></Col>
                  </Row>
                </Container>                
              </Card.Text> 
            </Card.Body>
          </Card>
            <span className={`d-flex justify-content-center ${style.buttonContainer}`}>
              <Button href='https://supermarketpreview.vercel.app' target="_blank" rel="noopener noreferrer" variant="dark">{deployedProyect}</Button>
            </span>
        </Col>
        <Col>
          <Card className={style.proyectCard}>
            <Card.Body>
              <Card.Title className={style.proyectTitle}>Landing page para un local comercial :</Card.Title>
              <Card.Text className={style.proyectDescription}>
               {language === 'es' 
                ? `Creé una landing page minimalista y elegante para un local de ropa. Incluye un carrousel dinámico, 
                enlaces directos para contacto (WhatsApp e Instagram) y ubicación en Google Maps. 
                Responsive y con un botón para cambiar entre modo claro y oscuro, ofrece una experiencia visual y de usuario atractiva y funcional.`
                : `I developed a minimalist and elegant landing page for a clothing store, featuring a dynamic carousel, direct contact links (WhatsApp and Instagram), 
                  and Google Maps location integration. Responsive and equipped with a toggle button for switching between light and dark modes, it provides an attractive 
                  and functional visual and user experience.`}
                <br/>{technologies}<br/>
              </Card.Text>
              <Card.Text>
                <Container>
                  <Row>
                    <Col> <div className={style.techContainer}><span ><SiJavascript/> JavaScript</span></div> </Col>
                    <Col> <div className={style.techContainer}><span ><SiHtml5/> HTML</span></div> </Col>
                  </Row> 
                  <Row>
                    <Col> <div className={style.techContainer}><span><SiCss3/> CSS</span></div> </Col>
                    <Col></Col>
                  </Row>
                </Container>                
              </Card.Text> 
              <span className="d-flex justify-content-center">
              <Button href='https://github.com/Bautizitelli/Bautizitelli.github.io' target="_blank" rel="noopener noreferrer" variant="dark">{repository}</Button>
              </span>
            </Card.Body>
          </Card>
            <div className={`d-flex justify-content-center ${style.buttonContainer}`}>
              <Button href='https://bautizitelli.github.io/' target="_blank" rel="noopener noreferrer" variant="dark">{deployedProyect}</Button>
            </div>
        </Col>
      </Row>
    </Container>
      </div>
    </div>
  );
}

export default Proyects
