const initialState = {
    fav: [],
    showedImg: [],
    browser: ''
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
        default:
            return state
    };
};