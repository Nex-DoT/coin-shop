import React,{useState , useEffect, useContext } from 'react';
//api
import { Api } from '../../api/coin';
//component
import CoinCart from './CoinCart';
//icon 
import { BsSearch } from "react-icons/bs";
//style 
import style from "../../styles/Shop.module.css"
//context
import { backContext } from '../../context/Reducer';
const Shop = () => {
    const [statee , dispatchh] = useContext(backContext);
    const [data , setData] = useState([]);
    const [input , newInput] = useState("")
    useEffect(()=>{
        dispatchh({type:"new" , payload:"shop"});
        console.log(statee);
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
              <input className={style.input} placeholder='Search' type="text" onKeyUp={keyUpHandeler} />
            </div>
            {newData.map(item => <CoinCart key={item.id} data={item} />)}
        </div>
    );
};

export default Shop;