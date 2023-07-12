import React,{createContext , useReducer } from 'react';
const initialState ={
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
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
                    selectedItems:[...state.selectedItems]
                }
            }else{console.log("hi")}
        case "REMOVE" : 
            const newSlected = state.selectedItems.filter(item=> item.id !== item.id)
            return{
                ...state,
                selectedItems:[...newSlected]
            }
        case "INCREASE" : 
            const indexL = state.selectedItems.findIndex(item=> item.neme === action.payload.neme);
            state.selectedItems[indexL].quantity++;
            return{
                ...state,
            }
       case "DECREASE" : 
            const indexX = state.selectedItems.findIndex(item=> item.id === action.payload.id);
            state.selectedItems[indexX].quantity--;
            return{
                ...state,
            }
        case "CLEAR" : 
        return{
            selectedItems: [],
              itemsCounter: 0,
              total: 0,
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