import {TextStyle, ViewStyle} from 'react-native';

export type Styles = {
  modalContainer: () => ViewStyle;
  modalContent: () => ViewStyle;
  modalTitle: () => TextStyle;
};
