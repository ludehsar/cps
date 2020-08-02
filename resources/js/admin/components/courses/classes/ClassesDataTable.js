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
  LinearProgress,
  Switch
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import EnhancedTableHead from "../../../../shared/components/EnhancedTableHead";
import ColorfulChip from "../../../../shared/components/ColorfulChip";
import unixToDateString from "../../../../shared/functions/unixToDateString";
import HighlightedInformation from "../../../../shared/components/HighlightedInformation";
import currencyPrettyPrint from "../../../../shared/functions/currencyPrettyPrint";
import PageviewIcon from '@material-ui/icons/Pageview';
import memoize from "memoize-one";
import { useSnackbar } from 'notistack';

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

const columns = memoize((classes, togglePublish, togglePublic) => [
  {
    selector: "id",
    name: "#",
    sortable: true,
  },
  {
    selector: "class_title",
    name: "Class Title",
    sortable: true,
  },
  {
    selector: "user.name",
    name: "Created By",
    sortable: true,
  },
  {
    name: "Is Published?",
    button: false,
    cell: (row) => <Switch
      checked={row.is_published === 1}
      color="secondary"
      onChange={() => {togglePublish(row.id)}}
    />
  },
  {
    name: "Is Public?",
    button: false,
    cell: (row) => <Switch
      checked={row.is_public === 1}
      color="secondary"
      onChange={() => {togglePublic(row.id)}}
    />
  },
  {
    cell: (row) => (
      <Link to="#" className={classes.noDecoration}>
        <Button variant="outlined" size="small">View/Edit</Button>
      </Link>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
    name: 'Action',
  },
]);

function ClassesDataTable(props) {
  const {
    theme,
    classes,
    openAddClassPaper,
    setIsEditingExistingClass,
    setClassData
  } = props;

  const { enqueueSnackbar } = useSnackbar();

  const [datasource, setDatasource] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const inputSearch = useRef();

  const fetchCourseClasses = useCallback((ndatasource = datasource, page = currentPage) => {
    setLoading(true);
    axios.get(ndatasource + "?page=" + page + "&per_page=" + perPage + "&q=" + searchQuery).then((res) => {
      setData(res.data.data);
      setTotalRows(res.data.total);
      setLoading(false);
    });
  }, [setLoading, setData, perPage, searchQuery, setTotalRows]);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
    fetchCourseClasses(datasource, page);
  }, [setCurrentPage, fetchCourseClasses, datasource]);

  const handlePerRowsChange = useCallback((newPerPage, page) => {
    setPerPage(newPerPage);
  }, [setPerPage]);

  const handleSearchQueryChange = useCallback(() => {
    setSearchQuery(inputSearch.current.value);
  }, [setSearchQuery, inputSearch]);

  const handleTogglePublish = useCallback((id) => {
    axios.post("/api/classes/" + id + "/togglePublished").then(() => {
      enqueueSnackbar('Successfully toggled publish request!', { variant: 'success' });
      fetchCourseClasses(datasource, currentPage);
    }).catch(() => {
      enqueueSnackbar('Something went wrong!', { variant: 'error' });
    });
  }, [fetchCourseClasses, datasource, currentPage]);

  const handleTogglePublic = useCallback((id) => {
    axios.post("/api/classes/" + id + "/togglePublic").then(() => {
      enqueueSnackbar('Successfully toggled public status request!', { variant: 'success' });
      fetchCourseClasses(datasource, currentPage);
    }).catch(() => {
      enqueueSnackbar('Something went wrong!', { variant: 'error' });
    });
  }, [fetchCourseClasses, datasource, currentPage]);

  useEffect(() => {
    const url = window.location.href;
    const urlArr = url.split("/");
    const id = urlArr[urlArr.length - 1];
    const ndatasource = "/api/courses/" + id + "/classes/asadmin";
    setDatasource(ndatasource);
    fetchCourseClasses(ndatasource);
  }, [setDatasource, fetchCourseClasses]);

  return (
    <div className={classes.tableWrapper}>
      <DataTable
        noHeader={true}
        columns={columns(classes, handleTogglePublish, handleTogglePublic)}
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

ClassesDataTable.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openAddClassPaper: PropTypes.func.isRequired,
  setIsEditingExistingClass: PropTypes.func.isRequired,
  setClassData: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(ClassesDataTable);
