import React from 'react';
import { BsSearch } from "react-icons/bs";

const Serach = () => {
    const [searchData , setSearchData] = useState();
        const [input , newInput] = useState("");
    
        const keyUpHandeler = event => {
            newInput(event.target.value);
            const newData = data.filter(item=> item.name.toLowerCase().includes(input.toLowerCase()));
            if(event.key === "Enter"){
                setSearchData(newData);
                if(input===""){
                    setSearchData(null);
                }
            }
        }
    return (
        <div>
        <div className={style.inputdiv}>
                        <BsSearch className={style.icon}/>
                    <input className={style.input} placeholder='Search' type="text" onKeyDown={keyUpHandeler} />
                    </div>
            
        </div>
    );
};

export default Serach;