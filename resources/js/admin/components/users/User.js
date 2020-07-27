import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { List, Divider, Paper, withStyles } from "@material-ui/core";
import UserDataTable from "./UserDataTable";
import UserInfo from "./UserInfo";

const styles = {
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)"
  }
};

function User(props) {
  const {
    classes,
    selectUser,
  } = props;

  useEffect(selectUser, [selectUser]);

  return (
    <Paper>
      <List disablePadding>
        <UserInfo />
        <Divider className={classes.divider} />
        <UserDataTable />
      </List>
    </Paper>
  );
}

User.propTypes = {
  classes: PropTypes.object.isRequired,
  selectUser: PropTypes.func.isRequired,
};

export default withStyles(styles)(User);
