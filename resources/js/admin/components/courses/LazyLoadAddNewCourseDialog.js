import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";

function LazyLoadAddNewCourseDialog(props) {
  const { open, onClose, onSuccess } = props;
  const [AddNewCourseDialog, setAddNewCourseDialog] = useState(null);
  const [hasFetchedAddNewCourseDialog, setHasFetchedAddBlanceDialog] = useState(false);

  useEffect(() => {
    if (open && !hasFetchedAddNewCourseDialog) {
      setHasFetchedAddBlanceDialog(true);
      import("./AddNewCourseDialog").then(Component => {
        setAddNewCourseDialog(() => Component.default);
      });
    }
  }, [open, hasFetchedAddNewCourseDialog, setHasFetchedAddBlanceDialog, setAddNewCourseDialog]);

  return (
    <Fragment>
      {AddNewCourseDialog && (
        <AddNewCourseDialog
          open={open}
          onClose={onClose}
          onSuccess={onSuccess}
        ></AddNewCourseDialog>
      )}
    </Fragment>
  );

}

LazyLoadAddNewCourseDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired
};

export default LazyLoadAddNewCourseDialog;
