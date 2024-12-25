import React from 'react';
import {
  Button,
  Modal,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './Modal.style';

type SortModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  handleSortByDate: (order: 'asc' | 'desc') => void;
  handleSortByBeneficiaryName: (order: 'asc' | 'desc') => void;
};

/**
 * A modal component that shows a list of sorting options.
 *
 * The modal is transparent and fade-in animated. It is closed when the user
 * presses outside of the modal or presses the back button.
 *
 * The modal contains four buttons for sorting by beneficiary name in ascending
 * or descending order, and by date in ascending or descending order.
 *
 * @param modalVisible A boolean indicating whether the modal is visible.
 * @param setModalVisible A function to set the visibility of the modal.
 * @param handleSortByDate A function to sort the transactions by date.
 * @param handleSortByBeneficiaryName A function to sort the transactions by
 * beneficiary name.
 */
const SortModal: React.FC<SortModalProps> = ({
  modalVisible,
  setModalVisible,
  handleSortByDate,
  handleSortByBeneficiaryName,
}) => {
  const modalContent = (
    <View style={styles.modalContent()}>
      <Text style={styles.modalTitle()}>Sort by</Text>
      <Button
        title="Name A-Z"
        onPress={() => handleSortByBeneficiaryName('asc')}
      />
      <Button
        title="Name Z-A"
        onPress={() => handleSortByBeneficiaryName('desc')}
      />
      <Button
        title="Tanggal Terbaru"
        onPress={() => handleSortByDate('desc')}
      />
      <Button title="Tanggal Terlama" onPress={() => handleSortByDate('asc')} />
    </View>
  );

  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setModalVisible(false)}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.modalContainer()}>{modalContent}</View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SortModal;
