const initialState = {
    fav: [],
    showedImg: []
};

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case "CHANGEPAGINATION":
            state.showedImg = []
            return {
                ...state,
                showedImg: action.payload
            }
        default:
            return state
    };
};