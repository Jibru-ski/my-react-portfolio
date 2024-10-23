import { Outlet } from 'react-router-dom';
import './index.scss'

const ProjectLayout = ({ title, description, imageURL }) => {
    return(
        <>
        <Outlet/>
        <section className='project-layout'>
            <div className='project-head'>
                <h1>{title}</h1>
            </div>
            <div className='project-body'>
                <p>{description}</p>
                <img src={imageURL} alt=''></img>
            </div>
        </section>
        </>
    );
}

export default ProjectLayout