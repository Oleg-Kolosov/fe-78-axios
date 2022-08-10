import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CountryRequestParams } from '../services/countryApi/countryApi';

type FormValues = {
    params: CountryRequestParams[];
};

interface IProps {
    setRequestParams: (params: CountryRequestParams[]) => void;
}

export const Form = ({ setRequestParams }: IProps) => {
    const { register, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            params: [],
        },
    });

    const onSubmit: SubmitHandler<FormValues> = ({ params }) => {
        setRequestParams(params);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="py-4">
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    value="population"
                    {...register('params')}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                    population
                </label>
            </div>
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck2"
                    value="maps"
                    {...register('params')}
                />
                <label className="form-check-label" htmlFor="exampleCheck2">
                    maps
                </label>
            </div>
            <button type="submit" className="btn btn-primary">
                Search
            </button>
        </form>
    );
};
