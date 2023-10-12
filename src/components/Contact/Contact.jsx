import React from "react"
import style from './Contact.module.css'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { BsLinkedin, BsGithub, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { useLanguage } from '../LanguageContext';


  const Contact=()=>{
  const { language } = useLanguage();

  const header = language === 'es' ? 'Contactame!' : 'Contact me !'

  const emailMe = language === 'es' 
  ? 'O puedes enviarme un mail a: bautista.zitelli11@gmail.com'
  : 'Or you can send me an email at: bautista.zitelli11@gmail.com'

  const text = language === 'es'
  ? 'Podés contactarme por los siguientes medios, haciendo clic en los iconos:'
  : 'You can contact me through the following means by clicking on the icons:'

  const resumeButton = language === 'es'? 'Descargar mi cv': 'Download my resume'
  const resume = language === 'es' ? './Bautista-Zitelli-ES.pdf' : './Bautista-Zitelli-EN.pdf'

       return (
         <div className={style.contact}>
           <div className={style.textContainer}>
             <h1 className={style.textHeader}>{header}</h1>
             <p className={style.text}>{text}</p>
             <Container>
               <Row>
                 <Col>
                   <button className={style.iconButton} >
                     <a href="https://www.linkedin.com/in/bautistazitelli"  className={style.links}  target="_blank" rel="noopener noreferrer">
                       <BsLinkedin className={style.icon}/><br />LinkedIn
                       </a>
                   </button>
                 </Col>
                 <Col>
                   <button className={style.iconButton} >
                     <a href="https://www.instagram.com/bautizitelli/" className={style.links} target="_blank" rel="noopener noreferrer">
                       <BsInstagram className={style.icon}/><br />Instagram
                       </a>  
                   </button>
                 </Col>
                 <Col>
                   <button className={style.iconButton} >
                     <a href="https://github.com/Bautizitelli" className={style.links} target="_blank" rel="noopener noreferrer">
                       <BsGithub className={style.icon}/><br />GitHub
                       </a>  
                   </button>
                 </Col>
                 <Col>
                   <button className={style.iconButton} >
                     <a href="https://wa.me/543435171267" className={style.links} target="_blank" rel="noopener noreferrer">
                        <BsWhatsapp className={style.icon}/><br />WhatsApp
                      </a>  
                   </button>
                </Col>
               </Row>
             </Container>
              <ul className={style.contactList}>
               <li>{emailMe}</li>
             </ul> 
           </div>
             <Button className={style.button} variant="dark" ><a className={style.cvLink} href={resume} download>{resumeButton}</a></Button> 
           
         </div>
       );
     }
     
     export default Contact