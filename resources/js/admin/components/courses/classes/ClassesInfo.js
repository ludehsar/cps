import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { ListItemText, Button, Toolbar, withStyles } from "@material-ui/core";

const styles = {
  toolbar: {
    justifyContent: "space-between"
  }
};

function ClassesInfo(props) {
  const {
    classes,
    openAddClassPaper,
    setIsEditingExistingClass,
    setClassData
  } = props;

  const handleNewClass = useCallback(() => {
    setIsEditingExistingClass(false);
    setClassData(null);
    openAddClassPaper();
  }, [setIsEditingExistingClass, setClassData, openAddClassPaper]);

  return (
    <Toolbar className={classes.toolbar}>
      <ListItemText primary="Classes" />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleNewClass}
        disableElevation
      >
        Add New Class
      </Button>
    </Toolbar>
  );
}

ClassesInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  openAddClassPaper: PropTypes.func.isRequired,
  setIsEditingExistingClass: PropTypes.func.isRequired,
  setClassData: PropTypes.func.isRequired,
};

export default withStyles(styles)(ClassesInfo);
