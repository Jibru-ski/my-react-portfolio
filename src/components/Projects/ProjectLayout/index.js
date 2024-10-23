import './index.scss'

const ProjectLayout = ({title, description, imageURL}) => {
    return(
        <>
        <section className='project-layout'>
            <header>
                <h1>{title}</h1>
            </header>
            <div className='project-body'>
                <p>{description}</p>
                <img src={imageURL} alt='project-image'></img>
            </div>
        </section>
        </>
    );
}

export default ProjectLayout