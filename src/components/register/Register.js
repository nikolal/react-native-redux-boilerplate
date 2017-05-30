import React, { Component, PropTypes } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'
import { authApi } from '../../../config/api.js'
import { metrics } from '../../themes'

class Register extends Component {

  static defaultProps = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }

  state = {
    isLoading: false,
    username: '',
    password: ''
  }

  register = async (user, pass, url) => {

    this.setState({ isLoading: true });

    let response;
    try {
      response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: user,
          password: pass,
        }),
      })
      .then((response) => response.json())
      .then(response => console.log(response)) 
    } catch (err) {
      alert(err);
      response = null;
    }
  }

  render(){
    const { username, password } = this.state

    return(
      <View style={style.container}>
        <TextInput
          style={style.input}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(text) => this.setState({ username: text })}
          value={this.state.username}
        />
        <TextInput
          style={style.input}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password}
        />
        <Button
          title="Register"
          onPress={() => this.register(username, password, `${authApi}`)}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: metrics.navBarHeight,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
})

export default Register
