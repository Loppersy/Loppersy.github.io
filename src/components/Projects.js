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
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            tags: ["tag1", "tag2", "tag3"],
            link1: "https://example.com",
            link1Text: "Link 1",
            link2: "https://example.com",
            link2Text: "Link 2",
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
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <h1>Projects</h1>
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
