import React,{useState , useEffect , createContext , useTransition} from 'react';
import { Api } from '../api/coin';
export const DataContext = createContext();
const DataCoinApi = ({children}) => {
    const [isPranding , startTransition] = useTransition();
    const [data , setData] = useState([]);
    const [positive , setPositive] = useState([]);
    useEffect(()=>{
        const fetchApi = async ()=>{
            setData(await Api())
        }
        fetchApi()
        startTransition(()=>{
            setPositive(data.filter( item=> item.price_change_percentage_24h > 0 ));
            console.log(positive);
        },[])
    },[])
    return (
        <DataContext.Provider value={[data , positive]}>
            {children}
        </DataContext.Provider>
    );
};

export default React.memo(DataCoinApi);