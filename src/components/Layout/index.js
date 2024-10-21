import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';
import Footer from '../footer';

const Layout = () => {
    return (
        <>
        <Sidebar />
        <Outlet />
        <Footer/>
        </>
    );
}

export default Layout;
