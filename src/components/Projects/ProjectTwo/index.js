import projectTwo from '../../../assets/projects-imgs/project2.jpeg'
import ProjectLayout from '../ProjectLayout'
const ProjectTwo = () => {
    const projectdata = {
        title: 'Project Two',
        description: 'This is the description of the project.',
        imageURL: projectTwo
    }

    return (
        <>
        <ProjectLayout {...projectdata}>
            <div className='Additional-content'>
                <h3>Additional Project Two Information</h3>
                <p>Here you can put more details specific to Project Two.</p>
            </div>
        </ProjectLayout>
        </>
    );
}

export default ProjectTwo