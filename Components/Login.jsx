
import React, {useContext, useState} from 'react'; 
 import { 
   Button, 
   Text, 
   TextInput, 
   TouchableOpacity, 
   View, 
   StyleSheet, 
 } from 'react-native'; 
 import Spinner from 'react-native-loading-spinner-overlay'; 
 import {AuthContext} from './Context/AuthContext';


const Login = ({navigation}) => { 
   const [email, setEmail] = useState(null); 
   const [password, setPassword] = useState(null); 
   const {Loading, login} = useContext(AuthContext); 
  
   return (
 <>
 <Spinner  visible={Loading}/> 
 <TextInput 
 value={email} 
 placeholder="Enter email" 
 onChangeText={text => setEmail(text)} 
 /> 
 <TextInput 
            
           value={password} 
           placeholder="Enter password" 
           onChangeText={text => setPassword(text)} 
           secureTextEntry 
 /> 
 <Button 
           title="Login" 
           onPress={() => { 
             login(email, password)
           }} 
 /> 
 </>
 ); 
 };
 

 

export default Login