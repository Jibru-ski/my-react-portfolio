import { NavLink } from 'react-router-dom'
import './index.scss'
import profile from '../../assets/profile.jpeg'

const Sidebar = () => {
    return (
        <>
        <div class="sidebar" id="sidebar">
            <div>
                <div class="profile">
                    <div class="profile-pic"><img src={profile} alt="Profilw"></img></div>
                <div class="name-title hide">
                    <h3>Jibran Baraka</h3>
                    <p>Jibru-ski</p>
                </div>
            </div>
            </div>
            <button class="collapse-btn" id="collapse-btn"><i class='bx bx-chevron-left'></i></button>
            <nav>
                <NavLink exact="true" activeClassName="active" className='nav-link' to='/'><i class='bx bx-compass'></i>Explorer<div class="identifier" value="1">1</div></NavLink>
                <NavLink exact="true" activeClassName="active" className='nav-link' to='/about'><i class='bx bxs-user-detail'></i>About<div class="identifier" value="2">2</div></NavLink>
                <NavLink exact="true" activeClassName="active" className='nav-link' to='/projects'><i class='bx bx-code-alt'></i>Projects<div class="identifier" value="3">3</div></NavLink>
                <NavLink exact="true" activeClassName="active" className='nav-link' to='/services'><i class='bx bx-bell'></i>Services<div class="identifier" value="4">4</div></NavLink>
                <NavLink exact="true" activeClassName="active" className='nav-link' to='/stack'><i class='bx bxl-stack-overflow'></i>Stack<div class="identifier" value="5">5</div></NavLink>
                <NavLink exact="true" activeClassName="active" className='nav-link' to='/contact'><i class='bx bxs-megaphone'></i>Contact<div class="identifier" value="6">6</div></NavLink>
            </nav>
            <div className='social'>
                <NavLink className='nav-link social' target='_blank'><i class='bx bxl-instagram'></i>Instagram<div class="identifier arrow"><i class="ri-arrow-right-up-line arrow"></i></div></NavLink>
                <NavLink className='nav-link social' target='_blank'><i class='bx bxl-linkedin'></i>LinkedIn<div class="identifier arrow"><i class="ri-arrow-right-up-line arrow"></i></div></NavLink>
                <NavLink className='nav-link social' target='_blank'><i class='bx bxl-github'></i>Github<div class="identifier arrow"><i class="ri-arrow-right-up-line arrow"></i></div></NavLink>
            </div>
            
        </div>
    </>
    );
}

export default Sidebar