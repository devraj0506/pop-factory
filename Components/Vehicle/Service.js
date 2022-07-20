import React,{useContext} from "react"
import {
  Text,
  View,
  Button
} from "react-native"
import {AuthContext} from '../Context/AuthContext'; 

const Service = ()=> {
const {Logout} = useContext(AuthContext)
  return( 
<View > 
<Text > This is service section < /Text>
 <Button title="logout" onPress={Logout} />
</View>
)
}

export default Service