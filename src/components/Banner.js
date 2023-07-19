import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {ArrowRightCircle, Grid} from "react-bootstrap-icons";
import PacVideo from "../assets/video/BGVideo.webm";
import {ChevronCompactDown} from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";
import {useEffect, useState} from "react";

export const Banner = () => {

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 300) {
                setScrolled(true);
            } else if (window.scrollY < 50) {
                setScrolled(false);
            }

            if (window.scrollY < window.innerHeight) {
                const distance = window.scrollY;
                document.querySelector(".video-container").style.transform = `translateY(${distance * .5}px)`;
            }
        }
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section className={'banner'} id="home">
            <div className={"video-container"}>
                <video autoPlay loop muted src={PacVideo}/>
            </div>
            <Container>

                <Row className={'align-items-center'}>

                        <div className={"letters"}>
                            <h2>Hello! I'm</h2>
                            <h1>Sebastian<br/>Lopez<br/>Figueroa</h1>
                            <p>Software Engineer<br/>& Game Developer</p>
                            <button className={"connect"} onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25}/>
                            </button>
                        </div>

                </Row>
                <button className={"moreButton " + (scrolled ? 'scrolled' : '')} title={"See More"}>
                        <Nav.Link href="#projects"><ChevronCompactDown/></Nav.Link>
                </button>

            </Container>

        </section>
    )
}