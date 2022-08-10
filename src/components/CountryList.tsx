import React from 'react';
import { ICountry } from '../services/countryApi/countryApi';
import { CountryItem } from './CountryItem';

interface IProps {
    countries: ICountry[];
    isLoading: boolean;
    errorMessage: string;
}

export const CountryList = ({ countries, isLoading, errorMessage }: IProps) => {
    if (isLoading) {
        return (
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: 400 }}
            >
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (errorMessage) {
        return (
            <h4 className="text-center mt-5">Oooooppps {errorMessage} 🙉</h4>
        );
    }
    return (
        <div className="d-flex flex-wrap gap-3 justify-content-around">
            {countries.map(country => {
                return <CountryItem country={country} key={country.name} />;
            })}
        </div>
    );
};
