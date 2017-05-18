import React, {  PropTypes } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { metrics, colors } from '../../themes'

const BlueButton = ({ text, onPress }) => (
  <TouchableOpacity style={style.container} onPress={onPress}>
    <Text style={style.text}>
      {text}
    </Text>
  </TouchableOpacity>
)

BlueButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    padding: metrics.smallPadding,
  },
  text: {
    color: colors.white,
  }
})

export default BlueButton
