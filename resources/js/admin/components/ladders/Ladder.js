import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { List, Divider, Paper, withStyles } from "@material-ui/core";
import LadderTable from "./LadderTable";
import LadderInfo from "./LadderInfo";

const styles = {
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)"
  }
};

function Ladder(props) {
  const {
    classes,
    ladders,
    selectLadder
  } = props;

  useEffect(selectLadder, [selectLadder]);

  return (
    <Paper>
      <List disablePadding>
        <LadderInfo />
        <Divider className={classes.divider} />
        <LadderTable ladders={ladders} />
      </List>
    </Paper>
  );
}

Ladder.propTypes = {
  classes: PropTypes.object.isRequired,
  ladders: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectLadder: PropTypes.func.isRequired,
};

export default withStyles(styles)(Ladder);
