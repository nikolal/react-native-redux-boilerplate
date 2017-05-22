import Home from '../home/Home.js';
import About from '../about/About.js'

import { StackNavigator } from 'react-navigation';

const Navigator = StackNavigator({
  Home: { screen: Home },
  About: { screen: About },
});

export default Navigator;
