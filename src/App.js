import React, { Component } from 'react';
import Tree from './components/List/ListTree';
import  dataRoot  from './data/mock/rootPanel';
import  dataLevel  from './data/mock/levelPanel';
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">


        <Tree rootPanel={dataRoot} levelPanel={dataLevel} />

      </div>
    );
  }
}

export default App;
