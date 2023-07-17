import React,{useEffect , useContext} from 'react';
import { backContext } from '../../function/Reducer';
//icon
import { BsHouseDoorFill } from "react-icons/bs";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";

const Home = () => {
    const [statee , dispatchh] = useContext(backContext)
    useEffect(()=>{
        dispatchh({type:"new" , payload:"home"});
    },[])
    return (
        <div>
            <div>
                <div>
                    <BsCurrencyBitcoin/>
                </div>
            </div>
            <div>
                <div>
                    <BsCartFill/>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Home;