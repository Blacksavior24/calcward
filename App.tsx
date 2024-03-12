import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { styles } from './src/theme/app-theme'
import { CalculatorScreen } from './src/screens/CalculatorScreen'

export const App = () => {
  return (
    <View style={styles.background}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
      <CalculatorScreen />
    </View>
  )
}
