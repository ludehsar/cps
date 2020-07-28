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
    selector: "course_name",
    name: "Course Name",
    sortable: true,
  },
  {
    selector: "course_description",
    name: "Description",
    sortable: false,
  },
  {
    selector: "user.name",
    name: "Mentor",
    sortable: true,
  },
  {
    selector: "course_price",
    name: "Course Price",
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

function CourseDataTable(props) {
  const { theme, classes, needToRefetchCourses, setNeedToRefetchCourses } = props;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const inputSearch = useRef();

  const fetchCourses = useCallback((page = 1) => {
    setLoading(true);
    axios.get("/api/courses?page=" + page + "&per_page=" + perPage + "&q=" + searchQuery).then((res) => {
      setData(res.data.data);
      setTotalRows(res.data.total);
      setLoading(false);
    });
  }, [setLoading, setData, perPage, searchQuery, setTotalRows]);

  const handlePageChange = useCallback((page) => {
    fetchCourses(page);
  }, [fetchCourses]);

  const handlePerRowsChange = useCallback((newPerPage, page) => {
    setPerPage(newPerPage);
    setNeedToRefetchCourses(true);
  }, [setPerPage]);

  const handleSearchQueryChange = useCallback((e) => {
    setSearchQuery(inputSearch.current.value);
    setNeedToRefetchCourses(true);
  }, [setSearchQuery, inputSearch]);

  const handleAction = useCallback((e) => {
    console.log(e.currentTarget.dataset.id);
  });

  useEffect(async => {
    if (needToRefetchCourses) {
      fetchCourses();
      setNeedToRefetchCourses(false);
    }
  }, [fetchCourses, needToRefetchCourses, setNeedToRefetchCourses]);

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

CourseDataTable.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  needToRefetchCourses: PropTypes.bool.isRequired,
  setNeedToRefetchCourses: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(CourseDataTable);
