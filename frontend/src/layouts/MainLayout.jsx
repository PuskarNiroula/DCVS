import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import {Outlet} from 'react-router-dom';

const MainLayout = () => {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <Sidebar />

            <div style={{
                flex: 1,
                padding: "20px",
                overflowY: "auto"
            }}>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;


