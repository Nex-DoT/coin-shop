import React,{useState , useEffect} from 'react';
//api
import { Api } from '../api/coin';
//component
import CoinCart from './CoinCart';
//style 
import style from "../styles/Shop.module.css"
const Shop = () => {
    const [data , setData] = useState([])
    useEffect(()=>{
        const fetchApi = async()=>{
            setData(await Api());
        }
        fetchApi()
    },[])
    return (
        <div className={style.box}>
            {data.map(item => <CoinCart key={item.id} data={item} />)}
        </div>
    );
};

export default Shop;