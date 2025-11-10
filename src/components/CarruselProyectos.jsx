import { useRef } from "react";

export default function CarruselProyectos({ titulo, proyectos }) {
  const carruselRef = useRef(null);

  const scroll = (dir) => {
    const width = carruselRef.current.clientWidth;
    carruselRef.current.scrollBy({
      left: dir === "next" ? width : -width,
      behavior: "smooth",
    });
  };

  return (
    <div className="perfil-carrusel">
      <h3>{titulo}</h3>
      <div className="carrusel-container">
        <button className="carrusel-btn prev" onClick={() => scroll("prev")}>
          ‹
        </button>

        <div className="carrusel carrusel-unico" ref={carruselRef}>
          {proyectos.map((p, index) => (
            <div key={index} className="proyecto-card unico">
              <img src={p.img} alt={p.titulo} />
              <h4>{p.titulo}</h4>
              <p>{p.descripcion}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ver-proyecto"
              >
                Ver proyecto
              </a>
            </div>
          ))}
        </div>

        <button className="carrusel-btn next" onClick={() => scroll("next")}>
          ›
        </button>
      </div>
    </div>
  );
}
