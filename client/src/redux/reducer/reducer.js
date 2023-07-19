const initialState = {
    fav: [],
    showedImg: [],
    browser: '',
    order: 'asc',
    filterTemps: ''
};

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case "CHANGEPAGINATION":
            state.showedImg = []
            return {
                ...state,
                showedImg: action.payload
            }
        case "BROWSER":
            return{
                ...state,
                browser: action.payload
            }
        case "CHANGEORDER":
            return{
                ...state,
                order: action.payload
            }
        case "FILTERTEMPS":
            return{
                ...state,
                filterTemps: action.payload
            }
        default:
            return state
    };
};