import React,{useReducer , createContext , useContext}from 'react';
import { DataContext } from './DataCoinApi';
const slicerContext = createContext()
const DataSlicer = ({children}) => {
    const [data, positive] = useContext(DataContext);
    
    //inistial State object
    const inistialState = {
        CurentPage: 1 ,
        Data: [data.slice(0 , 25)] ,
        SliceNum: 25 ,
        secondSliceNum: 50 ,
        DataNumSlice:25 ,
    }
    const reducer = (state,action) => {
        switch(action.type) {
            case "NEXT" :
                const newData = data.slice(state.SliceNum, state.secondSliceNum);
                return{
                    ...state,
                    data: [newData],
                    SliceNum : [...state.SliceNum + state.DataNumSlice],
                    secondSliceNum : [...state.secondSliceNum + state.DataNumSlice],
                }
                case "Back" :
                    let slicernum = state.SliceNum - state.DataNumSlice;
                    let secondslicenum = state.secondSliceNum - state.DataNumSlice;
                    const newData1 = data.slice(slicernum, secondslicenum);
                    return{
                        ...state,
                        data: [newData],
                        SliceNum : [slicernum],
                        secondSliceNum : [secondslicenum],
                    }            
                }
                
            }
    const [state , dispatch] = useReducer(reducer , inistialState);
    return (
        <slicerContext.Provider value={[state , dispatch]}>
            {children}
        </slicerContext.Provider>
    );
};

export default DataSlicer;