import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainTemplate } from '../components/MainTemplate';
import { CountryDetails } from '../pages/CountryDetails';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { routes } from './routes';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={routes.HOME} element={<MainTemplate />}>
                <Route path={routes.HOME} element={<Home />}>
                    <Route path="/:name" element={<CountryDetails />} />
                </Route>
                <Route path={routes.SIGN_IN} element={<SignIn />} />
                <Route path={routes.SIGN_UP} element={<SignUp />} />
                <Route path={routes.NOT_FOUND} element={<NotFound />} />
            </Route>
        </Routes>
    );
};
