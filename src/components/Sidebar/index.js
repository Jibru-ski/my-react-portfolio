import { NavLink } from 'react-router-dom'
import React, { useEffect, useRef } from 'react'
import './index.scss'
import profile from '../../assets/profile.jpeg'

const Sidebar = () => {
    const sidebarRef = useRef(null);
    const collapseButtonRef = useRef(null);

    useEffect(() => {
        const sidebar = sidebarRef.current;
        const collapseButton = collapseButtonRef.current;

        console.log('Sidebar:', sidebar);
        console.log('Collapse Button:', collapseButton);

        if (!sidebar || !collapseButton) {
            console.error("Sidebar or collapse button not found in DOM.");
            return;
        }

        const toggleSidebar = () => {
            sidebar.classList.toggle("collapse");
        };

        collapseButton.addEventListener("click", toggleSidebar);

        const handleClickOutsideSidebar = (event) => {
            if (sidebar && !sidebar.contains(event.target) && !collapseButton.contains(event.target)) {
                sidebar.classList.add("collapse");
            }
        };

        document.addEventListener("click", handleClickOutsideSidebar);

        return () => {
            collapseButton.removeEventListener("click", toggleSidebar);
            document.removeEventListener("click", handleClickOutsideSidebar);
        };
    }, []);

    return (
        <>
            <div className="sidebar" id="sidebar" ref={sidebarRef}>
                <div class='sidebar-head'>
                    <div className="profile">
                        <div className="profile-pic"><img src={profile} alt="Profile" /></div>
                        <div className="name-title hide">
                            <h3>Jibran Baraka</h3>
                            <p>Jibru-ski</p>
                        </div>
                    </div>
                </div>
                <button className="collapse-btn" id="collapse-btn" ref={collapseButtonRef}><i className='bx bx-chevron-left'></i></button>
                <nav>
                    <NavLink activeClassName="active" className='nav-link' to='/'><i className='bx bx-compass'></i><span>Explorer</span><div className="identifier" value="1">1</div></NavLink>
                    <NavLink activeClassName="active" className='nav-link' to='/about'><i className='bx bxs-user-detail'></i><span>About</span><div className="identifier" value="2">2</div></NavLink>
                    <NavLink activeClassName="active" className='nav-link' to='/projects'><i className='bx bx-code-alt'></i><span>Projects</span><div className="identifier" value="3">3</div></NavLink>
                    <NavLink activeClassName="active" className='nav-link' to='/services'><i className='bx bx-bell'></i><span>Services</span><div className="identifier" value="4">4</div></NavLink>
                    <NavLink activeClassName="active" className='nav-link' to='/stack'><i className='bx bxl-stack-overflow'></i><span>Stack</span><div className="identifier" value="5">5</div></NavLink>
                    <NavLink activeClassName="active" className='nav-link' to='/contact'><i className='bx bxs-megaphone'></i><span>Contact</span><div className="identifier" value="6">6</div></NavLink>
                </nav>
                <div className='social'>
                    <NavLink className='nav-link social' target='_blank'><i className='bx bxl-instagram'></i><span>Instagram</span><div className="identifier arrow"><i className="ri-arrow-right-up-line arrow"></i></div></NavLink>
                    <NavLink className='nav-link social' target='_blank'><i className='bx bxl-linkedin'></i><span>LinkedIn</span><div className="identifier arrow"><i className="ri-arrow-right-up-line arrow"></i></div></NavLink>
                    <NavLink className='nav-link social' target='_blank'><i className='bx bxl-github'></i><span>Github</span><div className="identifier arrow"><i className="ri-arrow-right-up-line arrow"></i></div></NavLink>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
