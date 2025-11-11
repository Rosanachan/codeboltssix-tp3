import data from "../data/items.json";
import { useState, useEffect } from "react";

export default function JsonData() {
  const [filtro, setFiltro] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [zoom, setZoom] = useState(false);

  const categorias = ["all", "Oscar", "Cannes", "BAFTA", "Globo de Oro"];

  const filtradas =
    filtro === "all"
      ? data
      : data.filter((peli) =>
          peli.premio.toLowerCase().includes(filtro.toLowerCase())
        );

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => {
    setLightboxIndex(null);
    setZoom(false);
  };

  const nextImage = () =>
    setLightboxIndex((prev) => (prev + 1) % filtradas.length);

  const prevImage = () =>
    setLightboxIndex((prev) => (prev - 1 + filtradas.length) % filtradas.length);

  // Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && closeLightbox();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section>
      <div className="card page" style={{ textAlign: "center" }}>
        <h2>🎬 Películas premiadas</h2>
        <p>
          Explorá una selección de películas ganadoras en distintos festivales
          y premiaciones del cine mundial.
        </p>

        <label style={{ display: "block", marginTop: "1rem" }}>
          <b>Filtrar por premio:</b>{" "}
          <select
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            style={{
              marginLeft: "0.5rem",
              padding: "0.4rem 0.6rem",
              borderRadius: "var(--radius)",
              border: "1px solid rgba(0,0,0,0.2)",
              fontFamily: "var(--font-main)",
              background: "var(--color-fondo-claro)",
              color: "var(--color-texto-principal)"
            }}
          >
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* === GALERÍA === */}
      <div
        className="galeria"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "1rem",
          marginTop: "1.5rem"
        }}
      >
        {filtradas.map((peli, index) => (
          <div
            className="card"
            key={peli.id}
            style={{
              textAlign: "center",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
              cursor: "pointer"
            }}
            onClick={() => openLightbox(index)}
          >
            <img
              src={peli.poster}
              alt={peli.titulo}
              style={{
                width: "100%",
                height: "330px",
                objectFit: "cover",
                borderRadius: "var(--radius)",
                marginBottom: "0.8rem"
              }}
            />
            <h3 style={{ color: "var(--color-secundario)", marginBottom: "0.3rem" }}>
              {peli.titulo}
            </h3>
            <p>
              <b>Director:</b> {peli.director}
            </p>
            <p>
              <b>Año:</b> {peli.año}
            </p>
            <p>
              <b>Premio:</b> {peli.detalle}
            </p>
            <p>⭐ {peli.rating}</p>
          </div>
        ))}
      </div>

      {/* === LIGHTBOX === */}
      {lightboxIndex !== null && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000
          }}
        >
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: "20px",
              right: "30px",
              background: "none",
              color: "#fff",
              border: "none",
              fontSize: "2rem",
              cursor: "pointer"
            }}
          >
            ✖
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            style={{
              position: "absolute",
              left: "40px",
              color: "#fff",
              background: "none",
              border: "none",
              fontSize: "2rem",
              cursor: "pointer"
            }}
          >
            ❮
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            style={{
              position: "absolute",
              right: "40px",
              color: "#fff",
              background: "none",
              border: "none",
              fontSize: "2rem",
              cursor: "pointer"
            }}
          >
            ❯
          </button>

          <img
            src={filtradas[lightboxIndex].poster}
            alt={filtradas[lightboxIndex].titulo}
            onClick={(e) => {
              e.stopPropagation();
              setZoom(!zoom);
            }}
            style={{
              maxWidth: zoom ? "90%" : "70%",
              maxHeight: zoom ? "90%" : "70%",
              objectFit: "contain",
              borderRadius: "var(--radius)",
              transition: "transform 0.3s ease",
              cursor: zoom ? "zoom-out" : "zoom-in"
            }}
          />
        </div>
      )}
    </section>
  );
}