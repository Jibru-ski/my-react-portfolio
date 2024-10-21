import './index.scss'

const Footer = () => {
    function updateClock() {
        const timeElement = document.getElementById("time");
        const statusElement = document.getElementById("status");
    
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
    
        hours = hours % 12;
        hours = hours ? hours : 12; // 12-hour format
        const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    
        timeElement.textContent = formattedTime + ' ' + ampm;
    
        // Logic to determine the status message
        const fullHours = now.getHours();
        if (fullHours >= 22 || fullHours < 6) {
            statusElement.textContent = "Currently 💤";
        } else {
            statusElement.textContent = "Currently 👨‍💻 working";
        }
    }
    
    setInterval(updateClock, 1000);
    updateClock();    

    return(
        <footer class="glassy-bg">
            <div class="clock">
                <div class="status-contact">
                    <div id="status" class="status"></div>
                    <a href="#">Reach out <i class="ri-arrow-right-line arrow-move"></i></a>
                </div>
                
                <div id="time" class="time"></div>    
            </div>
            <p>© Copyright 2024. All rights Reserved.</p>
        </footer>
    );
}

export default Footer