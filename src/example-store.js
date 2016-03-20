import {EventEmitter} from 'fbemitter';
import { Actions } from './actions';
import Dispatcher from './dispatcher';

class ExampleStore extends EventEmitter {
  
  constructor ( dispatcher ) {
    super();
    this._data = {};
    
    var self = this;
    Dispatcher.register((payload) => {
      switch ( payload.actionType ) {
      case Actions.BUTTON_CLICKED:
        self._data = { data: payload.data };
        self.emit(payload.actionType, self._data);
        break;
      default:
        break;
      }
    });
  }
  
  data ( ) {
    return this._data;
  }
  
};

export default ExampleStore;
