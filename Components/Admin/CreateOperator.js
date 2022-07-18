import React,{useState,useContext} from 'react'
import {Text, View, TouchableHighlight, Modal,TextInput, ScrollView} from 'react-native'
import {AuthContext} from '../Context/AuthContext';
import Spinner from "react-native-loading-spinner-overlay" 

const CreateOperator =()=>{
  const {register,Loading,latestValue}=useContext(AuthContext)
  const [email, setEmail] = useState()
  const [username, setUsername] = useState()
  const [password,setPassword] = useState()
  const [type,setType] = useState()
  const [name,setName] = useState()
  return(
    <>
    <ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={latestValue.current}
        >
        
 <Spinner visible={true} />
 </Modal>
<Text> This is a page this is a page this is a page</Text> 
 <TextInput 
value={email} 

placeholder="Email" 
onChangeText={text => setEmail(text)} 
/>
<TextInput 
value={name} 

placeholder="Name" 
onChangeText={text => setName(text)} 
/> 
<TextInput 
value={username} 

placeholder="Username" 
onChangeText={text => setUsername(text)} 
/> 
<TextInput 
value={password} 

placeholder="Password" 
onChangeText={text => setPassword(text)} 
/> 
<TextInput 
value={type} 

placeholder="Type" 
onChangeText={text => setType(text)} 
/> 
 <TouchableHighlight 
          
        
           onPress={()=>{
             register(name, email, password,username,type)
           }
        } 
 >
 <Text >Login</Text>
 </TouchableHighlight>
 
    </ScrollView>
    </>
    )
}


export default CreateOperator