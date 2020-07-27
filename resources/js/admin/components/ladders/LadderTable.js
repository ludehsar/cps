import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  withStyles,
  ButtonGroup,
  Button
} from "@material-ui/core";
import EnhancedTableHead from "../../../shared/components/EnhancedTableHead";
import ColorfulChip from "../../../shared/components/ColorfulChip";
import unixToDateString from "../../../shared/functions/unixToDateString";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import currencyPrettyPrint from "../../../shared/functions/currencyPrettyPrint";
import PageviewIcon from '@material-ui/icons/Pageview';

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

const rows = [
  {
    id: "id",
    label: "#"
  },
  {
    id: "ladder_name",
    label: "Name"
  },
  {
    id: "ladder_description",
    label: "Description"
  },
  {
    id: "ladder_difficulty",
    label: "Difficulty"
  },
  {
    id: "action",
    label: "Action"
  }
];

function LadderTable(props) {
  const { ladders, theme, classes } = props;

  if (ladders.length > 0) {
    return (
      <div className={classes.tableWrapper}>
        <Table aria-labelledby="tableTitle">
          <EnhancedTableHead rowCount={ladders.length} rows={rows} />
          <TableBody>
            {ladders
              .map((ladder, index) => (
                <TableRow hover tabIndex={-1} key={index}>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.firstData}
                  >
                    {ladder.id}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                  >
                    {ladder.ladder_name}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                  >
                    {ladder.ladder_description}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                  >
                    {ladder.ladder_difficulty}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                  >
                    <Link to={"/admin/ladders/" + ladder.id} className={classes.noDecoration}>
                      <Button variant="outlined" size="small">View</Button>
                    </Link>
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
        No ladders received yet.
      </HighlightedInformation>
    </div>
  );
}

LadderTable.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  ladders: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles, { withTheme: true })(LadderTable);
