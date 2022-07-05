import React, {useContext} from 'react'; 
 import {Text, View} from 'react-native'; 
  
 import {NavigationContainer} from '@react-navigation/native'; 
 import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
 import Admin from './Admin/Admin.jsx'; 
 import Login from './Login'; 
 import {AuthContext} from './Context/AuthContext'; 
 
  
 const Stack = createNativeStackNavigator(); 
  
 const Navigation = () => { 
   const {userInfo,setUserInfo,splashLoading} = useContext(AuthContext); 
  const shownav=()=>{
    if(userInfo.success==true){
    console.log("in navigation")
    }
    else if(userInfo.success==false){
      console.log("success false")
    }
    else{
      console.log("blank")
    }
  }
  
  shownav();
   return ( 
 <NavigationContainer> 
 <Stack.Navigator> 
 {userInfo.success==true ? (
 <>
 <Stack.Screen 
 name="Admin" 
 component={Admin} />
 </>
 ):( 
<>
<Stack.Screen 
name="Login" 
component={Login} 
/>
</>
)}
</Stack.Navigator> 
</NavigationContainer>

); 
 }; 
  
 export default Navigation;