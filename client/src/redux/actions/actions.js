const CHANGEPAGINATION = 'CHANGEPAGINATION';
const BROWSER = 'BROWSER';
const CHANGEORDER = 'CHANGEORDER';
const FILTERTEMPS = 'FILTERTEMPS';
const BDORAPI = 'BDORAPI';


export const changePag = (data) =>{
    return{
        type: CHANGEPAGINATION,
        payload: data
    };
};

export const browse = (data) =>{
    return{
        type: BROWSER,
        payload: data
    };
};

export const changeOrder = (data) =>{
    return{
        type: CHANGEORDER,
        payload: data
    };
};

export const filterTemps = (data) =>{
    return{
        type: FILTERTEMPS,
        payload: data
    };
};

export const bdOrApi = (data) =>{
    return{
        type: BDORAPI,
        payload: data
    };
};