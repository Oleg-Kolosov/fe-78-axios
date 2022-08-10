import { ICountry } from '../countryApi/countryApi';

export const transformAllCountries = (countries: any): ICountry[] => {
    return countries.map((country: any) => {
        return {
            name: country.name.common,
            flag: country.flags.svg,
            region: country.region,
            subregion: country.subregion,
            population: country.population,
            maps: country.maps,
        };
    });
};
