import memoize from 'fast-memoize';

import {STATUS_MESSAGE} from '../../utils/constants';
import {Styles} from './TransactionItem.types';

const styles: Styles = {
  itemContainer: memoize(() => ({
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 12,
    alignItems: 'center',
  })),
  colorContainer: memoize((props?: {color?: string}) => ({
    width: 8,
    backgroundColor: props?.color || 'orange',
    height: '100%',
  })),
  detailsContainer: memoize(() => ({
    flex: 1,
    paddingLeft: 16,
  })),
  statusContainer: memoize((props?: {status?: string}) =>
    props?.status === STATUS_MESSAGE.SUCCESS
      ? {
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          backgroundColor: 'green',
          paddingVertical: 8,
          paddingHorizontal: 15,
          marginLeft: 10,
        }
      : {
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 2,
          borderRadius: 8,
          paddingVertical: 8,
          paddingHorizontal: 15,
          borderColor: 'orange',
        },
  ),
  itemText: memoize(() => ({
    color: 'black',
    fontSize: 16,
    marginBottom: 4,
  })),
  itemTextButton: memoize((props?: {status?: string}) =>
    props?.status === STATUS_MESSAGE.SUCCESS
      ? {color: 'white', fontWeight: 'bold'}
      : {color: 'black', fontWeight: 'bold'},
  ),
  itemTitle: memoize(() => ({
    fontWeight: 'bold',
    fontSize: 16,
  })),
};

export default styles;
