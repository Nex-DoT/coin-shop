import React,{useState , useEffect, useContext ,useTransition } from 'react';
//component
import CoinCart from './CoinCart';
//icon 
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
//style 
import style from "../../styles/Shop.module.css"
//context
import { backContext } from '../../context/Reducer';
import { DataContext } from '../../context/DataCoinApi';

//SHOP component
const Shop = () => {
    //state
    const [pagenumber , setPagenumber] = useState(1);
    const [number1 , setNumber1 ] = useState(0);
    const [number2 , setNumber2 ] = useState(25);
    
    //context
    const [statee , dispatchh] = useContext(backContext);
    const [data,positive] = useContext(DataContext)
    
    useEffect(()=>{
        dispatchh({type:"new" , payload:"shop"});
    },[])
    const slicedData = data.slice( number1,number2);

    const nextPage = ()=> {
        setNumber1(prevNumber1 => prevNumber1 + 25);
        setNumber2(prevNumber2 => prevNumber2 + 25);
        setPagenumber(prevPageNumber => prevPageNumber + 1);
    };    
    const pervPage = ()=> {
        setNumber1(prevNumber1 => prevNumber1 - 25);
        setNumber2(prevNumber2 => prevNumber2 - 25);
        setPagenumber(prevPageNumber => prevPageNumber - 1);
    };    
    return (
        <div className={style.box}>
            {console.log(positive , data)}
            
          <div className={style.btnBoxShop}>
                {pagenumber=== 1 ?<button><AiOutlineArrowLeft/></button> :<button onClick={pervPage}><AiOutlineArrowLeft/></button>}
                  <h3>{pagenumber}</h3>
                {number2 === 200 ? <button><AiOutlineArrowRight/></button> : <button onClick={nextPage}><AiOutlineArrowRight/></button>}
            </div>
            
            {slicedData.map(item => <CoinCart key={item.id} data={item} />)}
        </div>
    );
};

export default React.memo(Shop);