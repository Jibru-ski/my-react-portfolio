import { Link } from 'react-router-dom';
import './index.scss'
import * as projects from '../../assets/projects-imgs';
import * as tools from '../../assets/tools-imgs';

const Home = () => {
    function pauseMarquee(id) {
        document.getElementById(id).style.animationPlayState = 'paused';
      }
    
      function startMarquee(id) {
        document.getElementById(id).style.animationPlayState = 'running';
      }
    return(
        <><section class="hero" id="hero">
            <div class="hero-head">
                <h1>Hey, I'm Jibran.</h1>
                <h1>I develop <span>Websites.</span></h1>
            </div>
            <div class="hero-sub-head">
                <p>An ambitious web developer with a knack for transforming concepts into aesthetically beautiful, intuitive websites.</p>
            </div>
            <div class="hero-btn">
                <Link to='/about'>About</Link>
                <div class="email-container">
                    <p id="text-to-copy">jb@gmail.com</p>
                    <button class="copy-btn" onclick="copyText()"><i class='bx bx-copy'></i>E-mail</button>
                </div>
            </div>
            <div class="avail-signal"><div class="animated-dot"></div> Available for Work</div>
            <div class="location"><i class="ri-map-pin-line"></i>Nairobi, Kenya</div>
        </section>
        <section class="project" id="project">
            <h1>Featured <span>Projects</span></h1>
            <section id="projects">
                <div class="proj">
                    <div class="img-box pr1">
                        <img src={projects.project1} alt=""></img>
                    </div>
                    <Link to='/projects' class="foot">
                        <h4>HUGS</h4>
                        <p>An e-commerce platform for jackets</p>
                    </Link>
                </div>
                <div class="proj">
                    <div class="img-box pr2">
                        <img src={projects.project2} alt=""></img>
                    </div>
                    <Link to='/projects' class="foot">
                        <h4>SHAWDXW</h4>
                        <p>An e-commerce platform for Japanese Tech Wear</p>
                    </Link>
                </div>
            </section>         
        </section>
        <section class="testimonials" id='testimonials'>
    <h1>Kind client <span>Responses</span></h1>
    <div class='marquee-mask glassy-bg'>
        <div class="marquee-container" id="marqueeLeft" onmouseover="pauseMarquee('marqueeLeft')" onmouseout="startMarquee('marqueeLeft')">
            <div class="marquee-content">
                <div class="testimonial">
                    <div class="profile">
                        <div class="profile-pic"></div>
                        <div class="profile-details">
                            <h2>Jill</h2>
                            <p>@jill</p>
                        </div>
                    </div>
                    <p class="quote">"I don't know what to say. I'm speechless. This is amazing."</p>
                </div>
                <div class="testimonial">
                    <div class="profile">
                        <div class="profile-pic"></div>
                        <div class="profile-details">
                            <h2>Zuri</h2>
                            <p>@Zuri</p>
                        </div>
                    </div>
                    <p class="quote">"I've never seen anything like this before. It's amazing. I love it."</p>
                </div>
                <div class="testimonial">
                    <div class="profile">
                        <div class="profile-pic"></div>
                        <div class="profile-details">
                            <h2>Lenny</h2>
                            <p>@Lenny</p>
                        </div>
                    </div>
                    <p class="quote">"I'm at a loss for words. This is amazing. I love it."</p>
                </div>
                <div class="testimonial">
                    <div class="profile">
                        <div class="profile-pic"></div>
                        <div class="profile-details">
                            <h2>Julia</h2>
                            <p>@julia</p>
                        </div>
                    </div>
                    <p class="quote">"Outstanding service! From start to finish, everything was perfect."</p>
                </div>
            </div>
        </div>
        
        <div class="marquee-container right" id="marqueeRight" onmouseover="pauseMarquee('marqueeRight')" onmouseout="startMarquee('marqueeRight')">
            <div class="marquee-content">
                <div class="testimonial">
                    <div class="profile">
                        <div class="profile-pic"></div>
                        <div class="profile-details">
                            <h2>Larry</h2>
                            <p>@Larry</p>
                        </div>
                    </div>
                    <p class="quote">"The user experience was flawless, and I’m genuinely impressed by His work"</p>
                </div>
                <div class="testimonial">
                    <div class="profile">
                        <div class="profile-pic"></div>
                        <div class="profile-details">
                            <h2>Hillary</h2>
                            <p>@Hillary</p>
                        </div>
                    </div>
                    <p class="quote">"I’ve never experienced such efficient and friendly support. Highly recommended!"</p>
                </div>
                <div class="testimonial">
                    <div class="profile">
                        <div class="profile-pic"></div>
                        <div class="profile-details">
                            <h2>Tueron</h2>
                            <p>@Tueron</p>
                        </div>
                    </div>
                    <p class="quote">"Quality and reliability at its best. I’ll definitely be returning for more."</p>
                </div>
                <div class="testimonial">
                    <div class="profile">
                        <div class="profile-pic"></div>
                        <div class="profile-details">
                            <h2>Nailo</h2>
                            <p>@Nailo</p>
                        </div>
                    </div>
                    <p class="quote">"This service is amazing! It exceeded my expectations in every way possible."</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="stack" id="stack">
    <h1>Stack: <span>Tools I Use</span></h1>
    <section class="tools glassy-bg">
        <a class="tool">
            <div class="tool-logo"><img src={tools.framer} alt=""></img></div>
            <div class="tool-details">
                <h2>Framer</h2>
                <p>Website Builder</p>
            </div>
        </a>
        <a class="tool">
            <div class="tool-logo"><img src={tools.figma} alt=""></img></div>
            <div class="tool-details">
                <h2>Figma</h2>
                <p>Design Tool</p>
            </div>
        </a>
        <a class="tool">
            <div class="tool-logo"><img src={tools.notion} alt=""></img></div>
            <div class="tool-details">
                <h2>Notion</h2>
                <p>Productivity Tool</p>
            </div>
        </a>
        <a class="tool">
            <div class="tool-logo"><img src={tools.chatgpt} alt=""></img></div>
            <div class="tool-details">
                <h2>Chatgpt</h2>
                <p>AI Assistant</p>
            </div>
        </a>
        <a class="tool">
            <div class="tool-logo"><img src={tools.boxicon} alt=""></img></div>
            <div class="tool-details">
                <h2>Boxicon</h2>
                <p>Icon Library</p>
            </div>
        </a>
        <a class="tool">
            <div class="tool-logo"><img src={tools.paypal} alt=""></img></div>
            <div class="tool-details">
                <h2>Paypal</h2>
                <p>Payment Provider</p>
            </div>
        </a>
        <Link class="stack-btn" to='/stack'>View All</Link>
    </section>
</section></>

    );
}

export default Home