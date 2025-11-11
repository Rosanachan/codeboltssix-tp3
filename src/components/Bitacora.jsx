export default function Bitacora() {
  return (
    <section className="bitacora">
      {/* ENCABEZADO */}
      <div className="card page">
        <h2>🗒️ Bitácora del Proyecto</h2>
        <p>
          Esta sección contiene una descripción del proceso de desarrollo del proyecto, incluyendo decisiones de diseño, dificultades encontradas y cambios importantes realizados durante la implementación. La bitácora comenzó con Codeboltssix en el TP1, se amplía y migra a React en el TP2 y finalmente incorpora rebranding, mejoras dinámicas y visuales adaptadas a la temática cinéfila, registrando la evolución del trabajo MovieTop21 realizado por <b>Neuyin</b> y <b>Erick</b>.
        </p>
      </div>

      {/* REGISTROS TP1 CON TIMELINE */}
      <div className="card" style={{ marginTop: "1rem" }}>
        <h3 className="timeline-title">🚀 Registros TP1</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">🎨</div>
            <p>05/09/25 — Se definió el esquema de colores y tipografía.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🎬</div>
            <p>07/09/25 — Implementadas animaciones en la portada.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">💻</div>
            <p>12/09/25 — Ajustes de diseño responsive.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">👥</div>
            <p>18/09/25 — Creación de páginas individuales de cada integrante.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🧩</div>
            <p>25/09/25 — Mejoras y correcciones generales.</p>
          </div>
        </div>
      </div>

      {/* REGISTROS TP1 */}
      <div className="card" style={{ marginTop: "1rem" }}>
        <h4 style={{ marginTop: "1rem" }}>🧠 Decisiones de Diseño</h4>
        <p>
          En el TP1 se utilizó una paleta de tonos azules y grises, junto con la tipografía <b>Roboto</b> para transmitir profesionalismo y claridad. Se implementó un diseño responsive para adaptarse a móviles y tablets, manteniendo coherencia visual entre las páginas de cada integrante.
        </p>

        <h4 style={{ marginTop: "1rem" }}>⚙️ Dificultades Encontradas</h4>
        <p>
          Durante el desarrollo del TP1, el equipo enfrentó desafíos con las animaciones en la portada
          y la adaptación responsive. Se resolvió mediante investigación en animaciones CSS y el uso
          de <b>media queries</b> y pruebas cruzadas en distintos dispositivos.
        </p>

        <h4 style={{ marginTop: "1rem" }}>🔄 Cambios Importantes</h4>
        <p>
          El proyecto pasó de ser un diseño estático a incluir interactividad mediante JavaScript.
          También se reorganizó la estructura de carpetas para mejorar la colaboración y el mantenimiento.
        </p>
      </div>

      {/* REGISTROS TP2 CON TIMELINE */}
      <div className="card" style={{ marginTop: "1rem" }}>
        <h3 className="timeline-title">🚀 Registros TP2</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">👥</div>
            <p>03/10/25 — El grupo se reestructura: Neuyin y Erick continúan el proyecto.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🎨</div>
            <p>05/10/25 — Se define una nueva paleta de colores.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🪞</div>
            <p>07/10/25 — Se actualiza el logo y la identidad visual.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">⚛️</div>
            <p>10/10/25 — Migración completa del proyecto a React con estructura modular.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🧩</div>
            <p>12/10/25 — Creación de componentes reutilizables: Sidebar, AppLayout y Home.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🎬</div>
            <p>15/10/25 — Se integra la sección de películas premiadas (datos JSON dinámicos).</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🌙</div>
            <p>18/10/25 — Implementación del modo oscuro con cambio de tema global. Elección de API.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">💻</div>
            <p>24/10/25 — Ajustes finales de responsive, coherencia y refinamiento de diseño.</p>
          </div>
        </div>
      </div>

      {/* DECISIONES TP2 */}
      <div className="card" style={{ marginTop: "1rem" }}>
        <h4>🎨 Decisiones de Diseño</h4>
        <p>
          En esta nueva etapa, se optó por un rediseño completo, con una paleta pastel de tonos lavanda, violeta y rosa. El estilo general busca ser moderno, limpio y agradable, con tipografía <b>Montserrat</b> para los títulos y <b>Roboto</b> para los textos.
          Se mantuvo la idea de coherencia visual, pero con más dinamismo y un enfoque “SPA”.
        </p>

        <h4 style={{ marginTop: "1rem" }}>⚙️ Dificultades y Resolución</h4>
        <p>
          La migración de HTML/CSS a React fue el mayor reto, especialmente en la separación en componentes,
          la organización del CSS global y la adaptación de rutas internas. Se resolvió investigando el uso de
          <b> React Router</b>, la gestión de estados locales con <b>useState</b>, y aplicando las buenas prácticas 
          del curso (Vite + JSX + props).
        </p>

        <h4 style={{ marginTop: "1rem" }}>🔄 Cambios y Evolución</h4>
        <p>
          Se eliminaron páginas duplicadas y se creó una estructura de componentes reutilizables.
          Se incorporó un <b>modo oscuro</b>, un <b>sidebar dinámico</b> y una sección de <b>películas premiadas</b> leídas desde un archivo JSON, demostrando manejo de datos locales.
          Además, se planifica integrar una <b>API pública de cine japonés</b> para el TP3.
        </p>

        <h4 style={{ marginTop: "1rem" }}>💭 Reflexión General</h4>
        <p>
          El proyecto pasó de ser un sitio estático con varias páginas HTML a convertirse en una 
          aplicación web moderna, modular y escalable. El proceso fortaleció el trabajo en equipo,
          la división de roles y la comprensión de las tecnologías de Frontend actual.
          Esta evolución representa el crecimiento técnico y estético de los integrantes.
        </p>
      </div>

      {/* REGISTROS TP3 CON TIMELINE */}
      <div className="card" style={{ marginTop: "1rem" }}>
        <h3 className="timeline-title">🚀 Registros TP3</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">⚛️</div>
            <p>03/11/25 — Se migra proyecto a repositorio nuevo.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🎨</div>
            <p>06/11/25 — El equipo se reune para definir temática y redefinir diseño del sitio.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">💻</div>
            <p>09/11/25 — Se actualiza la bitácora con información sobre entrega final.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">👥</div>
            <p>09/11/25 — Se implementan ajustes visuales relacionados a la temática de cine.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🧩</div>
            <p>09/11/25 — Se agregan animaciones para cumplir con la consigna.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🔄</div>
            <p>10/11/25 — Se modifican logotipo y nombre para adaptar el proyecto a la temática seleccionada.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">⚙️</div>
            <p>10/11/25 — Se incorporan Skill bars + redes animadas.</p>
          </div>
        </div>
      </div>

      {/* REGISTROS TP3 */}
      <div className="card" style={{ marginTop: "1rem" }}>
        <h4 style={{ marginTop: "1rem" }}>🧠 Decisiones de Diseño</h4>
        <p>
          Se optó por agregar detalles visuales en modo modo oscuro tipo sala de proyección, reflejos tenues y transiciones que evocan la iluminación de un cine. Se <b>rediseñó</b> la barra lateral y los componentes visuales para reforzar la temática <b>cinéfila.</b> La paleta de colores combina lilas, magentas y tonos oscuros con reflejos de neón suave.
        </p>

        <h4 style={{ marginTop: "1rem" }}>⚙️ Dificultades Encontradas</h4>
        <p>
          La principal dificultad fue la sincronización entre ramas y repositorios, que requirió corregir errores de commits en GitHub. Se presentó un <b>desafío técnico</b> en la implementación responsiva del menú hamburguesa y en mantener la correcta alineación del contenido al ocultar la barra lateral. También se ajustó el sistema de temas dinámicos (modo claro/oscuro) para evitar conflictos visuales en transiciones.
        </p>

        <h4 style={{ marginTop: "1rem" }}>🔄 Cambios Importantes</h4>
        <p>
          <b>Rebranding</b> del equipo con nuevo nombre y logo adaptados a la temática cinematográfica. Incorporación de animaciones CSS y transiciones suaves en tarjetas, menús y botones. Adición de buscador y <b>filtros dinámicos</b> en el listado JSON. Mejora visual integral con modo retro y modo cine oscuro, reforzando la identidad del sitio.
        </p>
      </div>

      {/* ESTRUCTURA FINAL */}
      <div className="card" style={{ marginTop: "1rem" }}>
        <h3>📂 Estructura del Sistema</h3>
        <ul>
          <li>🏠 Inicio – Portada del proyecto y objetivos.</li>
          <li>🗒️ Bitácora – Registro del proceso completo de desarrollo.</li>
          <li>👨‍💻 Erick – Perfil personal y habilidades.</li>
          <li>👩‍💻 Neuyin – Perfil personal con identidad visual base del diseño.</li>
          <li>🏆 Películas (JSON) – Películas premiadas mostradas dinámicamente.</li>
          <li>⛩️ API – Conexión con datos externos de anime.</li>
        </ul>
      </div>
    </section>
  );
}
