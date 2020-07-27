import React from "react";
import ReactDOM from "react-dom";
import User from "./User";

window._ = require('lodash');

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

ReactDOM.render(
  <User />,
  document.getElementById("root")
);
