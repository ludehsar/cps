import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { List, Divider, Paper, withStyles } from "@material-ui/core";
import LadderProblemTable from "./LadderProblemTable";
import LadderProblemInfo from "./LadderProblemInfo";

const styles = {
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)"
  }
};

function LadderProblem(props) {
  const {
    classes,
    selectLadder
  } = props;

  useEffect(selectLadder, [selectLadder]);

  return (
    <Paper>
      <List disablePadding>
        <LadderProblemInfo />
        <Divider className={classes.divider} />
        <LadderProblemTable />
      </List>
    </Paper>
  );
}

LadderProblem.propTypes = {
  classes: PropTypes.object.isRequired,
  selectLadder: PropTypes.func.isRequired,
};

export default withStyles(styles)(LadderProblem);
