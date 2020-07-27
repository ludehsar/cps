import React from "react";
import PropTypes from "prop-types";
import { ListItemText, Button, Toolbar, withStyles } from "@material-ui/core";

const styles = {
  toolbar: {
    justifyContent: "space-between"
  }
};

function UserInfo(props) {
  const { classes } = props;
  return (
    <Toolbar className={classes.toolbar}>
      <ListItemText primary="Users" secondary="Restricted data" />
    </Toolbar>
  );
}

UserInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserInfo);
