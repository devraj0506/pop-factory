import React,{useContext} from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Button, Pressable, ScrollView } from "react-native"
import {AuthContext} from '../Context/AuthContext'; 


export default function WelcomePageAdmin({navigation}) {
  const {Logout} = useContext(AuthContext)
  return (
    <ScrollView>
    <View style={styles.WelcomePageAdmin}>
    <Button title="logout" onPress={Logout} />
      <View style={styles.Group422}>
        <Image
          style={
            styles.IllustrationLeisureSocialMeia_RelaxWorkLaptopComputerClockDeadline
          }
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/prr4b19zt3-148%3A1299?alt=media&token=21700905-bdc7-4d16-8545-6ee7065cdc97",
          }}
        />
        <View style={styles.Frame6}>
          <Text style={styles.Txt827}>WELCOME TO APP</Text>
        </View>
        <View style={styles.Frame5}>
          <Pressable onPress={()=>navigation.navigate('Diesel')} style={styles.Frame4}>
            <Text style={styles.Txt605}>Diesel Pump</Text>
          </Pressable>
          <Pressable onPress={()=>navigation.navigate('Factory', {id:"abcg123"})} style={styles.Frame4}>
            <Text style={styles.Txt605}>Factory</Text>
          </Pressable>
          <Pressable onPress={()=>navigation.navigate('Vehicle')} style={styles.Frame2}>
            <Text style={styles.Txt605}>Vehicle</Text>
          </Pressable>
          <Pressable onPress={()=>navigation.navigate('CreateOperator')} style={styles.Frame2}>
            <Text style={styles.Txt605}>Create Operator</Text>
          </Pressable>
        </View>
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  WelcomePageAdmin: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 74,
    paddingBottom: 47,
    paddingLeft: 19,
    paddingRight: 19,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 360,
    height: 640,
  },
  
  Group422: {
    display: "flex",
    flexDirection: "column",
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
    marginBottom: 44,
  },
  Txt827: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 32,
    letterSpacing: -0.48,
    color: "rgba(13,13,13,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 126,
  },

  Frame5: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  Frame4: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 65,
    paddingRight: 65,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: "rgba(63,189,241,1)",
    width: 320,
    height: 60,
  },
  Txt605: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 24,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    textTransform: "uppercase",
  },
  
  Frame4: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 65,
    paddingRight: 65,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: "rgba(63,189,241,1)",
    width: 320,
    height: 60,
  },
  Txt605: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 24,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    textTransform: "uppercase",
  },

  Frame2: {
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
  Txt605: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 24,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    textTransform: "uppercase",
  },
})