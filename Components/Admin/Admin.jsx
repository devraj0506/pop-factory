import React,{useContext} from 'react'
import {Text,Button} from 'react-native'
import {AuthContext} from '../Context/AuthContext'; 

const Admin=({navigation})=>{
    const {Logout} = useContext(AuthContext)
    
  return(
    <>
    <Text>This is admin panel</Text>
    <Button title="logout" onPress={Logout} />
    <Button title="Diesel Pump" onPress={()=>navigation.navigate('Diesel')} />
    <Button title="Factory" onPress={()=>navigation.navigate('Factory')} />
    <Button title="Vehicle" onPress={()=>navigation.navigate('Vehicle')} />
    </>
    )
}

export default Admin