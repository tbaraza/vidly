import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

const App = () => (
  <div>
    <p>How are you today!!!</p>
    <Button>Default</Button>
  </div>
);
if (module.hot) {
  module.hot.accept();
}
ReactDOM.render(<App />, document.getElementById('app'));
