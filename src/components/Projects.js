import { Container, Row, Col } from "react-bootstrap";
import { Project } from "./Project";
import vid1 from "../assets/video/PacDemo.webm";
import vid2 from "../assets/video/TilesDemo.webm";
import projImg3 from "../assets/img/giantsDemo.png";
import projImg4 from "../assets/img/rotaractDemo.png";
import githubIcon from "../assets/img/GitHub-Logo.png";
import googlePlayIcon from "../assets/img/google-play.svg";
import livesiteIcon from "../assets/img/livesiteIcon.png";

export const Projects = () => {

    const projects = [
        {
            videoDemo: "",
            imgDemo: projImg4,
            title: "Rotaract Club of Prince George Website",
            description: "An upgraded website for a non-profit organization. I worked closely with the club members to customize their existing site according to their new needs and preference. More specifically, I revamped the entire homepage, upgraded the styling of the entire website, implemented responsive design, and added a few extra pages, such as the \"Get involved!\" page.",
            tags: ["JavaScript", "CSS", "Photoshop", "HTML", "Mobile", "Web Development", "UI", "Publishing"],
            link1: "",
            link1Img: "",
            link2: "https://portal.clubrunner.ca/15849/",
            link2Img: livesiteIcon,
            imageLocation: "left",
        },
        {
            videoDemo: vid2,
            title: "Tiles - Puzzle Game",
            description: "\"Tiles\" is a mobile puzzle game made in Unity (C#) and published in Google Play. Use your problem-solving skills to walk over all tiles on the screen, but without backtracking. New elements are introduced as the game goes on to keep the player engaged. All assets, illustrations, animations and coding were made by me.",
            tags: ["Unity", "C#", "Photoshop", "Animation", "Mobile", "UI", "Game Design & Development", "Publishing"],
            link1: "https://github.com/Loppersy/Tiles",
            link1Img: githubIcon,
            link2: "https://play.google.com/store/apps/details?id=com.selofi.tiles",
            link2Img: "",
            imageLocation: "right",
        },
        {
            videoDemo: vid1,
            title: "Machine Learning Pacman",
            description: "Reimplementation of the classic arcade game, Pacman, but with a twist: You can play as Pacman or watch an AI learn and play by itself. The AI agent is trained using reinforcement learning with TensorFlow and the game is built using PyGame.\r\n Ghosts use an improved pathfinding algorithm and mazes are procedurally generated.",
            tags: ["Reinforcement Learning", "Python", "TensorFlow", "PyGame", "Pathfinding", "Procedural Generation"],
            link1: "https://github.com/Loppersy/ProcedurallyGeneratedPacman",
            link1Img: githubIcon,
            link2: "",
            link2Img: "",
            imageLocation: "left",
        },
        {
            videoDemo: "",
            imgDemo: projImg3,
            title: "Multiplayer Shooter",
            description: "\"The Boyz\" is a top-down 2D arena shooter video game developed by 4 programmers in the JAVA programming language. In the game, two players try to shoot each other until one of them runs out of lives, giving the victory to the other player. I was in charge of the game's UI, the data transmitted during multiplayer sessions, the map layouts, power ups and the bullets' logic.",
            tags: ["Multiplayer", "Java", "Game Design & Development", "Networking", "UI", "Version Control", "Collaboration"],
            link1: "https://github.com/MrBoberto/GiantsUNBC",
            link1Img: githubIcon,
            link2: "",
            link2Img: "",
            imageLocation: "right",
        },
    ];

    return (
        <section className="projects" id="projects">
            <div className={"header-bg"}><h1>PROJECTS</h1></div>
            <Container>
                <Row>
                    <Col size={12}>
                        <Project {...projects[0]} />
                        <Project {...projects[1]} />
                        <Project {...projects[2]} />
                        <Project {...projects[3]} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
