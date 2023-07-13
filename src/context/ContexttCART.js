import React,{createContext , useReducer } from 'react';
const initialState ={
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
}
const sumItem = item =>{
    const itemsCounter = item.reduce((total , products)=> total + products.quantity,0);
    const total = item.reduce((total , products)=> total + products.quantity * products.current_price ,0).toFixed(2);
    return {itemsCounter , total}
}
const reducerCoin = (state , action)=>{
    switch(action.type){
        case "ADD":
            if(! state.selectedItems.find(item => item.id === action.payload.id )){
                    state.selectedItems.push({
                        ...action.payload,
                        quantity: 1 
                    })
                return{
                    ...state,
                    selectedItems:[...state.selectedItems],
                    ...sumItem(state.selectedItems),

                }
            }
        case "REMOVE" : 
            const newSlected = state.selectedItems.filter(item=> item.id !== action.payload.id)
            return{
                ...state,
                selectedItems:[...newSlected],
                ...sumItem(newSlected),
            }
        case "INCREASE" : 
            const indexL = state.selectedItems.findIndex(item=> item.id === action.payload.id);
            state.selectedItems[indexL].quantity++;
            return{
                ...state,
                ...sumItem(state.selectedItems),
            }
       case "DECREASE" : 
            const indexX = state.selectedItems.findIndex(item=> item.id === action.payload.id);
            state.selectedItems[indexX].quantity--;
            return{
                ...state,
                ...sumItem(state.selectedItems),
            }
        case "CLEAR" : 
        return{
            selectedItems: [],
            ...sumItem(state.selectedItems),
              checkout: false
        }
        default: 
        return state
    }
}
export const CoinContext = createContext();
const ContexttCART = ({children}) => {
    const [state , dispatch] = useReducer(reducerCoin , initialState)
    return (
        <CoinContext.Provider value={[state , dispatch]}>
            {children}
        </CoinContext.Provider>
    );
};

export default ContexttCART;