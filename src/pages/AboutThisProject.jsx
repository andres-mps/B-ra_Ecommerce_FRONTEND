import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AboutThisProject.css";
import Accordion from "react-bootstrap/Accordion";
import trello_img from "../assets/Trello.png";
import mer_img from "../assets/MER.png";
import about_logos_img from "../assets/about-logos.png";
import profileGB from "../assets/profiles/GonzaloBascans.jpeg";

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
          <div className="about-hero-container">
            <div className="about-background-image"></div>
            <div className="background-overlay"></div>
            <div className="about-hero-content">
              <h1>About this project</h1>
              <p>
                This e-commerce site is a project developed by students of{" "}
                <strong style={{ fontWeight: "600" }}>Hack Academy's Coding Bootcamp.</strong> The
                Bootcamp is an extremely hands-on, 3-month, full-time educational program, where
                students invest more than <strong style={{ fontWeight: "600" }}>600 hours</strong>{" "}
                learning about{" "}
                <strong style={{ fontWeight: "600" }}>
                  Node.js, Express, React.js, SQL, MongoDB and Git.
                </strong>
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
              <h3 className="tab-title m-0">Team</h3>
              <span className="tab-number m-0">01</span>
            </div>
            <div
              className={`about-tab-1 tab${activeTabIndex === 1 ? "active" : ""}`}
              onClick={() => handleTabClick(1)}
            >
              <h3 className="tab-title m-0">Project</h3>
              <span className="tab-number m-0">02</span>
            </div>
            <div
              className={`about-tab-2 tab${activeTabIndex === 2 ? "active" : ""}`}
              onClick={() => handleTabClick(2)}
            >
              <h3 className="tab-title m-0">Technologies</h3>
              <span className="tab-number m-0">03</span>
            </div>
            <div
              className={`about-tab-3 tab${activeTabIndex === 3 ? "active" : ""}`}
              onClick={() => handleTabClick(3)}
            >
              <h3 className="tab-title m-0">Task division</h3>
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
                  />
                  <div className="card-body">
                    <h5 className="card-title ">Andres Mendaro</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <p className="card-text d-flex gap-2">
                      <i className="fab fa-github"></i>
                      <i className="fab fa-linkedin"></i>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title ">Andres Mendaro</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <p className="card-text d-flex gap-2">
                      <i className="fab fa-github"></i>
                      <i className="fab fa-linkedin"></i>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img src={profileGB} alt="" />
                  <div className="card-body">
                    <h5 className="card-title ">Gonzalo Bascans</h5>
                    <p className="card-text">
                      I am a Civil Engineer converted to Full Stack Developer. I started this
                      exiting transition in January 2023.
                    </p>
                    <p className="card-text d-flex gap-2">
                      <NavLink
                        target="blank"
                        to="https://github.com/gbascans"
                        className="text-decoration-none text-black"
                      >
                        <i className="fab fa-github"></i>
                      </NavLink>
                      <NavLink
                        target="blank"
                        to="https://www.linkedin.com/in/gbascans/"
                        className="text-decoration-none text-black"
                      >
                        <i className="fab fa-linkedin"></i>
                      </NavLink>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title ">Andres Mendaro</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <p className="card-text d-flex gap-2">
                      <i className="fab fa-github"></i>
                      <i className="fab fa-linkedin"></i>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title ">Andres Mendaro</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <p className="card-text d-flex gap-2">
                      <i className="fab fa-github"></i>
                      <i className="fab fa-linkedin"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`tab-panel tab-panel-${activeTabIndex === 1 ? "active" : ""}`}>
              <div className="about-project-container">
                <div>
                  <div className="about-project-paragraph-container">
                    <h3 className="about-project-paragraph-title">Duration</h3>
                    <p className="about-project-paragraph">
                      The project was developed in 3 weeks, where each member contributed
                      approximately 150 hours. The project was divided into one-week sprints
                      (Scrum).
                    </p>
                  </div>
                  <div className="about-project-paragraph-container">
                    <h3 className="about-project-paragraph-title">Project selection</h3>
                    <p className="about-project-paragraph">
                      The minimalist design orientation and knowledge of the product led the team to
                      choose this particular direction for the project. It also allowed the
                      implementation of different functionalities such as stock management and
                      validation, user authentication and emulating a complete purchasing process.
                    </p>
                  </div>
                  <div className="about-project-paragraph-container">
                    <h3 className="about-project-paragraph-title">Experience</h3>
                    <p className="about-project-paragraph">
                      The team members had the previous experience of building projects such as
                      HackBlog, HackFlix and Twitter clone, all of them made during the Bootcamp.
                    </p>
                    <p className="about-project-paragraph">
                      The group had never worked together before, being the organization and task
                      division an issue to be solved. Great willingness and communication led the
                      group to get the best out of each other.
                    </p>
                  </div>
                </div>
                <img className="about-tab-panel-img" src={mer_img} alt="MER" />
              </div>
            </div>

            <div className={`tab-panel tab-panel-${activeTabIndex === 2 ? "active" : ""}`}>
              <div className="about-project-container">
                <div className="about-project-paragraph-container">
                  <p className="about-project-paragraph">
                    The back-end was developed using Node.js, Express, SQL, and Git/GitHub to create
                    a REST API. This API serves as the data source for two separate front-end
                    projects, one for
                    <NavLink
                      to="https://b-ra-admin.vercel.app/"
                      className="admin-link"
                      target="_blank"
                    >
                      <strong>administrators</strong>
                    </NavLink>{" "}
                    and the other for users. To develop these front-end projects, we utilized React,
                    React Router, and Redux.
                  </p>
                </div>
                <div className="technologies-icons">
                  <div className="technology-applied">
                    <img src="/src/assets/icons/react.svg" alt="react-logo" />
                    <p>React</p>
                  </div>
                  <div className="technology-applied">
                    <img src="/src/assets/icons/redux.svg" alt="redux-logo" />
                    <p>Redux</p>
                  </div>
                  <div className="technology-applied">
                    <img src="/src/assets/icons/css.svg" alt="css-logo" />
                    <p>CSS</p>
                  </div>
                  <div className="technology-applied">
                    <img src="/src/assets/icons/bootstrap.svg" alt="bootstrap-logo" />
                    <p>Bootstrap</p>
                  </div>
                  <div className="technology-applied">
                    <img src="/src/assets/icons/sequelize.svg" alt="sequelize-logo" />
                    <p>Sequelize</p>
                  </div>
                  <div className="technology-applied">
                    <img src="/src/assets/icons/jwt.svg" alt="jwt-logo" />
                    <p>JWT</p>
                  </div>
                  <div className="technology-applied">
                    <img src="/src/assets/icons/node.svg" alt="node-logo" />
                    <p>Node.js</p>
                  </div>
                  <div className="technology-applied">
                    <img src="/src/assets/icons/express.svg" alt="express-logo" />
                    <p>Express</p>
                  </div>
                </div>
                {/* <img
                  src={about_logos_img}
                  alt="about-logos"
                  className="ms-3 about-tab-panel-logos"
                /> */}
              </div>
            </div>

            <div className={`tab-panel tab-panel-${activeTabIndex === 3 ? "active" : ""}`}>
              <div className="about-project-container">
                <div className="about-tareas-paragraph-container">
                  <div>
                    <p className="about-project-paragraph">
                      <strong style={{ fontFamily: "var(--font-heading)" }}>Trello</strong> was used
                      to organize tasks during the project. This allowed each team member to be
                      constantly aware of the status of the project as well as the tasks to be
                      performed.
                    </p>
                    <p className="about-project-paragraph">
                      Tasks were divided equally between front-end and back-end so that each team
                      member could participate in both aspects of the project.
                    </p>
                  </div>
                  <img className="about-tab-panel-img" src={trello_img} alt="Trello" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-info-container-mobile">
        <div className="about-container-mobile">
          <Accordion defaultActiveKey={activeTabIndex} flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="d-flex align-items-center accordion-header">
                  <h3 className="tab-title-mobile m-0">Team</h3>
                  <span className="tab-number-mobile m-0">01</span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="d-flex about-card-container-mobile">
                  <div className="card-mobile">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title ">Andres Mendaro</h5>
                      <p className="card-text ">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </p>
                      <p className="card-text  d-flex gap-2">
                        <i className="fab fa-github"></i>
                        <i className="fab fa-linkedin"></i>
                      </p>
                    </div>
                  </div>
                  <div className="card-mobile">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title ">Andres Mendaro</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </p>
                      <p className="card-text d-flex gap-2">
                        <i className="fab fa-github"></i>
                        <i className="fab fa-linkedin"></i>
                      </p>
                    </div>
                  </div>
                  <div className="card-mobile">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title ">Andres Mendaro</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </p>
                      <p className="card-text d-flex gap-2">
                        <i className="fab fa-github"></i>
                        <i className="fab fa-linkedin"></i>
                      </p>
                    </div>
                  </div>
                  <div className="card-mobile">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title ">Andres Mendaro</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </p>
                      <p className="card-text d-flex gap-2">
                        <i className="fab fa-github"></i>
                        <i className="fab fa-linkedin"></i>
                      </p>
                    </div>
                  </div>
                  <div className="card-mobile">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title ">Andres Mendaro</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </p>
                      <p className="card-text d-flex gap-2">
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
                  <h3 className="tab-title-mobile m-0">Project</h3>
                  <span className="tab-number-mobile m-0">02</span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="about-project-container">
                  <div className="about-project-paragraph-container">
                    <h3 className="about-project-paragraph-title">Duration</h3>
                    <p className="about-project-paragraph-mobile">
                      The project was developed in 3 weeks, where each member contributed
                      approximately 150 hours. The project was divided into one-week sprints
                      (Scrum).
                    </p>
                  </div>
                  <div className="about-project-paragraph-container">
                    <h3 className="about-project-paragraph-title">Project selection</h3>
                    <p className="about-project-paragraph-mobile">
                      The minimalist design orientation and knowledge of the product led the team to
                      choose this particular direction for the project. It also allowed the
                      implementation of different functionalities such as stock management and
                      validation, user authentication and emulating a complete purchasing process.
                    </p>
                  </div>
                  <div className="about-project-paragraph-container">
                    <h3 className="about-project-paragraph-title">Experience</h3>
                    <p className="about-project-paragraph-mobile">
                      The team members had the previous experience of building projects such as
                      HackBlog, HackFlix and Twitter clone, all of them made during the Bootcamp.
                    </p>
                    <p className="about-project-paragraph-mobile">
                      The group had never worked together before, being the organization and task
                      division an issue to be solved. Great willingness and communication led the
                      group to get the best out of each other.
                    </p>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <div className="d-flex align-items-center accordion-header">
                  <h3 className="tab-title-mobile m-0">Technologies</h3>
                  <span className="tab-number-mobile m-0">03</span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="about-project-container">
                  <div className="about-project-paragraph-container">
                    <p className="about-project-paragraph-mobile">
                      The back-end was developed using Node.js, Express, SQL, and Git/GitHub to
                      create a REST API. This API serves as the data source for two separate
                      front-end projects, one for{" "}
                      <NavLink
                        to="https://b-ra-admin.vercel.app/"
                        className="admin-link"
                        target="_blank"
                      >
                        <strong>administrators</strong>
                      </NavLink>{" "}
                      and the other for users. To develop these front-end projects, we utilized
                      React, React Router, and Redux.
                    </p>
                  </div>
                  <div className="technologies-icons">
                    <div className="technology-applied">
                      <img src="/src/assets/icons/react.svg" alt="react-logo" />
                      <p>React</p>
                    </div>
                    <div className="technology-applied">
                      <img src="/src/assets/icons/redux.svg" alt="redux-logo" />
                      <p>Redux</p>
                    </div>
                    <div className="technology-applied">
                      <img src="/src/assets/icons/css.svg" alt="css-logo" />
                      <p>CSS</p>
                    </div>
                    <div className="technology-applied">
                      <img src="/src/assets/icons/bootstrap.svg" alt="bootstrap-logo" />
                      <p>Bootstrap</p>
                    </div>
                    <div className="technology-applied">
                      <img src="/src/assets/icons/sequelize.svg" alt="sequelize-logo" />
                      <p>Sequelize</p>
                    </div>
                    <div className="technology-applied">
                      <img src="/src/assets/icons/jwt.svg" alt="jwt-logo" />
                      <p>JWT</p>
                    </div>
                    <div className="technology-applied">
                      <img src="/src/assets/icons/node.svg" alt="node-logo" />
                      <p>Node.js</p>
                    </div>
                    <div className="technology-applied">
                      <img src="/src/assets/icons/express.svg" alt="express-logo" />
                      <p>Express</p>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <div className="d-flex align-items-center accordion-header hola">
                  <h3 className="tab-title-mobile m-0">Task division</h3>
                  <span className="tab-number-mobile m-0">04</span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="about-project-container">
                  <div className="about-project-paragraph-container">
                    <p className="about-project-paragraph-mobile">
                      <strong style={{ fontFamily: "var(--font-heading)" }}>Trello</strong> was used
                      to organize tasks during the project. This allowed each team member to be
                      constantly aware of the status of the project as well as the tasks to be
                      performed.
                    </p>
                    <p className="about-project-paragraph-mobile">
                      Tasks were divided equally between front-end and back-end so that each team
                      member could participate in both aspects of the project.
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
