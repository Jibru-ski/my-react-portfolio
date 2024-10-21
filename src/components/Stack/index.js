import './index.scss'
import * as tools from '../../assets/tools-imgs';

const Tools = () => {
    return (
        <>
        <div class="stack-hero" id="stack-hero">
            <h1>Stack</h1>
            <p>Tools, resourses and softwares I use daily</p>
        </div>
        <section class="stack-type glassy-bg" id="stack-type">
            <h3>Design</h3>
            <div class="stack-type-grid">
                <a href="#" class="tool">
                    <div class="tool-logo"><img src={tools.figma} alt=""></img></div>
                    <div class="tool-details">
                        <h2>Figma</h2>
                        <p>Design Tool</p>
                    </div>
                </a>
                <a href="#" class="tool">
                    <div class="tool-logo"><img src={tools.boxicon} alt=""></img></div>
                    <div class="tool-details">
                        <h2>Boxicons</h2>
                        <p>Icon Library</p>
                    </div>
                </a>
                <a href="#" class="tool">
                    <div class="tool-logo"><img src={tools.icon8} alt=""></img></div>
                    <div class="tool-details">
                        <h2>Icon8</h2>
                        <p>Colored Icon Library</p>
                    </div>
                </a>
            </div>
        </section>
        <section class="stack-type glassy-bg" id="stack-type">
            <h3>Productivity</h3>
            <div class="stack-type-grid">
                <a href="#" class="tool">
                    <div class="tool-logo"><img src={tools.notion} alt=""></img></div>
                    <div class="tool-details">
                        <h2>Notion</h2>
                        <p>Project Management</p>
                    </div>
                </a>
                <a href="#" class="tool">
                    <div class="tool-logo"><img src={tools.calendly} alt=""></img></div>
                    <div class="tool-details">
                        <h2>Calendly</h2>
                        <p>Calendar</p>
                    </div>
                </a>
            </div>
        </section>
        <section class="stack-type glassy-bg" id="stack-type">
            <h3>Development</h3>
            <div class="stack-type-grid">
                <a href="#" class="tool">
                    <div class="tool-logo"><img src={tools.paypal} alt=""></img></div>
                    <div class="tool-details">
                        <h2>Paypal</h2>
                        <p>Payment Platform</p>
                    </div>
                </a>
                <a href="#" class="tool">
                    <div class="tool-logo"><img src={tools.vscode} alt=""></img></div>
                    <div class="tool-details">
                        <h2>Vs code</h2>
                        <p>Development Tool</p>
                    </div>
                </a>
                <a href="#" class="tool">
                    <div class="tool-logo"><img src={tools.framer} alt=""></img></div>
                    <div class="tool-details">
                        <h2>Framer</h2>
                        <p>Web design Tool</p>
                    </div>
                </a>
                <a href="#" class="tool">
                    <div class="tool-logo"><img src={tools.webflow} alt=""></img></div>
                    <div class="tool-details">
                        <h2>Web Flow</h2>
                        <p>Visual Development Tool</p>
                    </div>
                </a>
            </div>
        </section>
        <section class="stack-type glassy-bg" id="stack-type">
            <h3>Artificial Intelligence</h3>
            <div class="stack-type-grid">
                <a href="#" class="tool">
                    <div class="tool-logo"><img src={tools.chatgpt} alt=""></img></div>
                    <div class="tool-details">
                        <h2>Chatgpt</h2>
                        <p>OpenAI</p>
                    </div>
                </a>
                <a href="#" class="tool">
                    <div class="tool-logo"><img src={tools.magicUI} alt=""></img></div>
                    <div class="tool-details">
                        <h2>Magic UI</h2>
                        <p>AI Design Tool</p>
                    </div>
                </a>
                
            </div>
        </section>
        </>
    );
}

export default Tools