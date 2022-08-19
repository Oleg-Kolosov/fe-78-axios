import { RouteType } from './types';

export const createPath = (...args: RouteType) => {
    const [path, params] = args;

    if (typeof params === 'undefined') return path;

    return Object.entries(params).reduce((prev: string, [param, value]) => {
        return prev.replace(`:${param}`, '' + value);
    }, path);
};
