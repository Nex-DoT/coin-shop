export const valid = (data , loSi) => {
//errors string
    const errors = {}
// regex value
    let userNameRegex = /^[a-zA-Z\-]+$/;
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

// signUp validetion

if(loSi=== "signUp"){
        //Username
        if(!data.userName){
            errors.userName= "UserName fild is empthy"
        }else if(! userNameRegex.test(data.userName)){
            errors.userName= "Username is not vaild"
        }else{
            delete errors.userName
        }
        //confirm Password
        if(!data.cPassword){
            errors.cPassword="Confirm Password Fild is empthy"
        }else if(data.cPassword !== data.password){
            errors.cPassword = "password confirmation does not match."
        }else{
            delete errors.cPassword
        }
    }
// Login & signup validation

    //email
    if(!data.email){
        errors.email= "Email Fild is empthy"
    }else if(! emailRegex.test(data.email)){
        errors.email= "Email is not valid"
    }else{
        delete errors.email;
    }
    //password
    if(!data.password){
        errors.password = "Password fild is empthy"
    }else if(! passwordRegex.test(data.password)){
        errors.password= "Password is requred atlest 1number and 1special carecter"
    }else{
        delete errors.password;
    }


    return errors
}