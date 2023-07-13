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
            description: "This is a description of Project 1.",
            tags: ["tag1", "tag2", "tag3"],
            link1: "https://example.com",
            link1Text: "Link 1",
            link2: "https://example.com",
            link2Text: "Link 2",
        },
        {
            image: projImg2,
            title: "Project 2",
            description: "This is a description of Project 2.",
            tags: ["tag4", "tag5", "tag6"],
            link1: "https://example.com",
            link1Text: "Link 1",
            link2: "https://example.com",
            link2Text: "Link 2",
        },
        {
            image: projImg3,
            title: "Project 3",
            description: "This is a description of Project 3.",
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
                <Row>
                    <Col size={12}>
                        <h1 style={{fontWeight: "bold"}}>Projects</h1>
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
