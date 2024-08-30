import React from 'react';
import content from './content.json';
import { Navbar } from '@/components/navbar/Navbar';
import { Submission } from '@/components/submission/submission';
import { Carousel } from '@/components/carrusel/Carousel';
import { About } from '@/components/about/About';
import { Projects } from '@/components/projects/Projects';
import { Contacts } from '@/components/contacts/Contacts';
import { Footer } from '@/components/footer/Footer';
import { VisitCounter } from '@/components/visitCounter/VisitCounter';
import "./Page.css";


export function Page() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    { text: "Inicio", id: "home" },
    { text: "Sobre mi", id: "aboutme" },
    { text: "Portafolio", id: "projects" },
    { text: "Contacto", id: "contacts" }
  ];

  return (
    <div className="page">
      <div id="home" className="submission component">
        <Submission />
      </div>
      <div className="navbar component">
        <Navbar brand="Menu" links={links} onLinkClick={scrollToSection} />
      </div>      
      <div id="aboutme" className="aboutme component">
        <About />
      </div>
      <div id="carousel" className="carousel component">
        <Carousel />
      </div>
      <div id="projects" className="projects component">
        <p className="title-section">{content.page.moduleproject}</p>
        <Projects />
      </div>
      {/* <div id="contacts" className="contacts component">
        <Contacts />
      </div> */}
      <div className="footer component">
        <Footer />
      </div>
        <VisitCounter />
    </div>
  );
}
