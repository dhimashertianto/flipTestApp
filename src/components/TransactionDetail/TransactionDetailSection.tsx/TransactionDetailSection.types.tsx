import {TextStyle, ViewStyle} from 'react-native';

export type Styles = {
  content: () => ViewStyle;
  contentRow: () => ViewStyle;
  transactionInfo: () => ViewStyle;
  transactionAmount: () => ViewStyle;
  titleHeader: () => TextStyle;
  marginBottom: () => ViewStyle;
};
