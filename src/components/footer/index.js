import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import './index.scss';

const Footer = () => {

    useEffect(() => {
        function updateClock() {
            const timeElement = document.getElementById("time");
            const statusElement = document.getElementById("status");

            if (!timeElement || !statusElement) {
                console.error('Time or Status element not found.');
                return;
            }

            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';

            hours = hours % 12;
            hours = hours ? hours : 12;
            const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

            timeElement.textContent = formattedTime + ' ' + ampm;

            const fullHours = now.getHours();
            if (fullHours >= 22 || fullHours < 6) {
                statusElement.textContent = "Currently 💤";
            } else {
                statusElement.textContent = "Currently 👨‍💻 working";
            }
        }

        const intervalId = setInterval(updateClock, 1000);
        updateClock();

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <footer className="glassy-bg">
            <div className="clock">
                <div className="status-contact">
                    <div id="status" className="status"></div>
                    <Link to='/contact'>Reach out <i className="ri-arrow-right-line arrow-move"></i></Link>
                </div>

                <div id="time" className="time"></div>
            </div>
            <p>© Copyright 2024. All rights Reserved.</p>
        </footer>
    );
};

export default Footer;
