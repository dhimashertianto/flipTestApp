import React, {useState} from 'react';
import {Button, Modal, Pressable, Text, View} from 'react-native';
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
 * @param modalVisible A boolean indicating whether the modal is visible.
 * @param setModalVisible A function to set the visibility of the modal.
 * @param handleSortByDate A function to sort the transactions by date.
 * @param handleSortByBeneficiaryName A function to sort the transactions by beneficiary name.
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
      <View>
        <Button
          title="Name A-Z"
          onPress={() => handleSortByBeneficiaryName('asc')}
        />
      </View>
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
      <Pressable
        style={styles.modalContainer()}
        onPress={() => setModalVisible(false)}>
        <View style={{}}>{modalContent}</View>
      </Pressable>
    </Modal>
  );
};

export default SortModal;
