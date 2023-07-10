import React,{useState , useEffect} from 'react';
//Link
import { Link } from 'react-router-dom';
//style
import style from "../styles/SignUpForm.module.css"
// validation
import { valid } from '../functions/validtion';

const SignUpForm = () => {

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

    //focus state
    const [focus , setFocus] = useState({})

    //errors data string
    const [error , setError] = useState({});

    //set errors in datastate with useEffect
    useEffect(()=>{
        setError(valid(data , "signUp"))
    },[data , focus ])

    // submit form function 
    const submitHandeler =event =>{
        event.preventDefault()
        if(!Object.keys(error).length){

        }else{
            setFocus({
                userName: true ,
                email: true ,
                password: true ,
                cPassword: true ,
            })
        }
}

    //focus handeler
    const focusHandeler = event =>{
        setFocus({...focus , [event.target.name] : true })
    }
    //jsx
    return (
        <div className={style.inBox}>
        <form onSubmit={submitHandeler}>
        <h1>Sign-Up</h1>
            <div>
                <div className={style.user}>
                    <h5>Username</h5>
                    <input type="text" name="userName" onFocus={focusHandeler} value={data.userName} onChange={cheangeHandeler}/>
                    {error.userName && focus.userName && <h6 className={style.warning}>{error.userName}</h6>}     
                </div>
                <div className={style.email}>
                    <h5>Email</h5>
                    <input type="email" name="email" onFocus={focusHandeler} value={data.email} onChange={cheangeHandeler}/>
                    {error.email && focus.email && <h6 className={style.warning}>{error.email}</h6>}     
                </div>
                <div className={style.pass}>
                    <h5>Password</h5>
                    <input type="password" name="password" onFocus={focusHandeler} value={data.password} onChange={cheangeHandeler}/>
                    {error.password && focus.password && <h6 className={style.warning}>{error.password}</h6>}     
                </div>
                <div className={style.pass}>
                    <h5>Confirm Password</h5>
                    <input type="password" name="cPassword" onFocus={focusHandeler}  value={data.cPassword} onChange={cheangeHandeler}/>
                    {error.cPassword && focus.cPassword && <h6 className={style.warning}>{error.cPassword}</h6>}
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
        </div>
    );
};

export default SignUpForm;