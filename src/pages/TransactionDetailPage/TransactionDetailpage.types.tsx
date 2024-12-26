import {TextStyle, ViewStyle} from 'react-native';

export type Styles = {
  container: () => ViewStyle;
  text: () => TextStyle;
};
