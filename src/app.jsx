import React from 'react';
import ReactDOM from 'react-dom';
import H1 from './h1.jsx';
import Button from "./button.jsx";
import ExampleStore from "./example-store";
import {Actions} from './actions';
// require("./vendor/bootstrap-3.3.6-dist/css/bootstrap.css")

const App = React.createClass({
      
    getInitialState ( ) {
      return { data: null };
    },
    
    componentDidMount ( ) {
      this._exampleStore = new ExampleStore();
      this._exampleStore.addListener(Actions.BUTTON_CLICKED, this._onChange);
    },
    
    componentWillUnmount ( ) {
      this._exampleStore.removeAllListeners();
    },
    
    _onChange ( ) {
      this.setState(this._exampleStore.data());
    },
  
    render  ( ) {
      return (
        <div>
          <H1 />
          <Button/>
          <div>
            {(() => {
              if ( this.state.data !== null ) {
                return this.state.data.toString();
              }
              else {
                return "";
              }
            })()}
          </div>
        </div>
      );
    }
});

ReactDOM.render(<App />, document.getElementById('id'));