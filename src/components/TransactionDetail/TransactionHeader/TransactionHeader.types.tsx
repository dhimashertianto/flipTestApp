import {ViewStyle, TextStyle} from 'react-native';

export type Styles = {
  header: () => ViewStyle;
  titleHeader: () => TextStyle;
  titleButton: () => TextStyle;
};
