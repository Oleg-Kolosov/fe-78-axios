import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { countryAPI } from '../services/countryApi/countryApi';

export const CountryDetails = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState<any>();

    const handleBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        countryAPI.getDetails(name).then(country => {
            setCountry(country[0]);
        });
    }, [name]);

    return (
        <div>
            <div className="d-flex justify-content-between p-4">
                <button
                    type="button"
                    className="btn btn-info text-white"
                    onClick={handleBack}
                >
                    Back
                </button>
                <h1>{name}</h1>
            </div>
            <div>
                <h4>Capital: {country && country.capital[0]}</h4>
            </div>
        </div>
    );
};
