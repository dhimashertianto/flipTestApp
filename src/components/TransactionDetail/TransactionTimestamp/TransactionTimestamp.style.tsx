import memoize from 'fast-memoize';
import {Styles} from './TransactionTimestamp.types';

const styles: Styles = {
  container: memoize(() => ({
    paddingHorizontal: 16,
  })),
  titleHeader: memoize(() => ({
    fontSize: 16,
    fontWeight: 'bold',
  })),
};

export default styles;
