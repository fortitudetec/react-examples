import React from 'react';
import { Actions, ButtonClickedAction } from './actions';

export default React.createClass({
  getDefaultProps ( ) {
    return {
      label: "Button"
    };
  },
  handleClick ( ) {
    ButtonClickedAction(new Date());
  },
  render ( ) {
    return <button className="btn btn-success" onClick={this.handleClick}>{this.props.label}</button>;
  }
});
