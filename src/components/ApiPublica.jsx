import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from "../components/Pagination";

export default function ApiPublica() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Obtenemos top anime movies de Jikan API
        const response = await axios.get('https://api.jikan.moe/v4/top/anime', {
          params: {
            type: 'movie',
            limit: 14,
            page: currentPage
          }
        });
        
        setAnimeList(response.data.data);
        setTotalPages(response.data.pagination?.last_visible_page || 1);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los datos de la API: ' + err.message);
        setLoading(false);
        console.error('Error completo:', err);
      }
    };

    fetchAnime();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <section>
        <div className="card" style={{ textAlign: "center" }}>
          <p>Cargando...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <div className="card" style={{ textAlign: "center" }}>
          <p style={{ color: "red" }}>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="card" style={{ textAlign: "center" }}>
        <h2>🎌 Top Anime Movies - Highest Rating</h2>
        <p>
          Explorá el top ranking de todas las películas de anime según MyAnimeList.
        </p>
        <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#888" }}>
          Página {currentPage} de {totalPages}
        </p>
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
        {animeList.map((anime) => (
          <div
            className="card"
            key={anime.mal_id}
            style={{
              textAlign: "center",
              transition: "transform 0.25s ease, box-shadow 0.25s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <img
              src={anime.images.jpg.image_url}
              alt={anime.title}
              style={{
                width: "100%",
                height: "330px",
                objectFit: "cover",
                borderRadius: "var(--radius)",
                marginBottom: "0.8rem"
              }}
            />
            <h3 style={{ color: "var(--color-secundario)", marginBottom: "0.3rem" }}>
              {anime.title}
            </h3>
            <p>
              <b>Año:</b> {anime.aired?.from ? new Date(anime.aired.from).getFullYear() : 'N/A'}
            </p>
            <p>
              <b>Géneros:</b> {anime.genres.slice(0, 3).map(g => g.name).join(', ') || 'N/A'}
            </p>
            <p>⭐ {anime.score || 'N/A'}</p>
          </div>
        ))}
      </div>

      {/* Componente de paginación separado */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
}