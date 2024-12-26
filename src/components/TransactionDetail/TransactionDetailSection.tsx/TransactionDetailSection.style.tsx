import memoize from 'fast-memoize';

import {Styles} from './TransactionDetailSection.types';

const styles: Styles = {
  titleHeader: memoize(() => ({
    fontSize: 16,
    fontWeight: 'bold',
  })),
  content: memoize(() => ({
    paddingHorizontal: 16,
    paddingTop: 16,
  })),
  contentRow: memoize(() => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  })),
  transactionInfo: memoize(() => ({
    flex: 2,
  })),
  transactionAmount: memoize(() => ({
    flex: 1,
  })),
  marginBottom: memoize(() => ({
    marginBottom: 16,
  })),
};

export default styles;
