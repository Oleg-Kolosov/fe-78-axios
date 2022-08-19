import React, { ReactNode } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { ROUTE } from '../router/routes';

interface IProps {
    children: ReactNode;
    to: ROUTE;
}

export const CustomLink = ({ children, to }: IProps) => {
    const isActive = useMatch(to);

    return (
        <Link to={to} className={`${isActive && 'text-danger'}`}>
            {children}
        </Link>
    );
};
