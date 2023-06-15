import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import "./AboutThisProject.css";

function AboutThisProject() {
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
      <section>
        <div className="row">
          <div className="col-md-6  about-the-project-middle-images-container">
            <img
              src="https://images.unsplash.com/photo-1578707484207-cef507f0c378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=782&q=80"
              alt="Imagen"
              className="about-the-project-middle-images"
            />
          </div>
          <div className="col-md-6 d-md-flex p-5">
            <div className="text-start font-extended">
              <h2 className="about-the-project-title-font">Equipo</h2>
              <p className="about-the-project-content-font">
                Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed
                arcu condimentum vestibulum suspendisse. Volutpat eu faucibus vivamus eget bibendum
                cras.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-md-6 order-md-2 about-the-project-middle-images-container">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Imagen"
              className="about-the-project-middle-images"
            />
          </div>
          <div className="col-md-6 order-md-1 d-md-flex p-5">
            <div className="text-start font-extended">
              <h3 className="about-the-project-title-font">
                <i className="far fa-clock"></i> Duración
              </h3>
              <p className="about-the-project-content-font">
                El proyecto fue desarrollado en tan sólo 3 semanas, durante junio de 2023. El mismo
                se dividió en sprints (Scrum) de una semana de duración.
              </p>
              <h3 className="about-the-project-title-font">
                <i className="fab fa-react"></i>Tecnologias
              </h3>
              <p className="about-the-project-content-font">
                Para el Front-End del sitio se desarrolló una aplicación en React (usando
                Create-React-App) mientras que para el Back-End se desarrolló una REST API hecha con
                Node.js, Express, SQL y Git/GitHub.
              </p>
              <h3 className="about-the-project-title-font">
                <i className="fas fa-tasks"></i> División de tareas
              </h3>
              <p className="about-the-project-content-font">
                Para la organización de tareas durante el proyecto se utilizó Trello. Esto permitió
                que cada integrante del equipo estuviese permanentemente al tanto del estado del
                proyecto así como de las tareas que debía realizar.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid about-the-project-dark pt-5 pb-5">
        <h4 className="about-the-project-title-font text-center mb-5">
          Presentaciones individuales
        </h4>
        <div className="container about-the-project-card-container">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
              className="card-img-top about-the-project-card-image"
            />
            <div className="card-body">
              <h5 className="card-title about-the-project-title-font">Card title</h5>
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
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
              className="card-img-top about-the-project-card-image"
            />
            <div className="card-body">
              <h5 className="card-title about-the-project-title-font">Card title</h5>
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
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
              className="card-img-top about-the-project-card-image"
            />
            <div className="card-body">
              <h5 className="card-title about-the-project-title-font">Card title</h5>
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
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
              className="card-img-top about-the-project-card-image"
            />
            <div className="card-body">
              <h5 className="card-title about-the-project-title-font">Card title</h5>
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
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
              className="card-img-top about-the-project-card-image"
            />
            <div className="card-body">
              <h5 className="card-title about-the-project-title-font">Card title</h5>
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
      </section>
    </>
  );
}

export default AboutThisProject;
