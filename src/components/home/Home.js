import React, { PropTypes, Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateHomeTextAction } from './homeActions.js'
import { metrics, colors } from '../../themes'
import BlueButton from '../common/BlueButton.js'


class Home extends Component {

  static navigationOptions = {
    title: 'Home',
  }

  updateText = text => updateHomeTextAction(text)

  render(){
    const { navigation, homeText, updateHomeTextAction } = this.props

    return(
      <View style={style.container}>
        <Text>Hello World</Text>
        <BlueButton
          onPress={() => navigation.navigate('About')}
          text="Go to About"
        />
        <Text>{homeText}</Text>
        <BlueButton
          onPress={() => this.updateText('Updated text')}
          text="Update redux state"
        />
      </View>
    )
  }
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
