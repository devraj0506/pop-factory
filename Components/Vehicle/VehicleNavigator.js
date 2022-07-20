import React from 'react'
import {
  Text
} from 'react-native'
import {
  createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs';
import ExternalFuel from "./ExternalFuel"
import Service from "./Service"
import {
  NavigationContainer
} from '@react-navigation/native';
import TyreHome from "./Tyre/Tyre.js"
import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context';
import MyTabBar from './CustomTab.js'



const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
 <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
<> 
<Tab.Screen name="Service" component={Service}/>
<Tab.Screen name="Tyre" component={TyreHome}/>
<Tab.Screen name="Case" component={TyreHome}/>
<Tab.Screen name="External Fuel" component={ExternalFuel}/>
</>
</Tab.Navigator>
)
}

const VehicleNavigator = ()=> {
  return(
< MyTabs />
)
}

export default VehicleNavigator