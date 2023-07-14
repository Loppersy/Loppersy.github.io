import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import {Projects} from './components/Projects';
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

        const projects = document.querySelectorAll('.project');
        projects.forEach(project => {
            observer.observe(project);
        });
    });

    return (
        <div className="App">
            <NavBar/>
            <Banner/>
            {/*<Skills />*/}
            <Projects/>
            {/*<Contact />*/}
            {/*<Footer />*/}
        </div>
    );
}

export default App;
