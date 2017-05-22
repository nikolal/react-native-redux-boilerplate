// import React, { PropTypes } from 'react';
// import { connect } from 'react-redux';

import Home from '../home/Home.js';
import About from '../about/About.js'

import { StackNavigator } from 'react-navigation';

const Router = StackNavigator({
  Home: { screen: Home },
  About: { screen: About },
});

export default Router;
