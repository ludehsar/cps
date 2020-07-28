import React from "react";
import PropTypes from "prop-types";
import { ListItemText, Button, Toolbar, withStyles } from "@material-ui/core";

const styles = {
  toolbar: {
    justifyContent: "space-between"
  }
};

function CourseInfo(props) {
  const { classes, openAddNewCourseDialog } = props;
  return (
    <Toolbar className={classes.toolbar}>
      <ListItemText primary="Courses" secondary="All courses information" />
      <Button
        variant="contained"
        color="secondary"
        onClick={openAddNewCourseDialog}
        disableElevation
      >
        Add New Course
      </Button>
    </Toolbar>
  );
}

CourseInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  openAddNewCourseDialog: PropTypes.func.isRequired,
};

export default withStyles(styles)(CourseInfo);
