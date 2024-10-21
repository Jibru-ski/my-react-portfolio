import './index.scss'

const Services = () => {
    return(
        <>
        <section class="service-hero" id="service-hero">
            <h1>Services</h1>
            <p>Our design services turn concepts into fascinating realities by fusing creativity and usefulness.</p>

            <div class="hero-btn">
                <a href="#">Schedule free call</a>
                <div class="email-container">
                    <p id="text-to-copy">jb@gmail.com</p>
                    <button class="copy-btn" onclick="copyText()"><i class='bx bx-copy'></i>E-mail</button>
                </div>
            </div>
        </section>
        <div className='services'>
            <section class="service-section glassy-bg" id="service-section">
                <div class="service-type-charges">
                    <h3>Website Design</h3>
                    <div class="service-charges">
                        <span>Starts at $500</span>
                    </div>
                </div>
                <div class="service-details">
                    <p>Craft visually appealing, responsive, and user-friendly website layouts that align with brand identity while ensuring a seamless user experience.</p>
                    <ul>
                        <li>Custom Web Design</li>
                        <li>UI/UX Design</li>
                        <li>Responsive Design</li>
                    </ul>
                </div>
                <div class="hero-btn">
                    <a href="#">Get started now</a>
                </div>
            </section>
            <section class="service-section glassy-bg" id="service-section">
                <div class="service-type-charges">
                    <h3>Website Development</h3>
                    <div class="service-charges">
                        <span>Starts at $500</span>
                    </div>
                </div>
                <div class="service-details">
                    <p>Build and code both front-end and back-end solutions for websites, handling everything from the visual interface to server management.</p>
                    <ul>
                        <li>Front-End Development</li>
                        <li>Back-End Development</li>
                        <li>Full-Stack Development</li>
                    </ul>
                </div>
                <div class="hero-btn">
                    <a href="#">Get started now</a>
                </div>
            </section>
            <section class="service-section glassy-bg" id="service-section">
                <div class="service-type-charges">
                    <h3>E-commerce Solutions</h3>
                    <div class="service-charges">
                        <span>Starts at $500</span>
                    </div>
                </div>
                <div class="service-details">
                    <p>Design and develop online stores with secure payment integrations, product management systems, and seamless user experience.</p>
                    <ul>
                        <li>Online Store Setup</li>
                        <li>Payment Gateway Intergration</li>
                        <li>Product Management</li>
                    </ul>
                </div>
                <div class="hero-btn">
                    <a href="#">Get started now</a>
                </div>
            </section>
            <section class="service-section glassy-bg" id="service-section">
                <div class="service-type-charges">
                    <h3>Website Maintenance and Support</h3>
                    <div class="service-charges">
                        <span>Starts at $500</span>
                    </div>
                </div>
                <div class="service-details">
                    <p>Regularly update websites, fix bugs, and optimize performance for smooth, secure, and up-to-date functionality.</p>
                    <ul>
                        <li>Website Updates</li>
                        <li>Bug Fixes and Troubleshooting</li>
                        <li>Perfomance Optimization</li>
                    </ul>
                </div>
                <div class="hero-btn">
                    <a href="#">Get started now</a>
                </div>
            </section>
            <section class="service-section glassy-bg" id="service-section">
                <div class="service-type-charges">
                    <h3>Consultation and Strategy</h3>
                    <div class="service-charges">
                        <span>Starts at $500</span>
                    </div>
                </div>
                <div class="service-details">
                    <p>Provide expert advice on web strategy, digital transformation, and design improvements to enhance online presence</p>
                    <ul>
                        <li>Web Strategy Consulting</li>
                        <li>UI/UX Audits</li>
                    </ul>
                </div>
                <div class="hero-btn">
                    <a href="#">Get started now</a>
                </div>
            </section>
        </div>
        </>
    );
}

export default Services