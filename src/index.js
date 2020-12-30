import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/app';
import { ConfigProvider } from 'antd';
import * as serviceWorker from './serviceWorker';


function Index() {
  return (
    <div>
        <ConfigProvider>
            <App />
        </ConfigProvider>
    </div>
  );
}


ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.unregister();
