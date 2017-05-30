import Home from '../home/Home.js';
import About from '../about/About.js'
import Register from '../register/Register.js'


import { StackNavigator } from 'react-navigation';

const Navigator = StackNavigator({
  Register: { screen: Register },
  Home: { screen: Home },
  About: { screen: About },
});

export default Navigator;
