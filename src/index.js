import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import allReducers from "./redux/reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { ThemeProvider } from "styled-components";
import * as theme from "./styled-components/theme.js";

const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
