import React from 'react';
import { ROUTE } from '../router/routes';
import { CustomLink } from './CustomLink';

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="d-flex gap-4 p-3">
                <CustomLink to={ROUTE.HOME}>Home</CustomLink>
                <CustomLink to={ROUTE.FAVORITES}>Favorites</CustomLink>
                <CustomLink to={ROUTE.SEARCH}>Search</CustomLink>
                <CustomLink to={ROUTE.SIGN_IN}>Sign In</CustomLink>
                <CustomLink to={ROUTE.SIGN_UP}>Sign Up</CustomLink>
            </div>
        </nav>
    );
};
