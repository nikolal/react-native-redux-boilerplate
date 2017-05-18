import { Platform } from 'react-native';

const metrics = {
  smallPadding: 10,
  mediumPadding: 20,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
};

export default metrics;
