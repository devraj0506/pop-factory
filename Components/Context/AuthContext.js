import AsyncStorage from '@react-native-async-storage/async-storage'; 
 import axios from 'axios'; 
 import React, {createContext, useEffect, useState} from 'react'; 
  
  
 export const AuthContext = createContext(); 
  
 export const AuthProvider = ({children}) => { 
   const [userInfo, setUserInfo] = useState({}); 
const [Loading, setLoading] = useState(false) 
   const [splashLoading, setSplashLoading] = useState(false); 
  
  
   const login = (email, password) => {
     console.log("started")
     console.log(Loading)
setLoading(true)
     console.log(Loading)
  
     axios 
       .post("https://factory-fuel.herokuapp.com/admin/login", { 
         username:email, 
         password, 
       }) 
       .then(res => { 
         let userInfo =res.data; 
        
         
         console.log(userInfo); 
         if(userInfo.success==true){
           alert("you ae logged in")
         }
         setUserInfo(userInfo); 
         AsyncStorage.setItem('userInfo', JSON.stringify(userInfo)); 
setLoading(false); 
       }) 
       .catch(res => { 
         console.log(`login error ${res}`); 
         alert(res)
 setLoading(true); 
       }); 
   };
   
   const Logout=()=>{
     AsyncStorage.removeItem('userInfo')
     setUserInfo({})
     console.log("Logged out")
   }
  
  
   const isLoggedIn = async () => { 
     try { 
       setSplashLoading(true); 
  
       let userInfo = await AsyncStorage.getItem('userInfo'); 
       userInfo = JSON.parse(userInfo); 
  
       if (userInfo) { 
         setUserInfo(userInfo); 
       } 
  
       setSplashLoading(false); 
     } catch (e) { 
       setSplashLoading(false); 
       console.log(`is logged in error ${e}`); 
     } 
   }; 
  
   useEffect(() => { 
     isLoggedIn(); 
   }, []); 
  
   return ( 
 <AuthContext.Provider 
       value={{ 
         Loading, 
         userInfo,
         setUserInfo,
         splashLoading,
         Logout,
         login, 
       }}> 
 {children} 
 </AuthContext.Provider> 
 ); 
 };