import axios from 'axios';

enum CountryEndpoint {
    ALL = 'all',
}

export type CountryRequestParams =
    | 'flags'
    | 'name'
    | 'region'
    | 'subregion'
    | 'population'
    | 'maps';

export interface ICountry {
    flag: string;
    name: string;
    region: string;
    subregion: string;
    population?: number;
    maps?: ICountryMaps;
}

interface ICountryAPI {
    name: ICountryName;
    maps: ICountryMaps;
}

interface ICountryMaps {
    googleMaps: string;
    openStreetMaps: string;
}

interface ICountryName {
    common: string;
    official: string;
    nativeName: ICountryNativeName;
}

interface ICountryNativeName {
    [key: string]: string | undefined;
}

class CountryAPI {
    private readonly BASE_URL = process.env.REACT_APP_BASE_URL_COUNTRIES_API;
    private readonly API = axios.create({
        baseURL: this.BASE_URL,
    });

    private readonly DEFALUT_REQUEST_PARAMS: CountryRequestParams[] = [
        'flags',
        'name',
        'region',
        'subregion',
    ];

    public async getAll(newParams: CountryRequestParams[]): Promise<any> {
        const params = {
            fields: [...this.DEFALUT_REQUEST_PARAMS, ...newParams].join(','),
        };

        const { data } = await this.API.get<any>(CountryEndpoint.ALL, {
            params,
        });

        return data;
    }
}

export const countryAPI = new CountryAPI();
