import React,{createContext , useReducer} from 'react';
const initialState = {
    cart: false,
    home: false ,
    shop:false,
    loginSignup: true
}
const reducerback = (statee , action)=>{
    switch(action.type){
        case "new" :
          let newsate={
              cart: false,
              home: false ,
              shop:false,
              loginSignup: false
          };
            return{
                ...newsate,
                [action.payload]:true
            }
    }
}
export const backContext = createContext();
const Reducer = ({children}) => {
const [statee , dispatchh] = useReducer(reducerback , initialState)
    return (
        <backContext.Provider value={[statee , dispatchh]}>
            {children}
        </backContext.Provider>
    );
};

export default Reducer;