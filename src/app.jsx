import React from 'react';
import ReactDOM from 'react-dom';
import H1 from './h1.jsx'; 

export default class App extends React.Component {
    render  ( ) {
        return <H1 />;
    }
}

ReactDOM.render(<App />, document.getElementById('id'));