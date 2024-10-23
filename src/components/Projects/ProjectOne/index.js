
import projectOne from '../../../assets/projects-imgs/project.gif'
import ProjectLayout from '../ProjectLayout'
const ProjectOne = () => {
    const projectdata = {
        title: 'Project One',
        description: 'This is the description of the project.',
        imageURL: projectOne
    }

    return (
        <>
        <ProjectLayout {...projectdata}></ProjectLayout>
        <div className='code-used'>
                <div className='code'>
                    <i class='bx bxl-html5'></i>
                    <span>HTML5</span>
                </div>
                <div className='code'>
                    <i class='bx bxl-css3'></i>
                    <span>CSS3</span>
                </div>
                <div className='code'>
                    <i class='bx bxl-javascript'></i>
                    <span>JS</span>
                </div>
            </div>
        </>
    );
}

export default ProjectOne