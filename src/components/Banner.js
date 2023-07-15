import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import PacVideo from "../assets/video/BGVideo.webm";

export const Banner = () => {

    return (
        <section className={'banner'} id="home">
            <Container>
                <Row className={'align-items-center'}>
                        <div className={"letters"}>
                            <h2>Hello! I'm</h2>
                            <h1>Sebastian</h1>
                            <h1>Lopez</h1>
                            <h1>Figueroa</h1>
                            <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25}/>
                            </button>
                        </div>
                </Row>
            </Container>
            <section className={"video-container"}>
                <video autoPlay loop muted src={PacVideo}/>
            </section>
        </section>
    )
}