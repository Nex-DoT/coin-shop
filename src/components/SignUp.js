import React,{useState , useEffect} from 'react';
//Link
import { Link } from 'react-router-dom';
//style
import style from "../styles/SignUp.module.css"
// validation
import { valid } from '../functions/validtion';

//signup component
const SignUp = () => {
    // Data of input
    const [data , setData] = useState({
        userName: "" ,
        email: "" ,
        password: "" ,
        cPassword: "" ,
        checkbox:false
    })

    //set data in data State
    const cheangeHandeler = event=>{
        setData({...data , [event.target.name] : event.target.value})
    }

    //errors data string
    const [error , setError] = useState({});

    //set errors in datastate with useEffect
    useEffect(()=>{
        setError(valid(data , "signUp"))
    },[data])

    // submit form function 
    const submitHandeler =event =>{
        event.pereventDefault()
}
    //jsx
    return (
        <>
        <form onSubmit={submitHandeler}>
        <h1>Sign-Up</h1>
            <div>
                <div className={style.user}>
                    <h5>Username</h5>
                    <input type="text" name="userName" value={data.userName} onChange={cheangeHandeler}/>
                    <h6>{error.userName}</h6>
                </div>
                <div className={style.email}>
                    <h5>Email</h5>
                    <input type="email" name="email" value={data.email} onChange={cheangeHandeler}/>
                    <h6>{error.email}</h6>
                </div>
                <div className={style.pass}>
                    <h5>Password</h5>
                    <input type="password" name="password" value={data.password} onChange={cheangeHandeler}/>
                    <h6>{error.password}</h6>
                </div>
                <div className={style.pass}>
                    <h5>Confirm Password</h5>
                    <input type="password" name="cPassword"  value={data.cPassword} onChange={cheangeHandeler}/>
                    <h6>{error.cPassword}</h6>
                </div>
            </div>
            <div className={style.check}>
                <a href="#">I agree to the terms and conditions.</a>
                <input type="checkbox" />
            </div>
            <div className={style.btn}> 
               <Link className={style.Link} to={"/login"}>Login</Link>
               <button>SignUp</button>
            </div>
        </form>
        </>
    );
};

export default SignUp;