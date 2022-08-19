import { ROUTE } from './routes';

export type RouteType =
    | [ROUTE.HOME]
    | [ROUTE.SIGN_IN]
    | [ROUTE.SIGN_UP]
    | [ROUTE.NOT_FOUND]
    | [ROUTE.COUNTRY_DETAILS, { name: string }]
    | [ROUTE.FAVORITES]
    | [ROUTE.SEARCH];
