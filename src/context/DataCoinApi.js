import React,{useState , useEffect , createContext } from 'react';
import { Api } from '../api/coin';
export const DataContext = createContext();
const DataCoinApi = ({children}) => {
    const [data , setData] = useState([])

    useEffect(()=>{
        const fetchApi = async ()=>{
            setData( await Api())
        }
        fetchApi()
    },[])
    const newDataP = data.filter(item => item.price_change_percentage_24h > 0 );
       const positive = [
            newDataP[0],
            newDataP[1],
            newDataP[2]
        ];
        
    return (
        <DataContext.Provider value={[data , positive]}>
            {children}
        </DataContext.Provider>
    );
};

export default DataCoinApi;