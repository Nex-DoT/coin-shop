import React,{useEffect,useContext} from 'react';
//component
import LoginFrom from './LoginFrom';
//context
import { backContext } from '../../context/Reducer';
//style
import style from "../../styles/Login.module.css"
const Login = () => {
    const [statee , dispatchh] = useContext(backContext);
    const actionname = {
        type: "LOGINsignUp"
    }
    useEffect(()=>{
        dispatchh({type:"new" , payload:"loginSignup"});
        console.log(statee);
    },[])
    return (
        <div className={style.newBox}>
           <LoginFrom/>
        </div>
    );
};

export default Login;