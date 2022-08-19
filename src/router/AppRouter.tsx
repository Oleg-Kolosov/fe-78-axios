import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainTemplate } from '../components/MainTemplate';
import { RequareAuth } from '../components/RequareAuth';
import { CountryDetails } from '../pages/CountryDetails';
import { Favorites } from '../pages/Favorites';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Search } from '../pages/Search';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { ROUTE } from './routes';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={ROUTE.HOME} element={<MainTemplate />}>
                <Route path={ROUTE.HOME} element={<Home />} />
                <Route
                    path={ROUTE.COUNTRY_DETAILS}
                    element={<CountryDetails />}
                />
                <Route path={ROUTE.SEARCH} element={<Search />} />

                <Route element={<RequareAuth />}>
                    <Route path={ROUTE.FAVORITES} element={<Favorites />} />
                </Route>

                <Route path={ROUTE.SIGN_IN} element={<SignIn />} />
                <Route path={ROUTE.SIGN_UP} element={<SignUp />} />
                <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
            </Route>
        </Routes>
    );
};
