import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';


const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

// export default Root;
ReactDOM.render(<Root/>,document.getElementById('root'));

serviceWorker.register();
