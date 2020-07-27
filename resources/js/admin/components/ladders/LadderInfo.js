import React from "react";
import PropTypes from "prop-types";
import { ListItemText, Button, Toolbar, withStyles } from "@material-ui/core";

const styles = {
  toolbar: {
    justifyContent: "space-between"
  }
};

function LadderInfo(props) {
  const { classes } = props;
  return (
    <Toolbar className={classes.toolbar}>
      <ListItemText primary="Ladders" secondary="Collected from a2oj.com" />
    </Toolbar>
  );
}

LadderInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LadderInfo);
