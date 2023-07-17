const CHANGEPAGINATION = 'CHANGEPAGINATION';
const BROWSER = 'BROWSER';
const CHANGEORDER = 'CHANGEORDER';
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