import memoize from 'fast-memoize';

import {Styles} from './SearchBar.types';

const styles: Styles = {
  searchContainer: memoize(() => ({
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  })),
  searchInput: memoize(() => ({
    height: 40,
    borderColor: 'gray',
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 12,
  })),
  clearButton: memoize(() => ({
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  })),
  clearButtonText: memoize(() => ({
    fontSize: 18,
    color: 'orange',
    fontWeight: 'bold',
  })),
};

export default styles;
