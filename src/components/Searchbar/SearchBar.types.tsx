import {TextStyle, ViewStyle} from 'react-native';

export type Styles = {
  searchContainer: () => ViewStyle;
  searchInput: () => ViewStyle;
  clearButton: () => ViewStyle;
  clearButtonText: () => TextStyle;
};
