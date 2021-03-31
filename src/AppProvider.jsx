import React from 'react';
import { Provider } from 'react-redux';

import SetupAPI from 'api/axiosSetup';
import { configStore } from 'data/store';
import App from './App';

const store = configStore();

class AppProvider extends React.PureComponent {
  constructor(props) {
    super(props);

    SetupAPI.init();
    SetupAPI.setBaseUrl();
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default AppProvider;
