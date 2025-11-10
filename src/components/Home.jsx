import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.body.classList.contains("modo-oscuro"));
    });
    observer.observe(document.body, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="home">
      <div className="card cardmain, page">
        <div className="logo-home-container">
          <img
            src={isDarkMode ? "/images/logooscuro.png" : "/images/logo.png"}
            alt="Logo CodeBolts Six Evolution"
            className="logo-home-img"
          />
        </div>
        
        <h1>Desarrollo Front End — TP3 SPA React</h1>
        <p style={{fontFamily:'var(--font-alt)'}}>
          Proyecto migrado desde TP2. Equipo: <b>Neuyin</b> & <b>Erick</b>. De cinéfilos, para cinéfilos. 
        </p>
      </div>

      
      <div className="card">
        <h2>🎬 Sobre Nosotros</h2>
        <p>
          Somos <b>Neuyin</b> y <b>Erick</b>, un dúo de estudiantes de la
          Tecnicatura en Desarrollo de Software apasionados por el cine y la
          creación digital. Este proyecto forma parte de la materia{" "}
          <b>Desarrollo Web Frontend</b> y representa la evolución de nuestro
          trabajo en equipo, fusionando diseño, tecnología y creatividad bajo la
          identidad de <b>CodeBolts Six</b>.
        </p>
        <p>
          A través de esta página buscamos reflejar nuestra afinidad por el
          séptimo arte y la estética visual, utilizando herramientas modernas de
          desarrollo web como <b>React</b> y <b>Vite</b> para construir una
          experiencia fluida, atractiva y accesible. Nuestro propósito es
          demostrar la capacidad de unir técnica y expresión artística,
          aplicando buenas prácticas de programación, maquetación y diseño
          adaptable.
        </p>
        <p>
          Con este proyecto consolidamos competencias técnicas, fomentamos el
          trabajo colaborativo y reforzamos nuestro perfil profesional dentro
          del ámbito del desarrollo frontend, integrando conocimientos
          adquiridos a lo largo de la carrera y nuestra pasión por el cine.
        </p>
      </div>

      
      <div className="card">
        <h2>🎥 Integrantes</h2>
        <p>
          Accedé al perfil de cada uno de nosotros para conocer más sobre nuestros intereses y habilidades.
        </p>

        <div className="integrantes">
          <div className="card-integrante">
            <img src="/images/neuyin.png" alt="Perfil Neuyin" />
            <h3>Neuyin</h3>
            <NavLink to="/neuyin" className="btn-perfil">
              Ver Perfil
            </NavLink>
          </div>

          <div className="card-integrante">
            <img src="/images/erick.png" alt="Perfil Erick" />
            <h3>Erick</h3>
            <NavLink to="/erick" className="btn-perfil">
              Ver Perfil
            </NavLink>
          </div>
        </div>
      </div>

      
      <div className="card">
        <h2>🎯 Objetivos</h2>
        <ul>
          <li>Mejora de la Interfaz: Animaciones Suaves.</li>
          <li>Búsqueda/Filtrado en JSON Local.</li>
          <li>Paginación para la API Externa.</li>
           <li>Galería de Imágenes Interactiva.</li>
          <li>Barras de Progreso de Habilidades.</li>
          <li>Botones de Redes Sociales Animados.</li>
          <li>Carrusel de Proyectos Destacados.</li>
          <li>Publicar en Vercel con README y bitácora actualizados.</li>
        </ul>
      </div>
    </section>
  );
}