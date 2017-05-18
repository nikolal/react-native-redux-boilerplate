import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { metrics } from '../../themes'

const About = () => {
  return(
    <View style={style.container}>
      <Text>
        Hello Again
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: metrics.navBarHeight,
  }
})

export default About
