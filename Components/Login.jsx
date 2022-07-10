
// import React, {useContext, useState} from 'react'; 
// import { 
//   Button, 
//   Text, 
//   TextInput, 
//   TouchableOpacity, 
//   View, 
//   StyleSheet, 
// } from 'react-native'; 
// import Spinner from 'react-native-loading-spinner-overlay'; 
// import {AuthContext} from './Context/AuthContext';


// const Login = ({navigation}) => { 
//   const [email, setEmail] = useState(null); 
//   const [password, setPassword] = useState(null); 
//   const {Loading, login} = useContext(AuthContext); 
  
//   return (
// <>
// <Spinner  visible={Loading}/> 
// <TextInput 
// value={email} 
// placeholder="Enter email" 
// onChangeText={text => setEmail(text)} 
// /> 
// <TextInput 
            
//           value={password} 
//           placeholder="Enter password" 
//           onChangeText={text => setPassword(text)} 
//           secureTextEntry 
// /> 
// <Button 
//           title="Login" 
//           onPress={() => { 
//             login(email, password)
//           }} 
// /> 
// </>
// ); 
// };
 

            // <Text style={styles.Txt035}>Password</Text>
 

// export default Login
            // <Text style={styles.Txt035}>User Name</Text>

          // <Text style={styles.Txt417}>Submit</Text>

import React,{useState,useContext} from "react"
import { StyleSheet, TextInput, Image, Text, View, ImageBackground, Button, Pressable } from "react-native"
 import Spinner from 'react-native-loading-spinner-overlay'; 
import {AuthContext} from './Context/AuthContext';


export default function Login() {
  
  const [email, setEmail] = useState(null); 
   const [password, setPassword] = useState(null); 
   const {Loading,login} = useContext(AuthContext); 
  
  
  return (
   
    <View style={styles.LoginInScreen}>
    <Spinner  visible={Loading}/> 
      <View style={styles.Frame36}>
        <Image
          style={
            styles.IllustrationLeisureSocialMeia_RelaxWorkLaptopComputerClockDeadline
          }
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/fkl9gi4877-177%3A27?alt=media&token=f129dc8d-7802-4bc3-ab56-c5d36928c02b",
          }}
        />
        <View style={styles.Frame6}>
          <Text style={styles.Txt868}>WELCOME TO APP</Text>
        </View>
         
        <View style={styles.Frame35}>
          <View style={styles.InputField}>
            <TextInput 
value={email} 
style={styles.InputField}
placeholder="Username" 
onChangeText={text => setEmail(text)} 
/> 
          <View style={styles.InputField1}>
<TextInput 
            style={styles.InputField1}
          value={password} 
          placeholder="Enter password" 
          onChangeText={text => setPassword(text)} 
          secureTextEntry 
/>
          </View>
          </View>
        </View>
        <View style={styles.Frame3}>
          <Pressable 
          
          style={styles.Frame3}
           onPress={() => { 
             login(email, password)
           }} 
 >
 <Text style={styles.Txt417}>Login</Text>
 </Pressable>
        </View>
        
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  LoginInScreen: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 47,
    paddingLeft: 19,
    paddingRight: 19,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 360,
    height: 640,
  },
  container: {
    flex: 1
  },
  Frame36: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  IllustrationLeisureSocialMeia_RelaxWorkLaptopComputerClockDeadline: {
    width: 200,
    height: 199.43,
    marginBottom: 10,
  },
  Frame6: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 36,
  },
  Txt868: {
    fontSize: 24,
    fontFamily: "Archivo, sans-serif",
    fontWeight: "700",
    lineHeight: 32,
    letterSpacing: -0.48,
    color: "rgba(13,13,13,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 126,
  },

  Frame35: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 36,
  },
  InputField: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 24,
    width: 320,
  },
  Txt035: {
    fontSize: 12,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    lineHeight: 16,
    letterSpacing: -0.24,
    color: "rgba(13,13,13,1)",
    width: 114,
    height: 27,
  },

  InputField1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 320,
  },
  Txt035: {
    fontSize: 12,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    lineHeight: 16,
    letterSpacing: -0.24,
    color: "rgba(13,13,13,1)",
    width: 114,
    height: 27,
  },

  Frame3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 65,
    paddingRight: 65,
    borderRadius: 15,
    backgroundColor: "rgba(63,189,241,1)",
    width: 320,
    height: 60,
  },
  Txt417: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    lineHeight: 24,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    textTransform: "uppercase",
  },
})


