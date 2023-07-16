import React,{createContext , useEffect , useState} from 'react';
import { Api } from '../api/coin';
export const positiveContext = createContext()
const PositiveItems = ({children}) => {
    const [data , setData] = useState([]);
    useEffect(()=>{
        const data = async ()=>{
            setData(await Api());
        }
        data()
    })
    const positiveData = data.filter(item=> item.price_change_percentage_24h > 0 );
    const newpositiveData = [
        positiveData[0],
        positiveData[1],
        positiveData[2],
    ]
    return (
        <positiveContext.Provider value={[newpositiveData]}>
            {children}
        </positiveContext.Provider>
    );
};

export default PositiveItems;