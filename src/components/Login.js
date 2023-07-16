import React,{useEffect,useContext} from 'react';
//component
import LoginFrom from './LoginFrom';
//context
import { backContext } from '../function/Reducer';
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
        <div>
           <LoginFrom/>
        </div>
    );
};

export default Login;