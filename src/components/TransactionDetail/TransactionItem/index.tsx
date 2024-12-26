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
const TransactionInfo = React.memo<{
  sender_bank: string;
  beneficiary_bank: string;
  beneficiary_name: string;
  amount: number;
  created_at: string;
  status?: string;
}>(
  ({
    sender_bank,
    beneficiary_bank,
    beneficiary_name,
    amount,
    created_at,
    status,
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
          <View>
            <Text style={styles.itemTitle()}>{bankInfo}</Text>
            <Text style={styles.itemText()}>
              {beneficiary_name.toUpperCase()}
            </Text>
            <TransactionDetails amount={amount} created_at={created_at} />
          </View>
          <View style={styles.buttonContainer()}>
            <TransactionStatus status={status} />
          </View>
        </View>
      </React.Fragment>
    );
  },
);

const TransactionDetails = React.memo(
  ({amount, created_at}: {amount: number; created_at: string}) => {
    const amountFormatted = useMemo(() => formatToRupiah(amount), [amount]);
    const dateFormatted = useMemo(() => formatDate(created_at), [created_at]);

    return (
      <Text
        style={styles.itemText()}>{`${amountFormatted} | ${dateFormatted}`}</Text>
    );
  },
);

const TransactionStatus: React.FC<{status: string}> = React.memo(({status}) => {
  return (
    <View style={styles.statusContainer({status})}>
      <Text style={styles.itemTextButton({status})}>
        {status === STATUS_MESSAGE.PENDING ? 'Pengecekan' : 'Berhasil'}
      </Text>
    </View>
  );
});

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

    const handlePress = useCallback(() => {
      onPress();
    }, [onPress]);

    return (
      <Pressable style={styles.itemContainer({color})} onPress={handlePress}>
        <TransactionInfo
          sender_bank={sender_bank}
          beneficiary_bank={beneficiary_bank}
          beneficiary_name={beneficiary_name}
          amount={amount}
          created_at={created_at}
          status={status}
        />
      </Pressable>
    );
  },
);

export default TransactionItem;
