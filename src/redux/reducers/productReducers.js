const initialstate = {
    products:[],
    selectedProduct:{}
}
export const productReducer = (state = initialstate,action)=>{
    switch (action.type) {
        case 'SET_PRODUCT':
            return {...state,products:action.payload};            
        case   'SELECTED_PRODUCT': 
            return {...state,selectedProduct:action.payload};
        case   'REMOVE_SELECTED_PRODUCT':
            return {...state,selectedProduct:{}}
        default:
            return state
           
    }
}