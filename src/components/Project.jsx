import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectCard2 } from "./ProjectCard2";
import { ProjectCard3 } from "./ProjectCard3";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
import TrackVisibility from "react-on-screen";
 const Project = () => {

  const projects = [
    {
      title: "Gricklo Website",
      description: "Design & Development",
      imgUrl: 'img/gricklo.png',
      href:"https://kiranashfaq.github.io/gricklo/"
    },
    {
      title: "Geo Trip Website",
      description: "Design & Development",
      imgUrl: 'img/geotrip.png',
      href:"https://kiranashfaq.github.io/geotrip/"

    },
    {
      title: "ARY jewellers Website",
      description: "Design & Development",
      imgUrl: 'img/ary.png',
      href:"https://kiranashfaq.github.io/ARYjewellery/"
    },
    {
      title: "Smart Mockup",
      description: "Design & Development",
      imgUrl: 'img/mockup.png',
      href:"https://kiranashfaq.github.io/smartmockup/"

    },
    {
      title: "KAMKAJ Website",
      description: "Design & Development",
      imgUrl: 'img/kamkaj.png',
      href:"https://kiranashfaq.github.io/kamkaj/"

    },
    {
      title: "Solar System Animation",
      description: "Design & Development",
      imgUrl: 'img/solar.png',
      href:"https://kiranashfaq.github.io/solar-system-animation/"
    },
  ];


  const jsProjects = [
    {
      title: "Tic Tac Toe Game",
      description: "Design & Funcionality",
      imgUrl: 'img/tictactoe.png',
      href:"https://kiranashfaq.github.io/Tic-Tac-Toe/"
    },
    {
      title: "Mystery Digit Game",
      description: "Design & Funcionality",
      imgUrl: 'img/digit.png',
      href:"https://kiranashfaq.github.io/mystery-digit-game/"

    },
    {
      title: "Word Scramble Game",
      description: "Design & Funcionality",
      imgUrl: 'img/wordscramble.png',
      href:"https://kiranashfaq.github.io/wordScramble-Game/"
    },
    {
      title: "Ultimate Color Generator",
      description: "Design & Funcionality",
      imgUrl: 'img/color-g.png',
      href:"https://kiranashfaq.github.io/color-generator/"

    },
    {
      title: "Todo APP",
      description: "Design & Funcionality",
      imgUrl: 'img/todoapp.png',
      href:"https://kiranashfaq.github.io/to-do-list/"

    },
    {
      title: "Login $ Signup & Dashboard page",
      description: "Design & Funcionality",
      imgUrl: 'img/form.png',
      href:"https://kiranashfaq.github.io/login-signup-page/"
    },
  ];

  const reactProjects = [
    {
      title: "Recipe Finder",
      description: "Design & Funcionality",
      imgUrl: 'img/recipe.png',
      href:"https://recipe-finder-smoky-chi.vercel.app/"
    },
    {
      title: "Form with data",
      description: "Design & Funcionality",
      imgUrl: 'img/studentform.png',
      href:"https://react-form45.netlify.app/"

    },
    {
      title: "Dental Website",
      description: "Design & Funcionality",
      imgUrl: 'img/donto.png',
      href:"https://donto-website.netlify.app/"
    },
    {
      title: "Budget Tracker",
      description: "Design & Funcionality",
      imgUrl: 'img/budget.png',
      href:"https://budget-tracker-eight-nu.vercel.app/"

    },
    {
      title: "Quiz App",
      description: "Design & Funcionality",
      imgUrl: 'img/quiz.png',
      href:"https://quizapp12.vercel.app/"

    },
    {
      title: "Alphabet Keyboard",
      description: "Design & Funcionality",
      imgUrl: 'img/alphabet.png',
      href:"https://alphabet-keyboard.vercel.app/"

    },
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className="text-white pro" id="pro">Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">CSS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">JavaScript</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">React.JS</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Row>
                    {
                          jsProjects.map((project, index) => {
                            return (
                              <ProjectCard2
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }                   
                        </Row>
                         </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                    {
                          reactProjects.map((project, index) => {
                            return (
                              <ProjectCard3
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }                   
                        </Row>                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Project