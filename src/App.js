import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import {Projects} from './components/Projects';
import {Footer} from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from "react";

function App() {

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add('show');
                    // } else {
                    //     entry.target.classList.remove('show');
                }
            });
        });

        const observer2 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add('animate__animated', 'animate__fadeIn');
                } else {
                    entry.target.classList.remove('animate__animated', 'animate__fadeIn');
                }
            });
        });

        const projects = document.querySelectorAll('.project');
        const letters = document.querySelectorAll('.letters');
        projects.forEach(project => {
            observer.observe(project);
        });
        projects.forEach(letter => {
            observer2.observe(letter);
        });
    });

    return (
        <div className="App">
            <NavBar/>
            <Banner/>
            <Projects/>
            {/*<Skills/>*/}
            {/*<Contact/>*/}
            <Footer />
        </div>
    );
}

export default App;
