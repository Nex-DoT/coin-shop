export const trueFalse = (state , data)=>{
    const boolean = !!state.selectedItems.find( item=> item.id === data.id);
    return boolean;
}
export const productN = (state , data) =>{
    const index = state.selectedItems.findIndex(item=> item.id === data.id);
    const number = state.selectedItems[index].quantity;
    return number;
}