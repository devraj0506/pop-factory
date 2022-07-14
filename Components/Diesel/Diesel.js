import React,{useContext} from 'react'
import {Text, Button} from 'react-native'
import {AuthContext} from '../Context/AuthContext';

const Diesel=()=>{
  const {Logout} = useContext(AuthContext); 
  return(
    <>
    <Text>This is Diesel Pump section</Text>
     <Button title="logout" onPress={Logout} />
    </>
    )
}

export default Diesel