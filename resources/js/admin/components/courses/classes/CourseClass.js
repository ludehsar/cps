import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { List, Divider, Paper, withStyles } from "@material-ui/core";
import ClassesDataTable from "./ClassesDataTable";
import ClassesInfo from "./ClassesInfo";

const styles = {
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)"
  }
};

function CourseClass(props) {
  const {
    classes,
    openAddClassPaper,
    setIsEditingExistingClass,
    setClassData
  } = props;

  return (
    <Paper>
      <List disablePadding>
        <ClassesInfo
          openAddClassPaper={openAddClassPaper}
          setIsEditingExistingClass={setIsEditingExistingClass}
          setClassData={setClassData}
        />
        <Divider className={classes.divider} />
        <ClassesDataTable
          openAddClassPaper={openAddClassPaper}
          setIsEditingExistingClass={setIsEditingExistingClass}
          setClassData={setClassData}
        />
      </List>
    </Paper>
  );
}

CourseClass.propTypes = {
  classes: PropTypes.object.isRequired,
  openAddClassPaper: PropTypes.func.isRequired,
  setIsEditingExistingClass: PropTypes.func.isRequired,
  setClassData: PropTypes.func.isRequired,
};

export default withStyles(styles)(CourseClass);
