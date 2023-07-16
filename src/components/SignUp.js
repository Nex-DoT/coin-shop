import React , {useEffect,useContext} from 'react';
//component 
import SignUpForm from './SignUpForm';
//context
import { backContext } from '../function/Reducer';
//signup component
const SignUp = () => {
    const [statee , dispatchh] = useContext(backContext);
    useEffect(()=>{
            dispatchh({type:"new" , payload:"loginSignup"});
            console.log(statee);
    },[])
    return (
        <>
        <SignUpForm/>
        </>
    );
};

export default SignUp;