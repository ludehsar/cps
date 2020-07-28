import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { List, Divider, Paper, withStyles } from "@material-ui/core";
import CourseDataTable from "./CourseDataTable";
import CourseInfo from "./CourseInfo";

const styles = {
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)"
  }
};

function Course(props) {
  const {
    classes,
    selectCourse,
    openAddNewCourseDialog,
    needToRefetchCourses,
    setNeedToRefetchCourses,
  } = props;

  useEffect(selectCourse, [selectCourse]);

  return (
    <Paper>
      <List disablePadding>
        <CourseInfo openAddNewCourseDialog={openAddNewCourseDialog} />
        <Divider className={classes.divider} />
        <CourseDataTable
          needToRefetchCourses={needToRefetchCourses}
          setNeedToRefetchCourses={setNeedToRefetchCourses}
        />
      </List>
    </Paper>
  );
}

Course.propTypes = {
  classes: PropTypes.object.isRequired,
  selectCourse: PropTypes.func.isRequired,
  openAddNewCourseDialog: PropTypes.func.isRequired,
  needToRefetchCourses: PropTypes.bool.isRequired,
  setNeedToRefetchCourses: PropTypes.func.isRequired,
};

export default withStyles(styles)(Course);
