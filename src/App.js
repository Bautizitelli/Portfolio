import React from 'react';
import './transitions.css';
import { Route, Routes, useLocation } from "react-router-dom"
import CarrouselProyects from './components/CarrouselProyects/CarrouselProyects';
import ResponsiveContact from './components/ResponsiveContact/ResponsiveContact'
import ResponsiveLanding from './components/ResponsiveLanding/ResponsiveLanding'
import Landing from "./components/Landing/Landing"
import  NavBar  from "./components/NavBar/NavBar"
import boxcopia from './images/boxcopia.jpg'
import Contact from './components/Contact/Contact';
import Proyects from './components/Proyects/Proyects';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useMediaQuery } from 'react-responsive';
import { LanguageProvider } from './components/LanguageContext';

function App() {

  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const location = useLocation();
  const appStyles = {
    backgroundImage: `url(${boxcopia})`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover', 
    backgroundPosition: 'center center',
    height: '100vh',
    // overflow: 'hidden'
  };
  return (
    <LanguageProvider>
    <TransitionGroup className="transition-group">
    <CSSTransition
      key={location.key}
      classNames="route-section"
      timeout={300}
    >
           <section className="route-section">
    <div style={appStyles}>
      {/* <Sidebar/>  */}
      <NavBar/>
      <Routes>
          <Route path="/" element={isSmallScreen ? <ResponsiveLanding /> :<Landing />}/>
          <Route path="/proyects" element={isSmallScreen ? <CarrouselProyects /> : <Proyects />}/>
          <Route path="/contact" element={isSmallScreen ? <ResponsiveContact /> : <Contact />}/>
          {/* <Route path="/" element={<Landing />}/> */}
          {/* <Route path="/contact" element={<Contact />}/> */}
          {/* <Route path="/proyects" element={<Proyects/>}/> */}
      </Routes>
    </div>
    </section>
      </CSSTransition>
    </TransitionGroup>
    </LanguageProvider>

  );
}

export default App;