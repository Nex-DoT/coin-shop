import React,{useState , useEffect} from 'react';
//api
import { Api } from '../api/coin';
//component
import CoinCart from './CoinCart';
//icon 
import { BsSearch } from "react-icons/bs";
//style 
import style from "../styles/Shop.module.css"
const Shop = () => {
    const [data , setData] = useState([]);
    const [input , newInput] = useState("")
    useEffect(()=>{
        const fetchApi = async()=>{
            setData(await Api());
        }
        fetchApi()
    },[input])
    const keyUpHandeler = event => {
        newInput(event.target.value);
    }
    const newData = data.filter(item=> item.name.toLowerCase().includes(input.toLowerCase()))
    return (
        <div className={style.box}>
            <div className={style.inputdiv}>
                <BsSearch className={style.icon}/>
              <input className={style.input} type="text" onKeyUp={keyUpHandeler} />
            </div>
            {newData.map(item => <CoinCart key={item.id} data={item} />)}
        </div>
    );
};

export default Shop;