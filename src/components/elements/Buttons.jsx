import React, {useState, useEffect, useContext} from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'


export default function Buttons() {
 
  return (
    <View style={styles.OutterContainer}>
      <View >
        <TouchableOpacity style={styles.container} >
          <Text style={styles.text}>Planos</Text>
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity style={styles.containerPressed} >
          <Text style={styles.text}>Características</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    backgroundColor: '#068004',
    margin: 5,
    padding:15,
    width:150,
    borderRadius:10,
    alignItems: 'center'
  },
  containerPressed:{
    display:'flex',
    backgroundColor: '#7d7f82',
    margin: 5,
    padding:15,
    width:150,
    borderRadius:10,
    alignItems: 'center'
  },

  OutterContainer:{
    display:'flex',
    margin: 5,
    flexDirection:'row',
    justifyContent:'space-around'
  },

  text:{
    color:'#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 8,
  }
})
