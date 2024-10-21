import './index.scss'

const Contact = () => {
    return(
        <>
        <section class="contact-hero">
        <h1>Contact</h1>
        <p>I constantly seek opportunities to work with amazing folks on exciting projects. In need of a helping hand? I've got two!</p>
        <div class="hero-btn">
            <a href="#">Schedule free call</a>
        </div>
        <form class="glassy-bg" action="" method="post">
            <h2>Send a message</h2>
            <div class="fill-form">
                <div class="contact-name-email">
                    <input type="text" placeholder="Your Name"></input>
                    <input type="email" placeholder="Your@gmail.com"></input>
                </div>
                <textarea name="message" id="" placeholder="Your message"></textarea>
                <button type="submit">Send Message</button>
            </div>
        </form>
    </section>
        </>
    );
}

export default Contact