import React,{useContext} from 'react'
import {Text, Button} from 'react-native'
import {AuthContext} from '../Context/AuthContext';

const Factory=({route, navigation})=>{
  const {Logout} = useContext(AuthContext); 
    
  return(
    <>
    <Text>Rakesh</Text>
     <Button title="logout" onPress={Logout} />
    </>
    )
}

export default Factory