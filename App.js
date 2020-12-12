
import React, {useState} from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import DiceOne from './assets/dice1.png'
import DiceTwo from './assets/dice2.png'
import DiceThree from './assets/dice3.png'
import DiceFour from './assets/dice4.png'
import DiceFive from './assets/dice5.png'
import DiceSix from './assets/dice6.png'

const App = () => {
  const [uri, setUri] = useState(DiceOne)

  const chagePic = () => {
    let num = Math.floor(Math.random() * 6) 
    let pics = [DiceOne,DiceTwo,DiceThree,DiceFour,DiceFive,DiceSix]
    let pic = pics[num]

    setUri(pic)

  }

  return(
    <>
    <View style = {styles.container}>
      <Image style = {styles.image} source={uri}></Image>
      <TouchableOpacity onPress = {chagePic}>
    <Text style = {styles.pButton}>Play Game</Text></TouchableOpacity>
    </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#222831',
    alignItems:"center", // right to left
    justifyContent:"center"
  },
  image:{
    height:300,
    width:300,
    marginTop:10,
    marginBottom:50
  },


  pButton: {
    fontSize:20,
    color:"#F2A365",
    fontWeight:"bold",
    borderColor:"#30475E",
    borderWidth:3,
    borderRadius:5,
    paddingHorizontal:40,
    paddingVertical:10
  }
})
