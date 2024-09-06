import { Container, Row, Col } from "react-bootstrap";
import { Project } from "./Project";
import vid1 from "../assets/video/PacDemo.webm";
import vid2 from "../assets/video/TilesDemo.webm";
import projImg3 from "../assets/img/giantsDemo.png";
import projImg4 from "../assets/img/rotaractDemo.png";
import projImg5 from "../assets/img/HoopDemo.png";
import githubIcon from "../assets/img/GitHub-Logo.png";
import googlePlayIcon from "../assets/img/google-play.svg";
import livesiteIcon from "../assets/img/livesiteIcon.png";

export const Projects = () => {

    const projects = [
        {
            videoDemo: "",
            imgDemo: projImg4,
            title: "Rotaract Club of Prince George Website",
            description: "I collaborated closely with members of a non-profit organization to enhance their website. Tailoring the existing site to meet their new requirements and preferences, I overhauled the homepage, refined the overall styling, introduced responsive design, and incorporated additional pages, including the new \"Get Involved!\" section.",
            tags: ["JavaScript", "CSS", "Photoshop", "HTML", "Responsive Design", "Web Development", "UI", "Publishing"],
            link1: "",
            link1Img: "",
            link2: "https://portal.clubrunner.ca/15849/",
            link2Img: livesiteIcon,
            imageLocation: "left",
        },
        {
            videoDemo: vid2,
            title: "Tiles - Puzzle Game",
            description: "Crafted in Unity (C#) and available on Google Play, \"Tiles\" is a mobile puzzle game challenging players to navigate all tiles on the screen without retracing their steps. The game progressively introduces new elements to sustain player interest, with all assets, illustrations, animations, and coding personally developed.",
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
            description: "Revitalizing the iconic arcade game Pac-Man, this version offers a unique twist: players can either take on the role of Pac-Man or observe an AI mastering the game autonomously. The AI agent undergoes training through reinforcement learning utilizing TensorFlow, while the game itself is constructed using PyGame. Enhanced pathfinding algorithms empower the ghosts, and procedurally generated mazes add an extra layer of dynamism to the gaming experience.",
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
            description: "Crafted by a team of four programmers in the JAVA programming language, \"The Boyz\" stands out as a top-down 2D arena shooter video game. Engaging in intense battles, two players aim to eliminate each other until one exhausts their lives, declaring victory for the remaining player. My responsibilities included overseeing the game's UI, managing data transmission in multiplayer sessions, designing map layouts, implementing power-ups, and refining the logic governing bullets.",
            tags: ["Multiplayer", "Java", "Game Design & Development", "Networking", "UI", "Version Control", "Collaboration"],
            link1: "https://github.com/MrBoberto/GiantsUNBC",
            link1Img: githubIcon,
            link2: "",
            link2Img: "",
            imageLocation: "right",
        },
        {
            videoDemo: "",
            imgDemo: projImg5,
            title: "Hoop-A-Thon Fundraiser Website",
            description: "Collaborated with the 3 Rotary Clubs of Prince George to design and develop a dedicated website for their first Hoop-A-Thon fundraiser. The site provides comprehensive details about the event, including participant registration, donation options, and sponsorship opportunities. Key features include a responsive design for seamless viewing across devices, an appealing yet simple aesthetic, and integrated options for individuals and teams to register or donate directly online. The event rose around 10,000$ to support youth at risk, families living in poverty, and various Rotary community projects in Prince George. ",
            tags: ["Web Development", "UI/UX Design", "Responsive Design", "HTML", "CSS", "JavaScript", "Photoshop", "Volunteering"],
            link1: "https://portal.clubrunner.ca/15849/page/hoop-a-thon",
            link1Img: livesiteIcon,
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
                        <Project {...projects[4]} />
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
