import React, { useContext } from 'react';

import { StyleSheet, Text, View } from 'react-native'

import PlanContext from '../../context/PlanContext';

const Header = () => {
  const {info} = useContext(PlanContext);
  const arr = [info];

  const mappedInfo = arr.map((element) => element.Aparelho).map((item) => item.name.toUpperCase())

 
  return (
    <View>
      <Text style={styles.header}>{mappedInfo}</Text>
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header:{
    backgroundColor:'#068004',
    padding:15,
    display:'flex',
    justifyContent:'flex-end',
    color:'#fff',
    fontWeight:'bolder',
    fontSize:20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 8,
  }

});
