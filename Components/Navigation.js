import React, {useContext} from 'react'; 
 import {Text, View} from 'react-native'; 
  
 import {NavigationContainer} from '@react-navigation/native'; 
 import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
 import Admin from './Admin/Admin.jsx'; 
 import Login from './Login'; 
 import {AuthContext} from './Context/AuthContext'; 
 import Diesel from './Diesel/Diesel'
 import Factory from './Factory/Factory'
 import Vehicle from './Vehicle/Vehicle'
  import CreateOperator from './Admin/CreateOperator'
  
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
 <Stack.Navigator screenOptions={{
    headerShown: false
  }}> 
 {userInfo.type=="ADMIN" ? (
 <>
 <Stack.Screen 
 name="Admin" 
 component={Admin} 
 />
 <Stack.Screen 
 name="Diesel" 
 component={Diesel} />
 <Stack.Screen 
 name="Factory" 
 component={Factory} />
 <Stack.Screen 
 name="Vehicle" 
 component={Vehicle} />
 <Stack.Screen 
 name="CreateOperator" 
 component={CreateOperator} />
 
 </>
 ): userInfo.type=="FUEL" ? (
   <>
   <Stack.Screen 
 name="Diesel" 
 component={Diesel} />
   </>
   ): userInfo.type=="FACTORY" ? (
     <>
      <Stack.Screen 
 name="Factory" 
 component={Factory} />
     </>
     )
 :
 ( 
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