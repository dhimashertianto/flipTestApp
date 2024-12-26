import memoize from 'fast-memoize';
import {Styles} from './TransactionHeader.types';

const styles: Styles = {
  header: memoize(() => ({
    padding: 16,
    borderBottomColor: 'lightblue',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  })),
  titleHeader: memoize(() => ({
    fontSize: 16,
    fontWeight: 'bold',
  })),
  titleButton: memoize(() => ({
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 16,
  })),
};

export default styles;
