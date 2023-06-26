import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AboutThisProject.css";
import Accordion from "react-bootstrap/Accordion";

function AboutThisProject() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section>
        <NavLink>
          <div className="hero-container">
            <div className="about-the-project-background-image"></div>
            <div className="background-overlay"></div>
            <div className="hero-content about-the-project-hero-content">
              <h1>Sobre este proyecto</h1>
              <p>
                El presente sitio de e-commerce es un proyecto desarrollado por estudiantes del
                Coding Bootcamp de Hack Academy. El Bootcamp es un programa educativo extremadamente
                práctico de 3 meses y full-time, donde los estudiantes invierten más de 600 horas a
                aprender sobre Node.js, Express, React.js, SQL, MongoDB y Git.
              </p>
            </div>
          </div>
        </NavLink>
      </section>

      <section className="about-info-container">
        <div className="about-container">
          <div className="about-tabs">
            <div
              className={`about-tab-0 tab${activeTabIndex === 0 ? "active" : ""}`}
              onClick={() => handleTabClick(0)}
            >
              <h3 className="tab-title m-0">Equipo</h3>
              <span className="tab-number m-0">01</span>
            </div>
            <div
              className={`about-tab-1 tab${activeTabIndex === 1 ? "active" : ""}`}
              onClick={() => handleTabClick(1)}
            >
              <h3 className="tab-title m-0">Proyecto</h3>
              <span className="tab-number m-0">02</span>
            </div>
            <div
              className={`about-tab-2 tab${activeTabIndex === 2 ? "active" : ""}`}
              onClick={() => handleTabClick(2)}
            >
              <h3 className="tab-title m-0">Tecnologías</h3>
              <span className="tab-number m-0">03</span>
            </div>
            <div
              className={`about-tab-3 tab${activeTabIndex === 3 ? "active" : ""}`}
              onClick={() => handleTabClick(3)}
            >
              <h3 className="tab-title m-0">División de tareas</h3>
              <span className="tab-number m-0">04</span>
            </div>
          </div>
          <div className="about-tab-panels">
            <div className={`tab-panel tab-panel-${activeTabIndex === 0 ? "active" : ""}`}>
              <div className="d-flex about-card-container">
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt=""
                    className="card-img-top about-the-project-card-image"
                  />
                  <div className="card-body">
                    <h5 className="card-title about-the-project-title-font">Andres Mendaro</h5>
                    <p className="card-text about-the-project-content-font">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <p className="card-text about-the-project-content-font d-flex gap-2">
                      <i className="fab fa-github"></i>
                      <i className="fab fa-linkedin"></i>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt=""
                    className="card-img-top about-the-project-card-image"
                  />
                  <div className="card-body">
                    <h5 className="card-title about-the-project-title-font">Andres Mendaro</h5>
                    <p className="card-text about-the-project-content-font">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <p className="card-text about-the-project-content-font d-flex gap-2">
                      <i className="fab fa-github"></i>
                      <i className="fab fa-linkedin"></i>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt=""
                    className="card-img-top about-the-project-card-image"
                  />
                  <div className="card-body">
                    <h5 className="card-title about-the-project-title-font">Andres Mendaro</h5>
                    <p className="card-text about-the-project-content-font">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <p className="card-text about-the-project-content-font d-flex gap-2">
                      <i className="fab fa-github"></i>
                      <i className="fab fa-linkedin"></i>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt=""
                    className="card-img-top about-the-project-card-image"
                  />
                  <div className="card-body">
                    <h5 className="card-title about-the-project-title-font">Andres Mendaro</h5>
                    <p className="card-text about-the-project-content-font">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <p className="card-text about-the-project-content-font d-flex gap-2">
                      <i className="fab fa-github"></i>
                      <i className="fab fa-linkedin"></i>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt=""
                    className="card-img-top about-the-project-card-image"
                  />
                  <div className="card-body">
                    <h5 className="card-title about-the-project-title-font">Andres Mendaro</h5>
                    <p className="card-text about-the-project-content-font">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <p className="card-text about-the-project-content-font d-flex gap-2">
                      <i className="fab fa-github"></i>
                      <i className="fab fa-linkedin"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`tab-panel tab-panel-${activeTabIndex === 1 ? "active" : ""}`}>
              <div className="about-project-container">
                <div className="about-project-paragraph-container">
                  <h3 className="about-project-paragraph-title">Duración</h3>
                  <p className="about-project-paragraph">
                    El proyecto fue desarrollado en tan sólo 3 semanas, durante junio de 2023. El
                    mismo se dividió en sprints (Scrum) de una semana de duración.
                  </p>
                </div>
                <div className="about-project-paragraph-container">
                  <h3 className="about-project-paragraph-title">Elección del proyecto</h3>
                  <p className="about-project-paragraph">
                    Se presentó por parte de cada estudiante 3 ideas de posibles proyectos,
                    conformando un total de 15 proyectos. Los proyectos fueron votados, y el ganador
                    fue el e-commerce de cerveza. La comodidad del diseño y el conocimiento por el
                    producto fue lo que llevó al equipo a tomar la decisión.
                  </p>
                </div>
                <div className="about-project-paragraph-container">
                  <h3 className="about-project-paragraph-title">Experiencia</h3>
                  <p className="about-project-paragraph">
                    Se presentó por parte de cada estudiante 3 ideas de posibles proyectos,
                    conformando un total de 15 proyectos. Los proyectos fueron votados, y el ganador
                    fue el e-commerce de cerveza. La comodidad del diseño y el conocimiento por el
                    producto fue lo que llevó al equipo a tomar la decisión.
                  </p>
                  <p className="about-project-paragraph">
                    El grupo particularmente nunca había trabajado junto, siendo la organización un
                    tema a resolver. La buena disposición y comunicacion llevó al grupo a sacar lo
                    mejor de si.
                  </p>
                </div>
              </div>
            </div>

            <div className={`tab-panel tab-panel-${activeTabIndex === 2 ? "active" : ""}`}>
              <div className="about-project-container">
                <div className="about-project-paragraph-container">
                  <p className="about-project-paragraph">
                    Para el Front-End del sitio se desarrolló una aplicación en React (usando
                    Create-React-App) mientras que para el Back-End se desarrolló una REST API hecha
                    con Node.js, Express, SQL y Git/GitHub.
                  </p>
                </div>
              </div>
            </div>

            <div className={`tab-panel tab-panel-${activeTabIndex === 3 ? "active" : ""}`}>
              <div className="about-project-container">
                <div className="about-project-paragraph-container">
                  <p className="about-project-paragraph">
                    Para la organización de tareas durante el proyecto se utilizó Trello. Esto
                    permitió que cada integrante del equipo estuviese permanentemente al tanto del
                    estado del proyecto así como de las tareas que debía realizar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-info-container-mobile">
        <div className="about-container-mobile">
          <Accordion defaultActiveKey={["0"]} flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="d-flex align-items-center accordion-header">
                  <h3 className="tab-title-mobile m-0">Equipo</h3>
                  <span className="tab-number-mobile m-0">01</span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="d-flex about-card-container-mobile">
                  <div className="card-mobile">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt=""
                      className="card-img-top about-the-project-card-image"
                    />
                    <div className="card-body">
                      <h5 className="card-title about-the-project-title-font">Andres Mendaro</h5>
                      <p className="card-text about-the-project-content-font">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </p>
                      <p className="card-text about-the-project-content-font d-flex gap-2">
                        <i className="fab fa-github"></i>
                        <i className="fab fa-linkedin"></i>
                      </p>
                    </div>
                  </div>
                  <div className="card-mobile">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt=""
                      className="card-img-top about-the-project-card-image"
                    />
                    <div className="card-body">
                      <h5 className="card-title about-the-project-title-font">Andres Mendaro</h5>
                      <p className="card-text about-the-project-content-font">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </p>
                      <p className="card-text about-the-project-content-font d-flex gap-2">
                        <i className="fab fa-github"></i>
                        <i className="fab fa-linkedin"></i>
                      </p>
                    </div>
                  </div>
                  <div className="card-mobile">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt=""
                      className="card-img-top about-the-project-card-image"
                    />
                    <div className="card-body">
                      <h5 className="card-title about-the-project-title-font">Andres Mendaro</h5>
                      <p className="card-text about-the-project-content-font">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </p>
                      <p className="card-text about-the-project-content-font d-flex gap-2">
                        <i className="fab fa-github"></i>
                        <i className="fab fa-linkedin"></i>
                      </p>
                    </div>
                  </div>
                  <div className="card-mobile">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt=""
                      className="card-img-top about-the-project-card-image"
                    />
                    <div className="card-body">
                      <h5 className="card-title about-the-project-title-font">Andres Mendaro</h5>
                      <p className="card-text about-the-project-content-font">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </p>
                      <p className="card-text about-the-project-content-font d-flex gap-2">
                        <i className="fab fa-github"></i>
                        <i className="fab fa-linkedin"></i>
                      </p>
                    </div>
                  </div>
                  <div className="card-mobile">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt=""
                      className="card-img-top about-the-project-card-image"
                    />
                    <div className="card-body">
                      <h5 className="card-title about-the-project-title-font">Andres Mendaro</h5>
                      <p className="card-text about-the-project-content-font">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </p>
                      <p className="card-text about-the-project-content-font d-flex gap-2">
                        <i className="fab fa-github"></i>
                        <i className="fab fa-linkedin"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <div className="d-flex align-items-center accordion-header">
                  <h3 className="tab-title-mobile m-0">Proyecto</h3>
                  <span className="tab-number-mobile m-0">02</span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="about-project-container">
                  <div className="about-project-paragraph-container">
                    <h3 className="about-project-paragraph-title">Duración</h3>
                    <p className="about-project-paragraph-mobile">
                      El proyecto fue desarrollado en tan sólo 3 semanas, durante junio de 2023. El
                      mismo se dividió en sprints (Scrum) de una semana de duración.
                    </p>
                  </div>
                  <div className="about-project-paragraph-container">
                    <h3 className="about-project-paragraph-title">Elección del proyecto</h3>
                    <p className="about-project-paragraph-mobile">
                      Se presentó por parte de cada estudiante 3 ideas de posibles proyectos,
                      conformando un total de 15 proyectos. Los proyectos fueron votados, y el
                      ganador fue el e-commerce de cerveza. La comodidad del diseño y el
                      conocimiento por el producto fue lo que llevó al equipo a tomar la decisión.
                    </p>
                  </div>
                  <div className="about-project-paragraph-container">
                    <h3 className="about-project-paragraph-title">Experiencia</h3>
                    <p className="about-project-paragraph-mobile">
                      Se presentó por parte de cada estudiante 3 ideas de posibles proyectos,
                      conformando un total de 15 proyectos. Los proyectos fueron votados, y el
                      ganador fue el e-commerce de cerveza. La comodidad del diseño y el
                      conocimiento por el producto fue lo que llevó al equipo a tomar la decisión.
                    </p>
                    <p className="about-project-paragraph-mobile">
                      El grupo particularmente nunca había trabajado junto, siendo la organización
                      un tema a resolver. La buena disposición y comunicacion llevó al grupo a sacar
                      lo mejor de si.
                    </p>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <div className="d-flex align-items-center accordion-header">
                  <h3 className="tab-title-mobile m-0">Tecnología</h3>
                  <span className="tab-number-mobile m-0">03</span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="about-project-container">
                  <div className="about-project-paragraph-container">
                    <p className="about-project-paragraph-mobile">
                      Para el Front-End del sitio se desarrolló una aplicación en React (usando
                      Create-React-App) mientras que para el Back-End se desarrolló una REST API
                      hecha con Node.js, Express, SQL y Git/GitHub.
                    </p>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <div className="d-flex align-items-center accordion-header hola">
                  <h3 className="tab-title-mobile m-0">División de tareas</h3>
                  <span className="tab-number-mobile m-0">04</span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="about-project-container">
                  <div className="about-project-paragraph-container">
                    <p className="about-project-paragraph-mobile">
                      Para la organización de tareas durante el proyecto se utilizó Trello. Esto
                      permitió que cada integrante del equipo estuviese permanentemente al tanto del
                      estado del proyecto así como de las tareas que debía realizar.
                    </p>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </>
  );
}

export default AboutThisProject;
