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
  optionContainer: memoize(() => ({
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  })),
  optionText: memoize(() => ({
    fontSize: 16,
    marginLeft: 10,
  })),
  applyButton: memoize(() => ({
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  })),
  applyButtonText: memoize(() => ({
    color: 'white',
    fontWeight: 'bold',
  })),
};

export default styles;
