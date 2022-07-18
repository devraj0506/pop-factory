import React from 'react'
import {Text} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ExternalFuel from "./ExternalFuel"
import Service from "./Service"
import {NavigationContainer} from '@react-navigation/native';
import TyreHome from "./Tyre/Tyre.js"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';




const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    
   
    <Tab.Navigator>
      <Tab.Screen name="Service" component={Service} />
      <Tab.Screen  name="External Fuel" component={ExternalFuel} />
      <Tab.Screen name="Tyre" component={TyreHome} />
    </Tab.Navigator>
      
    
  );
}





const VehicleNavigator=()=>{
  return(
  
    <SafeAreaView style={{ flex: 1,}}>
    <NavigationContainer>
    <MyTabs />
    </NavigationContainer>
    </SafeAreaView>
    
   
    )
}

export default VehicleNavigator