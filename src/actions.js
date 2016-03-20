import Dispatcher from './dispatcher';

export const Actions = {
  BUTTON_CLICKED: "BUTTON_CLICKED"
};

export const ButtonClickedAction = (userData) => {
  Dispatcher.dispatch({
    actionType: Actions.BUTTON_CLICKED, 
    data: userData
  });
};
