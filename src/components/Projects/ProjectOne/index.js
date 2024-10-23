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
        <ProjectLayout {...projectdata}>
            <div className='Additional-content'>
                <h3>Additional Project One Information</h3>
                <p>Here you can put more details specific to Project One.</p>
            </div>
        </ProjectLayout>
        </>
    );
}

export default ProjectOne