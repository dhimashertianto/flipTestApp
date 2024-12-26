import {ViewStyle, TextStyle} from 'react-native';

export type Styles = {
  subHeader: () => ViewStyle;
  titleHeader: () => TextStyle;
  titleButton: () => TextStyle;
};
