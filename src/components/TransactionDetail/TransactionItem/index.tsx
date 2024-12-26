import React, {useCallback, useMemo} from 'react';
import {Pressable, Text, View} from 'react-native';
import {Transaction} from '../../../types/Transaction';
import {STATUS_MESSAGE} from '../../../utils/constants';
import {
  convertToCapitalCase,
  formatDate,
  formatToRupiah,
} from '../../../utils/helper';
import styles from './TransactionItem.style';

interface TransactionItemProps {
  transaction: Transaction;
  onPress: () => void;
  color?: string;
}

/**
 * A component that displays the transaction information.
 *
 * @param {string} sender_bank - The sender's bank name.
 * @param {string} beneficiary_bank - The beneficiary's bank name.
 * @param {string} beneficiary_name - The beneficiary's name.
 * @param {number} amount - The transaction amount.
 * @param {string} created_at - The transaction creation date in ISO 8601 format.
 *
 * @returns A React component that displays the transaction information.
 */
const TransactionInfo: React.FC<{
  sender_bank: string;
  beneficiary_bank: string;
  beneficiary_name: string;
  amount: number;
  created_at: string;
}> = ({
  sender_bank,
  beneficiary_bank,
  beneficiary_name,
  amount,
  created_at,
}) => {
  const bankInfo = useMemo(
    () =>
      `${convertToCapitalCase(sender_bank)} -> ${convertToCapitalCase(
        beneficiary_bank,
      )}`,
    [sender_bank, beneficiary_bank],
  );

  return (
    <React.Fragment>
      <View style={styles.detailsContainer()}>
        <Text style={styles.itemTitle()}>{bankInfo}</Text>
        <Text style={styles.itemText()}>{beneficiary_name.toUpperCase()}</Text>
        <TransactionDetails amount={amount} created_at={created_at} />
      </View>
    </React.Fragment>
  );
};

const TransactionDetails: React.FC<{amount: number; created_at: string}> = ({
  amount,
  created_at,
}) => {
  const amountFormatted = formatToRupiah(amount);
  const dateFormatted = formatDate(created_at);

  return (
    <Text style={styles.itemText()}>
      {amountFormatted} | {dateFormatted}
    </Text>
  );
};

const TransactionStatus: React.FC<{status: string}> = ({status}) => {
  const statusText = useMemo(() => {
    return status === STATUS_MESSAGE.PENDING ? 'Pengecekan' : 'Berhasil';
  }, [status]);

  return (
    <View style={styles.statusContainer({status})}>
      <Text style={styles.itemTextButton({status})}>{statusText}</Text>
    </View>
  );
};

const TransactionItem: React.FC<TransactionItemProps> = React.memo(
  ({transaction, onPress, color}) => {
    const {
      status,
      sender_bank,
      beneficiary_bank,
      beneficiary_name,
      amount,
      created_at,
    } = transaction;

    // Memoize style for colorContainer
    const colorStyle = useMemo(() => styles.colorContainer({color}), [color]);

    // Memoize the onPress function
    const handlePress = useCallback(() => {
      onPress();
    }, [onPress]);

    return (
      <Pressable style={styles.itemContainer()} onPress={handlePress}>
        <View style={colorStyle} />
        <TransactionInfo
          sender_bank={sender_bank}
          beneficiary_bank={beneficiary_bank}
          beneficiary_name={beneficiary_name}
          amount={amount}
          created_at={created_at}
        />
        <TransactionStatus status={status} />
      </Pressable>
    );
  },
);

export default TransactionItem;
