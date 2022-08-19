import Select from 'react-select';
import { Controller, useForm } from 'react-hook-form';
import { countryAPI } from '../services/countryApi/countryApi';
import { useEffect, useState } from 'react';

const options = [
    { value: 'currency', label: 'currency' },
    { value: 'region', label: 'region' },
];

export const Search = () => {
    const { register, handleSubmit, control } = useForm();
    const [params, setParams] = useState<any>();

    const onSubmit = (data: any) => {
        setParams(`${data.searchType.value}/${data.searchValue}`);
    };

    useEffect(() => {
        countryAPI.getByType(params).then(data => {
            console.log(data);
        });
    }, [params]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex p-4 gap-4">
            <input
                className="form-control w-75"
                type="text"
                {...register('searchValue')}
            />
            <Controller
                name="searchType"
                control={control}
                render={({ field }) => {
                    return (
                        <Select
                            options={options}
                            defaultValue={options[0]}
                            isMulti={false}
                            isSearchable={false}
                            {...field}
                        />
                    );
                }}
            />

            <button type="submit" className="btn btn-primary">
                Search
            </button>
        </form>
    );
};
