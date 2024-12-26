import {TextStyle, ViewStyle} from 'react-native';

export type Styles = {
  modalContainer: () => ViewStyle;
  modalContent: () => ViewStyle;
  modalTitle: () => TextStyle;
  optionContainer: () => ViewStyle;
  optionText: () => TextStyle;
  applyButton: () => ViewStyle;
  applyButtonText: () => TextStyle;
};
