import React,{useState , useEffect, useContext  } from 'react';
//component
import CoinCart from './CoinCart';
//icon 
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
//style 
import style from "../../styles/Shop.module.css"
//context
import { backContext } from '../../context/Reducer';
import { DataContext } from '../../context/DataCoinApi';
import { BsSearch } from "react-icons/bs";


//SHOP component
const Shop = () => {
    
    //state
    const [searchData , setSearchData] = useState();
    const [input , newInput] = useState("");
    const [pagenumber , setPagenumber] = useState(1);
        const [number1 , setNumber1 ] = useState(0);
        const [number2 , setNumber2 ] = useState(25);
    //context
        const [statee , dispatchh] = useContext(backContext);
        const [data,positive] = useContext(DataContext);
    //useEfect
        useEffect(()=>{
                dispatchh({type:"new" , payload:"shop"});
            },[])
    //sliced list
        const slicedData = data.slice( number1,number2);
    //next page btn
        const nextPage = ()=> {
            setNumber1(prevNumber1 => prevNumber1 + 25);
            setNumber2(prevNumber2 => prevNumber2 + 25);
            setPagenumber(prevPageNumber => prevPageNumber + 1);
            };    
    //perv page btn
        const pervPage = ()=> {
            setNumber1(prevNumber1 => prevNumber1 - 25);
                setNumber2(prevNumber2 => prevNumber2 - 25);
                setPagenumber(prevPageNumber => prevPageNumber - 1);
            }; 
    //cheange handeler
    const cheangeHandeler = event =>{
        newInput(event.target.value);
    }
    //close handelr
    const closeHandeler = ()=>{
        newInput("");
        setSearchData("")
    }
    //Key Handeler for search   
        const keyUpHandeler = event => {
            // const newData = data.filter(item=> item.name.toLowerCase().includes(input.toLowerCase()));
            const newData = data.filter(item=> item.name.toLowerCase().includes(input.toLowerCase()));
                if(event.key === "Enter"){
                    setSearchData(newData);
                    if(input===""){
                        setSearchData("");
                    }
                }
            }
        //jsx
        return (
            <div className={style.box}>

                {/* //input box */}
                    <div className={style.inputdiv}>
                        {input=== "" ?<BsSearch className={style.icon}/> : <AiOutlineClose onClick={closeHandeler} className={style.icon}/> }
                         <input className={style.input} value={input} placeholder='Search' type="text" onKeyDown={keyUpHandeler} onChange={cheangeHandeler} />
                    </div>

                {/* //paginater */}
                    {!searchData && 
                        <div className={style.btnBoxShop}>
                            {pagenumber=== 1 ?<button><AiOutlineArrowLeft/></button> :<button onClick={pervPage}><AiOutlineArrowLeft/></button>}
                            <h3>{pagenumber}</h3>
                            {number2 === 200 ? <button><AiOutlineArrowRight/></button> : <button onClick={nextPage}><AiOutlineArrowRight/></button>}
                        </div>}
                {/* //map content */}
                    {searchData ? searchData.map(item => <CoinCart key={item.id} data={item} />) : slicedData.map(item => <CoinCart key={item.id} data={item} />)}
            </div>
        );
    };

export default React.memo(Shop);