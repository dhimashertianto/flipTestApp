import memoize from 'fast-memoize';
import {Styles} from './TransactionDetailpage.types';

const styles: Styles = {
  container: memoize(() => ({
    flex: 1,
    backgroundColor: 'white',
  })),
  text: memoize(() => ({
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  })),
};

export default styles;
