import React, { useCallback, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  withStyles,
  Button,
  LinearProgress
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import EnhancedTableHead from "../../../shared/components/EnhancedTableHead";
import ColorfulChip from "../../../shared/components/ColorfulChip";
import unixToDateString from "../../../shared/functions/unixToDateString";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import currencyPrettyPrint from "../../../shared/functions/currencyPrettyPrint";
import PageviewIcon from '@material-ui/icons/Pageview';
import memoize from 'memoize-one';

const styles = theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },

  tableWrapper: {
    overflowX: "auto",
    width: "100%"
  },
  blackBackground: {
    backgroundColor: theme.palette.primary.main
  },
  contentWrapper: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2)
    },
    width: "100%"
  },
  dBlock: {
    display: "block !important"
  },
  dNone: {
    display: "none !important"
  },
  firstData: {
    paddingLeft: theme.spacing(3)
  },
  noDecoration: {
    textDecoration: "none !important"
  },
});

const LinearIndeterminate = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  );
};

const columns = memoize(clickHandler => [
  {
    selector: "id",
    name: "#",
    sortable: true,
  },
  {
    selector: "name",
    name: "Name",
    sortable: true,
  },
  {
    selector: "email",
    name: "Email",
    sortable: true,
  },
  {
    selector: "username",
    name: "Username",
    sortable: true,
  },
  {
    selector: "cf_handle",
    name: "CF Handle",
    sortable: true,
  },
  {
    selector: "institution",
    name: "Institution",
    sortable: true,
  },
  {
    cell: (row) => <Button variant="outlined" size="small" data-id={row.id} onClick={clickHandler}>View</Button>,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
    name: 'Action',
  },
]);

function UserDataTable(props) {
  const { theme, classes } = props;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const inputSearch = useRef();

  const fetchUsers = useCallback((page = 1) => {
    setLoading(true);
    axios.get("/api/users?page=" + page + "&per_page=" + perPage + "&q=" + searchQuery).then((res) => {
      setData(res.data.data);
      setTotalRows(res.data.total);
      setLoading(false);
    });
  }, [setLoading, setData, perPage, searchQuery, setTotalRows]);

  const handlePageChange = useCallback((page) => {
    fetchUsers(page);
  }, [fetchUsers]);

  const handlePerRowsChange = useCallback((newPerPage, page) => {
    setPerPage(newPerPage);
  }, [setPerPage]);

  const handleSearchQueryChange = useCallback((e) => {
    setSearchQuery(inputSearch.current.value);
  }, [setSearchQuery, inputSearch]);

  const handleAction = useCallback((e) => {
    console.log(e.currentTarget.dataset.id);
  });

  useEffect(async => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className={classes.tableWrapper}>
      <DataTable
        noHeader={true}
        columns={columns(handleAction)}
        data={data}
        defaultSortField="id"
        highlightOnHover={true}
        striped={true}
        progressPending={loading}
        progressComponent={<LinearIndeterminate classes={classes} />}
        persistTableHead
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        subHeader={true}
        subHeaderComponent={
          (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <TextField id="outlined-basic" label="Search" variant="outlined" size="small" style={{ margin: '5px' }} inputRef={inputSearch} onChange={handleSearchQueryChange} />
              <SearchIcon style={{ margin: '5px' }} color="action" />
            </div>
          )
        }
        subHeaderAlign='left'
      />
    </div>
  );
}

UserDataTable.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(UserDataTable);
