import React,{useState, useEffect} from 'react'
import {Button, TextInput, StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import {useNavigation} from '@react-navigation/native'

const Login=()=>{
  
  
  
  const [username,setUsername] = useState();
  const [pass,setpass] = useState();
  const navigation = useNavigation();
  
  const UserHandler=(usern)=>{
    setUsername(usern)
  }
  
  const passHandler=(passwor)=>{
    setpass(passwor)
  }
  
  const HandleSubmit = async (e) => { 
     e.preventDefault(); 
  
     await axios 
       .post("https://factory-fuel.herokuapp.com:443/admin/login",{username:username,password:pass}, { 
         headers: {"Content-Type":"application/json" }, 
       }) 
       .then((response) => { 
         if (response.status==200) {
           console.log("data saved")
           navigation.navigate('Admin')
         }
      console.log(response); 
         alert("data saved"); 
       
         
       }) 
       .catch((error) => { 
       console.log(error.message);
       if(error.status==404){
       alert("invalid usernme or password")
       }
   }); 
 };
    
  return(
    
    
    <>
    <Text>Login page</Text>
    <View>
      <TextInput value={username} onChangeText={UserHandler} placeholder='Username'/>
      <TextInput value={pass} onChangeText={passHandler} placeholder='Password'/>
      
      <Button title='submit' onPress={HandleSubmit}/>
    </View>
    </>
    )
}

export default Login