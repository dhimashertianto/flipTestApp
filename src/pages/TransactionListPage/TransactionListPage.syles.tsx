import memoize from 'fast-memoize';

import {Styles} from './TransactionListPage.types';

const styles: Styles = {
  container: memoize(() => ({
    flex: 1,
    padding: 16,
  })),
};

export default styles;
