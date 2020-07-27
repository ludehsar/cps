import React from "react";
import ReactDOM from "react-dom";
import ReactAdmin from "./ReactAdmin";
import DataTable from "react-data-table-component";

window._ = require('lodash');

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.DataTable = DataTable;

ReactDOM.render(
  <ReactAdmin />,
  document.getElementById("root")
);
