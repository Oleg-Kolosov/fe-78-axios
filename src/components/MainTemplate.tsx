import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Nav } from './Nav';

export const MainTemplate = () => {
    return (
        <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
            <Nav />
            <div className="flex-grow-1 container">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
