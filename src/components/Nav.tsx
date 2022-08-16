import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../router/routes';

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="d-flex gap-4 p-3">
                <NavLink to={routes.HOME}>Home</NavLink>
                <NavLink to={routes.SIGN_IN}>Sign In</NavLink>
                <NavLink to={routes.SIGN_UP}>Sign Up</NavLink>
            </div>
        </nav>
    );
};
