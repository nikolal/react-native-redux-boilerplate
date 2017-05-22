
import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import Navigator from './components/navigator/Navigator'
import store from './store'

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
)

AppRegistry.registerComponent('reactNativeReduxBoilerplate', () => App)
