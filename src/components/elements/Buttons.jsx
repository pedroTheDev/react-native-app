import React, {useState, useEffect, useContext} from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import PlanContext from '../../context/PlanContext'


export default function Buttons() {
  const { info, isLoading } = useContext(PlanContext);
 
  
  return (
    <View style={styles.OutterContainer}>
      <View style={styles.container}>
        <TouchableOpacity >
          <Text style={styles.text}>Planos</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity >
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
    margin: 10,
    padding:20,
    width:150,
    borderRadius:10,
    alignItems: 'center'
  },

  OutterContainer:{
    display:'flex',
    margin: 10,
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
