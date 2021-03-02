import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import data from '../components/services/data';
import PlanContext from '../context/PlanContext'

export default function PlanProvider({ children }) {
  const [info, setInfo] = useState(data);
  const [isLoading, setLoading] = useState(true);

  const values={
    info,
    isLoading,
  }

  return (
    <PlanContext.Provider value= {values}>
      {children}
    </PlanContext.Provider>
  )
}

const styles = StyleSheet.create({})
