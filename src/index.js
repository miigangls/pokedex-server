import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/app';
import { ConfigProvider } from 'antd';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";

function Index() {
  return (
    <Router>
        <ConfigProvider>
            <App />
        </ConfigProvider>
    </Router>
  );
}


ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.unregister();
