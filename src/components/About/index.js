import './index.scss'
import Profile from '../../assets/profile.jpeg'

const About = () => {
    return (
        <>
        <section class="about-hero">
        <h1>Get To Know Me</h1>
        <div class="about-me">
            <h2>About <span>Me</span></h2>
            <p>Hello, I'm Jibran Baraka, and I'm more than just a web designer; I'm a digital storyteller. I have always been captivated by the art of web design and develpment, and my journey in this field has been nothing short of exhilarating. With a commitment to excellence and a drive for innovation, I strive to deliver impactful solutions and designs that leave a lasting impression</p>

            <div class="about-me-img">
                <img src={Profile} alt=""></img>
            </div>
            
            <p class="about-majili">
                <h2>About <span>Maliji</span></h2>
                <p>Maliji is derived from the Swahili word "mali," which means wealth or riches. The suffix "-ji" can imply a sense of belonging or identity. Together, "Maliji" evokes a sense of richness and abundance, suggesting a wealth of creativity and resources. This name reflects the vibrant nature and creativity of African culture, positioning the web dev company as one that draws inspiration from the continent's diverse heritage and artistic expression.</p>
            </p>

            <div class="hero-btn">
                <a href="#">What I do</a>
                <div class="email-container">
                    <p id="text-to-copy">jb@gmail.com</p>
                    <button class="copy-btn" onclick="copyText()"><i class='bx bx-copy'></i>E-mail</button>
                </div>
            </div>
        </div>
    </section>
    <section class="education" id="education">
            <h1>Education <span>Timeline</span></h1>
            <div class="timeline">
                <div class="timeline-item timeline-item-left glassy-bg">
                    <h3>Bachelor of Computer Science</h3>
                    <p>Africa Nazarene University, Kenya</p>
                    <span>2023</span>
                </div>
                <div class="timeline-item timeline-item-right glassy-bg">
                    <h3> Certification for Web Development</h3>
                    <p>Coursera Platform</p>
                    <span>2022</span>
                </div>
                <div class="timeline-item timeline-item-left glassy-bg">
                    <h3>Certification for Wordpress Mastery</h3>
                    <p>Global Internet Fortunes, Kenya</p>
                    <span>2021</span>
                </div>
            </div>
        </section>
        <section class="about-tools" id="stack">
            <a href="#">
                <div class="about-stack glassy-bg">
                    <div class="head">
                        <h2>Stacks</h2>
                        <i class="ri-arrow-right-up-line"></i>
                    </div>
                    
                    <p>My technical toolkit includes proficiency in Framer, Figma, HTML, CSS, JavaScript, and various design software like Adobe Photoshop.</p>
                </div>
            </a>
        </section>
        </>
    );
}
export default About