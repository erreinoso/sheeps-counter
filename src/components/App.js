import React from 'react';
import '../stylesheets/App.scss';
import SheepCounter from './SheepCounter';
import SheepAnimation from './SheepAnimation';

class App extends React.Component {
  render() {
    console.log('render de app');
    return (
      <div>
        <SheepAnimation />
        <SheepCounter />
      </div>
    );
  }
}

export default App;
