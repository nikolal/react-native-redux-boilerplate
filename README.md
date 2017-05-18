PREREQUISITES:

NodeJS, npm, Android and IOS environment


SETUP:

1)  git clone https://github.com/nikolal/react-native-redux-boilerplate.git

2) cd react-native-redux-boilerplate

3) yarn      or      npm install

3)  react-native run-ios       or      react-native run-android


REACT STRUCTURE:

- src/components    -> components
- src/components/common     -> reusable components
- src/components/themes   -> global app themes ( metrics, colors, fonts, appStyles, imageUrls etc...)

COMPONENT CREATION
- Use fat arrow syntax whenever possible
- Use class syntax if you need local state or lifecycle methods
- Each component should be self contained as much as possible ( not dependable on other components ),
- if you need local state use react state
- if you need global state, use redux state


REDUX STRUCTURE

- src/actions/actionTypes   ->  constants
- src/reducer  ->   root reducer
- src/store ->  redux store

Actions and child reducers are handled inside component folder
example:

- src/components/Home
  -> 'stateToProps' is handling state
  -> 'dispatchToProps' is dispatching actions
  -> 'connect' is higher order function for passing state and props to component

- src/components/home/homeActions.js ->  Actions

- src/compnents/home/homeReducer.js
  ->  Define initial state in defaultState object
  ->  Handle state updates in switch function


STARTING POINT:

- src/index.common.js  ->  merging index.android.js and index.ios.js
