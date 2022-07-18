import React from 'react'
import {View,Text, Button} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'; 
 import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
 import AddTyre from "./AddTyre.js"
 import RemoveTyre from "./RemoveTyre.js"
 import TransferTyre from "./TransferTyre.js"
 import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

 
 
 const Stack = createNativeStackNavigator();

const Tyre=()=>{
  
  return(
    
    <Stack.Navigator screenOptions={{
    headerShown: false
}}>
    <Stack.Screen 
 name="Tyre Home" 
 component={TyreHome} 
 />
 
 <Stack.Screen 
 name="AddTyre" 
 component={AddTyre} 
 />
 
 <Stack.Screen 
 name="RemoveTyre" 
 component={RemoveTyre} 
 />
 
 <Stack.Screen 
 name="TransferTyre" 
 component={TransferTyre} 
 />
    </Stack.Navigator>
    
    )  

}

const TyreHome=({navigation})=>{
  
  return(
    <SafeAreaView>
    <Text>Tyre Home </Text>
    <Button title="Add Tyre" onPress={()=>{navigation.navigate("AddTyre")}} />
    <Button title="Remove Tyre" onPress={()=>{navigation.navigate("RemoveTyre")}} />
    <Button title="Transfer Tyre" onPress={()=>{navigation.navigate("TransferTyre")}} />
    </SafeAreaView>
    )
}

export default Tyre

