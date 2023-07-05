const CHANGEPAGINATION = 'CHANGEPAGINATION';



export const changePag = (data) =>{
    return{
        type: CHANGEPAGINATION,
        payload: data
    }
}