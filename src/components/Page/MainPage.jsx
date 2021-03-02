import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Buttons from '../elements/Buttons'
import Header from '../elements/Header'
import Plan from '../elements/Plan'

export default function MainPage() {
  return (
    <View>
      <Header />
      <Buttons />
      <Plan />
    </View>
  )
}

const styles = StyleSheet.create({})
