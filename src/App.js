
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import Navigator from './components/navigator/Navigator'
import store from './store'
import { authApi } from '../config/api.js'

class App extends Component {

  state = {
    isLoading: false,
    authToken: '',
  }

  componentDidMount = () => {
    this.getToken(`${authApi}`)
  }

  getToken = async () => {
    let token;
    try {
      token = await AsyncStorage.getItem('token')
      console.log(`Auth token: ${token}`)
    } catch (err) {
      console.log('No token')
      token = ''
    }
    this.setState({
      isLoading: false,
      authToken: token,
    })
  }

  updateToken = (token) => {
    AsyncStorage.setItem('token', token);
    if (token === '' || token === null) {
      AsyncStorage.clear();
    } else {
      this.setState({
        authToken: token,
      })
    }
  }



  render(){
    return(
      <Provider store={store}>
        <Navigator
          updateToken={this.updateToken}
          authToken={this.state.authToken}
          isLoggedIn={this.state.token !== null && this.state.token !== ''}
        />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('reactNativeReduxBoilerplate', () => App)
