const initialstate = {
    products:[]
}
export const productReducer = (state = initialstate,action)=>{
    switch (action.type) {
        case 'SET_PRODUCT':
            return {...state,products:action.payload};            
        case   'SELECTED_PRODUCT': 
            return state;
        default:
            return state
           
    }
}