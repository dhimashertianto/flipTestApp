import memoize from 'fast-memoize';
import {Styles} from './Modal.types';

const styles: Styles = {
  modalContainer: memoize(() => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  })),
  modalContent: memoize(() => ({
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
  })),
  modalTitle: memoize(() => ({
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  })),
};

export default styles;
