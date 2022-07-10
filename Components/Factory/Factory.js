import React from 'react'
import {Text} from 'react-native'

const Factory=({route, navigation})=>{
    const {id}=route.params
  return(
    <Text>id: {id}</Text>
    )
}

export default Factory