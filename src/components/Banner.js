import {Row} from "react-bootstrap";
import PacVideo from "../assets/video/BGVideo.webm";
import {ChevronCompactDown} from "react-bootstrap-icons";
import {useEffect, useState} from "react";
import resume from "../assets/docs/ResumeSLF.pdf";

export const Banner = () => {

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 150) {
                setScrolled(true);
            } else if (window.scrollY < 50) {
                setScrolled(false);
            }

            if (window.scrollY < window.innerHeight) {
                const distance = window.scrollY;
                document.querySelector(".video-container").style.transform = `translateY(${distance * .5}px)`;
                document.querySelector(".video-container").style.display = 'block';

            } else {
                document.querySelector(".video-container").style.display = 'none';
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
            <div className={"info-container"}>
                <Row className={'align-items-center'}>

                        <div className={"letters"}>
                            <h2>Hello! I'm</h2>
                            <h1>Sebastian<br/>Lopez<br/>Figueroa</h1>
                            <p>Software Engineer<br/>& Developer</p>
                            <a className="resume" href={resume} target={"_blank"} rel={"noreferrer"}><span>View Resume</span></a>
                        </div>

                </Row>
            </div>
            <a className={"moreButton " + (scrolled ? 'scrolled' : '')} title={"See More"} href="#projects"><ChevronCompactDown/></a>


        </section>
    )
}