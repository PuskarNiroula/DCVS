import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import {Outlet} from 'react-router-dom';

const MainLayout = () => {
    return (
        <div style={{display: "flex"}}>
            <Sidebar />
                <div style={{marginLeft: "250px",padding: "20px", flex: 1}}>
                    <Outlet />
                </div>
        </div>
    );

};
export default MainLayout;

