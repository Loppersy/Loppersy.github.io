import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Project } from "./Project";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {

    const projects = [
        {
            image: projImg1,
            title: "Machine Learning Pacman",
            description: "Reimplementation of the classic arcade game, Pacman, with a twist: You can either play as Pacman yourself, or watch an AI agent learn to play using deep Q-learning. The AI agent is trained using TensorFlow and the game is built using PyGame.\r\n The one player version offers randomly generated mazes and pathfinding visualizations.",
            tags: ["Reinforcement Learning", "Python", "TensorFlow", "PyGame", "Pathfinding"],
            link1: "https://example.com",
            link1Text: "Link 1",
            link2: "https://example.com",
            link2Text: "Link 2",
            imageLocation: "left",
        },
        {
            image: projImg2,
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            tags: ["tag4", "tag5", "tag6"],
            link1: "https://example.com",
            link1Text: "Link 1",
            link2: "https://example.com",
            link2Text: "Link 2",
            imageLocation: "right",
        },
        {
            image: projImg3,
            title: "Project 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            tags: ["tag7", "tag8", "tag9"],
            link1: "https://example.com",
            link1Text: "Link 1",
            link2: "https://example.com",
            link2Text: "Link 2",
            imageLocation: "left",
        },
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <h1>PROJECTS</h1>
                <Row>
                    <Col size={12}>
                        <Project {...projects[0]} />
                        <Project {...projects[1]} />
                        <Project {...projects[2]} />
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
