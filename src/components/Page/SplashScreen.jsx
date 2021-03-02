import React from 'react'
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native'

export default function  SplashScreen({ navigation }){
  setTimeout(() => {
    navigation.navigate('MainPage')
  }, 2000);

  return(
    <View style={styles.container} >
    <TouchableOpacity
    onPress={() => navigation.navigate('MainPage')}
    style={styles.container}
    >
      <Image style={styles.image} source={require('../../assets/splash.png')}/>
    </TouchableOpacity>
    </View>
  )

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifycontent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor:'#068005'
  },
  image:{
    justifyContente: 'center',
    alignItems:'center',
    height:80,
    width: 200,
    marginTop: 200,
  }
})
