import { Container, Row, Col } from "react-bootstrap";
import  linkedin_logo  from "../assets/img/linkedin_logo.png";
import  github_logo  from "../assets/img/GitHub-Logo.png";
import  email_logo  from "../assets/img/email_logo.png";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center align-middle">
                    <Col  sm={4}  style={{padding: '1em'}}>
                        <h1>Sebastian Lopez Figueroa</h1>
                    </Col>
                    <Col  sm={4} style={{padding: '1em'}}>
                        <div className={"socials-icons"}>
                            <a href="https://www.linkedin.com/in/sebastian-lopez-figueroa/" target="_blank" rel="noreferrer"><img src={linkedin_logo} alt="LinkedIn" /></a>
                            <a href="https://github.com/Loppersy" target="_blank" rel="noreferrer"><img src={github_logo} alt="GitHub" /></a>
                            <a href="mailto:sebastianlofi@hotmail.com" target="_blank" rel="noreferrer"><img src={email_logo} alt="Email" /></a>
                        </div>
                    </Col>
                    <Col  sm={4} className="text-center text-sm-end" style={{padding: '1em'}}>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}