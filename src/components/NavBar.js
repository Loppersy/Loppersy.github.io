import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState, useEffect} from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        var activeLinks = document.querySelectorAll('.navbar-link');
        const onScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(onScrollStop, 15);

            if (window.scrollY > 50 ){
                setScrolled(true);
            } else if (window.innerWidth >= 768){
                setScrolled(false);
            }


        }

        const onScrollStop = () => {
            //Change which is the active link in the navbar depending on the scroll position
            activeLinks = document.querySelectorAll('.navbar-link');

            activeLinks.forEach(link => {
                const section = document.querySelector(link.hash);
                // if section is null or the page is still scrolling, return
                if (section === null) {
                    return;
                }
                if (section.offsetTop-400 <= window.scrollY && section.offsetTop-400 + section.offsetHeight > window.scrollY) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }

        const onResize = () => {
            if (window.innerWidth < 768) {
                setScrolled(true);
            } else if (window.scrollY < 50){
                setScrolled(false);
            }
        }
        let timeoutId;
        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onResize);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className={scrolled ? "navbar-scrolled" : ""}>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><div>Home</div></Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}><div>Projects</div></Nav.Link>
                        {/*<Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>*/}
                        <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}><div>Contact</div></Nav.Link>
                    </Nav>
                    <span className="navbar-text">

            </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
