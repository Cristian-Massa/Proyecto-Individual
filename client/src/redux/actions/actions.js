const CHANGEPAGINATION = 'CHANGEPAGINATION';
const BROWSER = 'BROWSER';


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