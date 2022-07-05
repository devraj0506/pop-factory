import AsyncStorage from '@react-native-async-storage/async-storage'; 
 import axios from 'axios'; 
 import React, {createContext, useEffect, useState} from 'react'; 
  
  
 export const AuthContext = createContext(); 
  
 export const AuthProvider = ({children}) => { 
   const [userInfo, setUserInfo] = useState({}); 
   const [isLoading, setIsLoading] = useState(false); 
   const [splashLoading, setSplashLoading] = useState(false); 
  
  
   const login = (email, password) => { 
     setIsLoading(true); 
  
     axios 
       .post("https://factory-fuel.herokuapp.com/admin/login", { 
         username:email, 
         password, 
       }) 
       .then(res => { 
         let userInfo = res.data; 
         console.log(userInfo); 
         if(userInfo.success==true){
           alert("login success")
         }
         setUserInfo(userInfo); 
         AsyncStorage.setItem('userInfo', JSON.stringify(userInfo)); 
setIsLoading(false); 
       }) 
       .catch(res => { 
         console.log(`login error ${res}`); 
         alert(res)
 setIsLoading(false); 
       }); 
   }; 
  
  
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
         isLoading, 
         userInfo,
         setUserInfo,
         splashLoading, 
         login, 
       }}> 
 {children} 
 </AuthContext.Provider> 
 ); 
 };