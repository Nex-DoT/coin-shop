import React , {useEffect,useContext} from 'react';
//component 
import SignUpForm from './SignUpForm';
//style
import style from "../../styles/SingUp.module.css"
//context
import { backContext } from '../../context/Reducer';
//signup component
const SignUp = () => {
    const [statee , dispatchh] = useContext(backContext);
    useEffect(()=>{
            dispatchh({type:"new" , payload:"loginSignup"});
            console.log(statee);
    },[])
    return (
        <div className={style.box}>
        <SignUpForm/>
        </div>
    );
};

export default SignUp;