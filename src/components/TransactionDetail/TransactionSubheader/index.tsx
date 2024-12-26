import React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';

/**
 * A header component for displaying sub-header details (like the transaction title and a close button).
 *
 * @param {{title: string, onClose: () => void}} props
 *   The title of the sub-header and a function to handle closing the screen.
 * @returns A React component for the transaction sub-header.
 */
const TransactionSubHeader = ({title, onClose}: any) => {
  return (
    <View style={styles.subHeader}>
      <Text style={styles.titleHeader}>{title}</Text>
      <Pressable onPress={onClose}>
        <Text style={styles.titleButton}>Tutup</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    padding: 16,
    borderBottomColor: 'lightblue',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleButton: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TransactionSubHeader;
