import React, { PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Actions as navigationActions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateHomeTextAction } from './homeActions.js'
import { metrics, colors } from '../../themes'
import BlueButton from '../common/BlueButton.js'


const Home = ({ homeText, updateHomeTextAction }) => {

  const goToAbout = () => navigationActions.about()

  const updateText = text => updateHomeTextAction(text)

  return(
    <View style={style.container}>
      <Text>Hello World</Text>
      <BlueButton
        onPress={goToAbout}
        text="Go to About"
      />
      <Text>{homeText}</Text>
      <BlueButton
        onPress={() => updateText('Updated text')}
        text="Update redux state"
      />
    </View>
  )
}

Home.propTypes = {
  homeText: PropTypes.string.isRequired,
  updateHomeTextAction: PropTypes.func.isRequired,
}

const stateToProps = (state) => ({
  homeText: state.homeReducer.homeText,
})

const dispatchToProps = (dispatch) => ({
  updateHomeTextAction: bindActionCreators(updateHomeTextAction, dispatch),
})

export default connect(
  stateToProps,
  dispatchToProps
)(Home)

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: metrics.navBarHeight,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
})
