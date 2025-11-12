import { useState, useEffect } from 'react';

export default function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange 
}) {
  const [pageInput, setPageInput] = useState(currentPage.toString());

  // Actualizar el input cuando cambia la página desde afuera
  useEffect(() => {
    setPageInput(currentPage.toString());
  }, [currentPage]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePageInputChange = (e) => {
    const value = e.target.value;
    // Solo permitir números
    if (value === '' || /^\d+$/.test(value)) {
      setPageInput(value);
    }
  };

  const handlePageInputSubmit = (e) => {
    e.preventDefault();
    const pageNumber = parseInt(pageInput);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      goToPage(pageNumber);
    } else {
      // Si el número no es válido, resetear al actual
      setPageInput(currentPage.toString());
      alert(`Por favor ingresá un número entre 1 y ${totalPages}`);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.75rem",
        flexWrap: "wrap",
        marginTop: "2rem",
        padding: "1.5rem 0"
      }}
    >
      {/* Botón Primera */}
      <button
        onClick={() => goToPage(1)}
        disabled={currentPage === 1}
        style={{
          padding: "0.75rem 1.25rem",
          fontSize: "0.95rem",
          fontWeight: "bold",
          backgroundColor: currentPage === 1 ? "#ccc" : "#9b59b6",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
          transition: "all 0.3s ease",
          opacity: currentPage === 1 ? 0.5 : 1
        }}
        onMouseEnter={(e) => {
          if (currentPage !== 1) {
            e.currentTarget.style.backgroundColor = "#8e44ad";
            e.currentTarget.style.transform = "translateY(-2px)";
          }
        }}
        onMouseLeave={(e) => {
          if (currentPage !== 1) {
            e.currentTarget.style.backgroundColor = "#9b59b6";
            e.currentTarget.style.transform = "translateY(0)";
          }
        }}
      >
        ⏮️ Primera
      </button>

      {/* Botón Anterior */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          padding: "0.75rem 1.25rem",
          fontSize: "0.95rem",
          fontWeight: "bold",
          backgroundColor: currentPage === 1 ? "#ccc" : "#2ecc71",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
          transition: "all 0.3s ease",
          opacity: currentPage === 1 ? 0.5 : 1
        }}
        onMouseEnter={(e) => {
          if (currentPage !== 1) {
            e.currentTarget.style.backgroundColor = "#27ae60";
            e.currentTarget.style.transform = "translateY(-2px)";
          }
        }}
        onMouseLeave={(e) => {
          if (currentPage !== 1) {
            e.currentTarget.style.backgroundColor = "#2ecc71";
            e.currentTarget.style.transform = "translateY(0)";
          }
        }}
      >
        ◀️ Anterior
      </button>

      {/* Input de página con formulario */}
      <form
        onSubmit={handlePageInputSubmit}
        style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
      >
        <input
          type="text"
          value={pageInput}
          onChange={handlePageInputChange}
          onBlur={() => {
            if (pageInput === "") {
              setPageInput(currentPage.toString());
            }
          }}
          style={{
            width: "60px",
            padding: "0.75rem 0.5rem",
            fontSize: "1rem",
            fontWeight: "bold",
            textAlign: "center",
            border: "2px solid #3498db",
            borderRadius: "8px",
            outline: "none"
          }}
          onFocus={(e) => (e.target.style.borderColor = "#2980b9")}
        />
        <span style={{ fontSize: "1rem", fontWeight: "bold", color: "#34495e" }}>
          de {totalPages}
        </span>
        <button
          type="submit"
          style={{
            padding: "0.75rem 1rem",
            fontSize: "0.9rem",
            fontWeight: "bold",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#2980b9";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#3498db";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Ir
        </button>
      </form>

      {/* Botón Siguiente */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          padding: "0.75rem 1.25rem",
          fontSize: "0.95rem",
          fontWeight: "bold",
          backgroundColor: currentPage === totalPages ? "#ccc" : "#2ecc71",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          transition: "all 0.3s ease",
          opacity: currentPage === totalPages ? 0.5 : 1
        }}
        onMouseEnter={(e) => {
          if (currentPage !== totalPages) {
            e.currentTarget.style.backgroundColor = "#27ae60";
            e.currentTarget.style.transform = "translateY(-2px)";
          }
        }}
        onMouseLeave={(e) => {
          if (currentPage !== totalPages) {
            e.currentTarget.style.backgroundColor = "#2ecc71";
            e.currentTarget.style.transform = "translateY(0)";
          }
        }}
      >
        Siguiente ▶️
      </button>

      {/* Botón Última */}
      <button
        onClick={() => goToPage(totalPages)}
        disabled={currentPage === totalPages}
        style={{
          padding: "0.75rem 1.25rem",
          fontSize: "0.95rem",
          fontWeight: "bold",
          backgroundColor: currentPage === totalPages ? "#ccc" : "#9b59b6",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          transition: "all 0.3s ease",
          opacity: currentPage === totalPages ? 0.5 : 1
        }}
        onMouseEnter={(e) => {
          if (currentPage !== totalPages) {
            e.currentTarget.style.backgroundColor = "#8e44ad";
            e.currentTarget.style.transform = "translateY(-2px)";
          }
        }}
        onMouseLeave={(e) => {
          if (currentPage !== totalPages) {
            e.currentTarget.style.backgroundColor = "#9b59b6";
            e.currentTarget.style.transform = "translateY(0)";
          }
        }}
      >
        Última ⏭️
      </button>
    </div>
  );
}