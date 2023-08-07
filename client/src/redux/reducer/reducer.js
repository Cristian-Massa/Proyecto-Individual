const initialState = {
    fav: [],
    showedImg: [],
    browser: '',
    order: 'asc',
    filterTemps: '',
    bdOrApi: 'api',
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
            case "BDORAPI":
                return{
                    ...state,
                    bdOrApi: action.payload
                }
        default:
            return state
    };
};