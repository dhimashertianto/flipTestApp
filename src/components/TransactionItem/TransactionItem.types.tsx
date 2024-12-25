import {TextStyle, ViewStyle} from 'react-native';

export type Styles = {
  itemContainer: () => ViewStyle;
  colorContainer: (color?: Object) => ViewStyle;
  detailsContainer: () => ViewStyle;
  statusContainer: (status?: Object) => ViewStyle;
  itemText: () => TextStyle;
  itemTextButton: (status?: Object) => TextStyle;
  itemTitle: () => TextStyle;
};
