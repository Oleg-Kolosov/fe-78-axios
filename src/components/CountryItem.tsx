import React from 'react';
import { ICountry } from '../services/countryApi/countryApi';

interface IProps {
    country: ICountry;
}

export const CountryItem = ({ country }: IProps) => {
    return (
        <div
            className="d-flex flex-column justify-content-between p-3 rounded shadow mb-3"
            style={{ width: 300 }}
        >
            <img
                src={country.flag}
                alt={`flag ${country.name}`}
                width={100}
                className="mb-2"
            />
            <h4>{country.name}</h4>
            <p>Region: {country.region}</p>
            <p>Subregion: {country.subregion}</p>
            {country.population && (
                <p>
                    Population{'  '}
                    <span className="badge bg-info">{country.population}</span>
                </p>
            )}
            {country.maps && (
                <div className="d-flex justify-content-between">
                    <p>Google maps</p>
                    <a href={country.maps.googleMaps}>see</a>
                </div>
            )}
        </div>
    );
};
