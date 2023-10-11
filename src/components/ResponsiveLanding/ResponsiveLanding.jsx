import React from "react"
import style from './ResponsiveLanding.module.css'
import { useLanguage } from '../LanguageContext';


const ResponsiveLanding=(props)=>{
  const { language } = useLanguage();
  const header = language === 'es' ? 'Hola! Soy Bautista Zitelli.' : 'Hi! Im Bautista Zitelli';
  const landingText = language === 'es' 
  ? `Un desarrollador Full Stack graduado de Henry. Mi experiencia se centra en construir soluciones tecnológicas sólidas y escalables.
    Apasionado por la innovación, estoy comprometido en crear productos de calidad y optimizar procesos para empresas líderes en el mercado.`
  : `A Full Stack developer graduated from Henry. My expertise lies in building robust and scalable technological solutions. 
  Passionate about innovation, I am dedicated to creating high-quality products and optimizing processes for market-leading companies.`
  const landingInfo = language === 'es' 
  ? 'Puedes ver mis proyectos y mis datos de contacto haciendo clic en los enlaces de la barra superior.' 
  : 'You can see my proyects and my contact info by clicking the links from the top bar'

  return (
    <div className={style.landing}>
      <div className={style.textContainer}>
        <h1 className={style.textHeader}>{header}</h1>
        <p className={style.text}>{landingText}<br />{landingInfo}
           </p>
      </div>
    </div>
  );
}

export default ResponsiveLanding
