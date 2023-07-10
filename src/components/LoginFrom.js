import React,{useState , useEffect} from 'react';
//Link
import { Link } from 'react-router-dom';
//style
import style from "../styles/LoginForm.module.css"
// validation
import { valid } from '../functions/validtion';

const LoginFrom = () => {

    // Data of input
    const [data , setData] = useState({
        email: "" ,
        password: "" ,
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
        setError(valid(data))
    },[data , focus ])

    // submit form function 
    const submitHandeler =event =>{
        event.preventDefault()
        if(!Object.keys(error).length){

        }else{
            setFocus({
                email: true ,
                password: true ,
            })
        }
}

    //focus handeler
    const focusHandeler = event =>{
        setFocus({...focus , [event.target.name] : true })
    }
    return (
        <div className={style.inBox}>
         <form className={style.form} onSubmit={submitHandeler}>
        <h1>Login</h1>
            <div>
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
            </div>
            <div className={style.btn}> 
               <Link className={style.Link} to={"/signUp"}>SignUp</Link>
               <button>Login</button>
            </div>
        </form>
        </div>
    );
};

export default LoginFrom;