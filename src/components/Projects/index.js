import './index.scss'
import * as projects from '../../assets/projects-imgs';
import { Link } from 'react-router-dom';

const Projects = () => {
    return(
        <>
         <section class="project-hero">
        <h1>Projects</h1>
        <p>My remarkable projects with memorable experiences.</p>
        <div class="project-wrapper">
            <Link to='/projects/project-one' class="prj-container">
                <div class="prj-img">
                    <img class="prj-image" src={projects.project1} alt=""></img>
                </div>
                <div class="prj-details">
                    <div>
                        <h3>Hugs</h3>
                        <p>E-commerce</p>
                    </div>
                    <div class="prj-date">
                        <span>2023</span>
                    </div>
                </div>
            </Link>
            <Link to='/projects/project-two' class="prj-container">
                <div class="prj-img">
                    <img class="prj-image" src={projects.project2} alt=""></img>
                </div>
                <div class="prj-details">
                    <div>
                        <h3>Shadxw</h3>
                        <p>E-commerce</p>
                    </div>
                    <div class="prj-date">
                        <span>2023</span>
                    </div>
                </div>
            </Link>
            <a href="#" class="prj-container">
                <div class="prj-img">
                    <img class="prj-image" src={projects.project3} alt=""></img>
                </div>
                <div class="prj-details">
                    <div>
                        <h3>Desain</h3>
                        <p>Portfolio</p>
                    </div>
                    <div class="prj-date">
                        <span>2023</span>
                    </div>
                </div>
            </a>
            <a href="#" class="prj-container">
                <div class="prj-img">
                    <img class="prj-image" src={projects.project4} alt=""></img>
                </div>
                <div class="prj-details">
                    <div>
                        <h3>Drip</h3>
                        <p>Watch App</p>
                    </div>
                    <div class="prj-date">
                        <span>2023</span>
                    </div>
                </div>
            </a>
        </div>
    </section></>
    );
}

export default Projects