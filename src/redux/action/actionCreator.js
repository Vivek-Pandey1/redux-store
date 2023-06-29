export const setProduts = (products)=>{
    return{
        type:'SET_PRODUCT',
        payload: products,
    }
}
export const selectedProduts = (product)=>{
    return{
        type:'SELECTED_PRODUCT',
        payload: product,
    }
}
export const removeSelectedProduts = (product)=>{
    return{
        type:'REMOVE_SELECTED_PRODUCT',
    }
}