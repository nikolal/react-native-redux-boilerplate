
import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

import Routes from './components/routes/Routes'
import store from './store'

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

AppRegistry.registerComponent('reactNativeReduxBoilerplate', () => App)
