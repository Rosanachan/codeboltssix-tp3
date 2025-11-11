import data from "../data/items.json";
import { useState } from "react";

export default function JsonData() {
  const [filtro, setFiltro] = useState("all");

  const categorias = ["all", "Oscar", "Cannes", "BAFTA", "Globo de Oro"];

  const filtradas =
    filtro === "all"
      ? data
      : data.filter((peli) =>
          peli.premio.toLowerCase().includes(filtro.toLowerCase())
        );

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

      <div
        className="galeria"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "1rem",
          marginTop: "1.5rem"
        }}
      >
        {filtradas.map((peli) => (
          <div
            className="card"
            key={peli.id}
            style={{
              textAlign: "center",
              transition: "transform 0.25s ease, box-shadow 0.25s ease"
            }}
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
    </section>
  );
}