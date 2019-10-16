import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
import App from './App';
import store from "./reducers/ReduxStore";
import {Provider} from "react-redux";




// Init VK  Mini App
connect.send('VKWebAppInit', {});



ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'))
