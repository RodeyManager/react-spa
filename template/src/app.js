import React, {
  Component
} from 'react';
import Header from './views/layout/Header';
import Main from './views/layout/Main';

export default class App extends Component {
  render() {
    return (
      <div className="app-contanier">
        <Header />
        <Main />
      </div>
    );
  }
}


