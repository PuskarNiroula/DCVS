import React from 'react';
import './Sidebar.css';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-logo">DCVS</h2>
            <nav className="sidebar-nav">
                <NavLink to='/dashboard' className="sidebar-link">
                    Dashboard
                </NavLink>
                <NavLink to='/dashboard' className="sidebar-link">
                    Certificate Management
                </NavLink>
                <NavLink to='/dashboard' className="sidebar-link">
                    User Management
                </NavLink>
                <NavLink to='/dashboard' className="sidebar-link">
                    Track Certificate
                </NavLink>
                <NavLink to='/dashboard' className="sidebar-link">
                    Certificate Verification Request
                </NavLink>
                <NavLink to='/dashboard' className="sidebar-link">
                    Profile
                </NavLink>
                <NavLink to='/dashboard' className="sidebar-link">
                    Settings
                </NavLink>
            </nav>
        </div>
    );
};
export default Sidebar;