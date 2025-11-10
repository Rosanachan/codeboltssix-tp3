import React from "react";
import CarruselProyectos from "../components/CarruselProyectos";

export default function PerfilNeuyin() {
  const proyectosNeuyin = [
  {
    titulo: "🎨 Ellas Emprenden",
    descripcion:
      "Sitio Web creado por emprendedoras para dar visibilidad a los proyectos comerciales de otras emprendedoras.",
    img: "/images/ellasemprenden.jpg",
    link: "https://proyectoellasemprenden.netlify.app/",
  },
  {
    titulo: "🎬 Descubrir Argentina",
    descripcion:
      "Galería turística sobre lugares menos concurridos pero igual de fascinantes para conocer al país.",
    img: "/images/argentina.jpg",
    link: "https://cac-python-descubrirargentina.netlify.app/",
  },
  {
    titulo: "💻 Level Store",
    descripcion:
      "Tienda online centrada en diseño limpio, suscripción y estética minimalista.",
    img: "/images/sololevel.jpg",
    link: "https://levelstore.netlify.app/",
  },
];


  return (
    <section className="perfil-neuyin">
      {/* ENCABEZADO */}
      <header id="mainheader" className="hero">
        <div className="hero-content">
          <img
            src="/images/neuyin.png"
            alt="Neuyin"
            className="foto-perfil"
          />
          <h1 className="titulo-neuyin">Hola, soy Neuyin Herrera 🌸</h1>
          <p>Tengo 35 años, vivo en CABA y tengo una nena llamada Agatha.</p>
          <p>
            Amo el cine y la cultura japonesa. Mi pasatiempo es editar fotos y
            videos.
          </p>
        </div>
      </header>

      {/* HABILIDADES */}
      <section className="habilidades">
        <div className="habilidades-contenido">
          <div className="habilidades-texto">
            <h2>Estas son mis habilidades principales</h2>
          </div>

          <div className="habilidades-cards">
            <div className="glass-card">
              <h3>🎬 Edición</h3>
              <p>
                Desde 2012 tengo como hobbie tomar fotos y grabar videos para
                crear estilos creativos y narrativos con postproducción.
              </p>
              <div className="card-skill-bar">
                <span
                  className="card-skill-progress"
                  style={{ "--progress": "90%" }}
                ></span>
              </div>
            </div>

            <div className="glass-card">
              <h3>🎉 Decoración</h3>
              <p>
                Puedo pasar horas realizando tareas manuales decorativas. Me
                gusta darle un toque personal a todo lo que hago.
              </p>
              <div className="card-skill-bar">
                <span
                  className="card-skill-progress"
                  style={{ "--progress": "90%" }}
                ></span>
              </div>
            </div>

            <div className="glass-card">
              <h3>💡 Creatividad Digital</h3>
              <p>
                Diseño, creo animaciones y lo uno a la tecnología para crear
                proyectos con una estética y dinamismo diferentes.
              </p>
              <div className="card-skill-bar">
                <span
                  className="card-skill-progress"
                  style={{ "--progress": "90%" }}
                ></span>
              </div>
            </div>

            <div className="glass-card">
              <h3>🗂️ Organización</h3>
              <p>
                Soy muy organizada. Agendo mis procesos, mis obligaciones y
                actividades. Me ha servido para ser puntual y eficiente con mis
                tareas.
              </p>
              <div className="card-skill-bar">
                <span
                  className="card-skill-progress"
                  style={{ "--progress": "80%" }}
                ></span>
              </div>
            </div>

            <div className="glass-card">
              <h3>🧠 Autonomía de aprendizaje</h3>
              <p>
                Soy autodidacta, curiosa y perseverante. Siempre busco mejorar y
                aprender cosas nuevas.
              </p>
              <div className="card-skill-bar">
                <span
                  className="card-skill-progress"
                  style={{ "--progress": "75%" }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* CARRUSEL DE PROYECTOS (MEJORA 4) */}
      <CarruselProyectos
        titulo="Mis proyectos destacados"
        proyectos={proyectosNeuyin}
      />

      {/* PELÍCULAS */}
      <section className="seccion peliculas">
        <div className="peliculas-left">
          <div className="peliculas-grid">
            <div className="pelicula-card">
              <div className="pelicula-inner">
                <div className="pelicula-front">
                  <img src="/images/abouttime.jpg" alt="About Time" />
                </div>
                <div className="pelicula-back">
                  <p>
                    “Cuestión de tiempo” – Me enseñó a vivir en el presente.
                  </p>
                </div>
              </div>
            </div>

            <div className="pelicula-card">
              <div className="pelicula-inner">
                <div className="pelicula-front">
                  <img src="/images/geisha.jpg" alt="Geisha" />
                </div>
                <div className="pelicula-back">
                  <p>
                    “Memorias de una Geisha” – Me enseñó sobre resiliencia y
                    perseverancia.
                  </p>
                </div>
              </div>
            </div>

            <div className="pelicula-card">
              <div className="pelicula-inner">
                <div className="pelicula-front">
                  <img
                    src="/images/eternal.jpg"
                    alt="Eterno resplandor de una mente sin recuerdos"
                  />
                </div>
                <div className="pelicula-back">
                  <p>
                    “Eterno resplandor de una mente sin recuerdos” – Me enseñó
                    el valor de los recuerdos, incluso los dolorosos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="peliculas-right">
          <h2>Estas son mis películas favoritas</h2>
        </div>
      </section>

      {/* MÚSICA */}
      <section className="seccion musica">
        <h2>Mi música favorita</h2>
        <div className="spotify-grid">
          <iframe
            src="https://open.spotify.com/embed/track/6hykEQW67sL7g4oj0XgFZh?utm_source=generator&theme=0"
            width="300"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/track/2qiNfSncVqWp4Do6D4a3Le?utm_source=generator&theme=0"
            width="300"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/track/0fDCmSbcX0EJ7XXP0D54PC?utm_source=generator&theme=0"
            width="300"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </section>

      {/* REDES SOCIALES */}
      <div className="social-icons">
        <a href="#" title="LinkedIn" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#" title="GitHub" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="#" title="Instagram" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </section>
  );
}
