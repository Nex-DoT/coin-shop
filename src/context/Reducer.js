import React,{createContext , useReducer} from 'react';
const PhoneOrNot = ()=>{
    return navigator.maxTouchPoints > 0 && /Android|iPhone/.test(navigator.userAgent) ;
}
console.log(PhoneOrNot)
const initialState = {
    cart: false,
    home: false ,
    shop:false,
    loginSignup: true,
    PhoneBack : false,
}
const reducerback = (statee , action)=>{
    switch(action.type){
        case "new" :
            if(!PhoneOrNot()){
                    let newsate={
                        cart: false,
                        home: false ,
                        shop:false,
                        PhoneBack : false,
                        loginSignup: false,
                    };
                        return{
                            ...newsate,
                            [action.payload]:true
            }}else{
                let newsate={
                    cart: false,
                    home: false ,
                    shop:false,
                    PhoneBack : true,
                    loginSignup: false,
                };
                return {
                    ...newsate,
                }
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