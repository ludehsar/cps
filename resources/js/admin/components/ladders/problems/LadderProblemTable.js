import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  Button
} from "@material-ui/core";

import EnhancedTableHead from "../../../../shared/components/EnhancedTableHead";
import HighlightedInformation from "../../../../shared/components/HighlightedInformation";
import LinkIcon from '@material-ui/icons/Link';

const styles = theme => ({
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

const columns = [
  {
    id: "id",
    label: "#",
  },
  {
    id: "problem_title",
    label: "Title",
  },
  {
    id: "online_judge",
    label: "Online Judge",
  },
  {
    id: "problem_difficulty",
    label: "Difficulty",
  },
  {
    id: 'action',
    label: "Action",
  }
];

function LadderProblemTable(props) {
  const { theme, classes } = props;

  const [data, setData] = useState([]);
  const [tableItemFirstId, setTableItemFirstId] = useState(0);

  const fetchLadderProblems = useCallback((dataSource) => {
    axios.get(dataSource).then((res) => {
      setData(res.data);
      setTableItemFirstId(res.data[0].id);
    });
  }, [setData, setTableItemFirstId]);

  useEffect(async => {
    const url = window.location.href;
    const urlArr = url.split("/");

    const dataSource = "/api/ladders/" + urlArr[urlArr.length - 1];
    fetchLadderProblems(dataSource);
  }, [fetchLadderProblems]);

  if (data.length > 0) {
    return (
      <div className={classes.tableWrapper}>
        <Table size="small" aria-labelledby="tableTitle">
            <EnhancedTableHead rowCount={data.length} rows={columns} />
            <TableBody>
              {data
                .map((problem, index) => (
                  <TableRow hover tabIndex={-1} key={index}>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.firstData}
                    >
                      {problem.id - tableItemFirstId + 1}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                    >
                      {problem.problem_title}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                    >
                      {problem.online_judge}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                    >
                      {problem.problem_difficulty}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                    >
                      <Button variant="outlined" size="small" href={problem.problem_url} target="_blank">
                        <LinkIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
      </div>
    );
  }
  return (
    <div className={classes.contentWrapper}>
      <HighlightedInformation>
        No problems from this ladder received yet.
      </HighlightedInformation>
    </div>
  );
}

LadderProblemTable.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(LadderProblemTable);
