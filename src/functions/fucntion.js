export const trueFalse = (state , data)=>{
    const boolean = !!state.selectedItems.find( item=> item.id === data.id);
    return boolean;
}
export const productN = (state , data) =>{
    const INDEX = state.selectedItems.findIndex(item => item.id === data.id);
    if(INDEX === -1){
        return false
    }else{
        return state.selectedItems[INDEX].quantity
    }
}
export const number = (state,data)=>{
    const newNumber =  state.selectedItems.findIndex(item=> item.id === data.id);
    if( newNumber === -1 ){
        return false
    }else{
        return state.selectedItems[newNumber].quantity;
    }
}