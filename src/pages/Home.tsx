import React, { useEffect, useState } from 'react';
import { CountryList } from '../components/CountryList';
import { Form } from '../components/Form';
import {
    countryAPI,
    CountryRequestParams,
    ICountry,
} from '../services/countryApi/countryApi';
import { transformAllCountries } from '../services/mappers';

export const Home = () => {
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [requestParams, setRequestParams] = useState<CountryRequestParams[]>(
        []
    );

    useEffect(() => {
        countryAPI
            .getAll(requestParams)
            .then(countries => {
                const transformedCountries = transformAllCountries(countries);
                setIsLoading(false);
                setCountries(transformedCountries);
            })
            .catch(err => {
                setIsLoading(false);
                setErrorMessage(err.message);
            });
    }, [requestParams]);
    return (
        <div>
            <h1>Home</h1>
            <Form setRequestParams={setRequestParams} />
            <CountryList
                countries={countries}
                isLoading={isLoading}
                errorMessage={errorMessage}
            />
        </div>
    );
};
