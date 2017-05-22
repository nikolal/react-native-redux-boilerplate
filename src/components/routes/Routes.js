// import React, { PropTypes } from 'react';
// import { Scene, Router } from 'react-native-router-flux';
// import { connect } from 'react-redux';

import Home from '../home/Home.js';
import About from '../about/About.js'

import { StackNavigator } from 'react-navigation';

const Router = StackNavigator({
  Home: { screen: Home },
  About: { screen: About },
});

// const Routes = () => (
//   <Router>
//     <Scene key="root">
//       <Scene
//         key="home"
//         title="Home"
//         component={Home}
//       />
//       <Scene
//         key="about"
//         title="About"
//         component={About}
//       />
//     </Scene>
//   </Router>
// )
//
export default Router;
