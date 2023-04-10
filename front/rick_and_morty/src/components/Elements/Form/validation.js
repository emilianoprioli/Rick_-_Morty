const usuario = "falopa@gmail.com";
const contraseña = "palofa"

const validation = (userData,error,setError) =>{
    if(!userData.username){
        setError({...error,username:"Por favor completa este campo"})
    }
    else if(userData.username.length > 35){
        setError({...error,username:"No puede superar los 35 caracteres"})
    }
    else if(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{3})+$/.test(userData.username)){
        setError((error) => ({...error,username:"Email no válido"}))
    }else{
        setError({...error,username:""})
    }
    
    if(!userData.password){
        setError((error)=> ({...error,password:"Por favor completa este campo"}));
    }
    else if(userData.password){
        setError({...error,password:""})
    }
    
    console.log(userData,error,setError);
    if(userData.username === usuario && userData.password === contraseña){
        return true;
    }
}

export default validation