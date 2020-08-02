import React, { Fragment, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography, Box, List, Divider, Paper } from "@material-ui/core";
import CourseClass from "./classes/CourseClass";
import AddOrEditClass from "./classes/AddOrEditClass";

function CourseDetails(props) {
  const {
    selectCourse,
  } = props;

  const [isAddClassPaperOpen, setIsAddClassPaperOpen] = useState(false);
  const [isEditingExistingClass, setIsEditingExistingClass] = useState(false);
  const [classData, setClassData] = useState(null);

  const openAddClassPaper = useCallback(() => {
    setIsAddClassPaperOpen(true);
  }, [setIsAddClassPaperOpen]);

  const closeAddClassPaper = useCallback(() => {
    setIsAddClassPaperOpen(false);
  }, [setIsAddClassPaperOpen]);

  useEffect(selectCourse, [selectCourse]);

  return (
    <Fragment>
      <Box mt={4}>
        <Typography variant="subtitle1" gutterBottom>
          Your Course Info
        </Typography>
      </Box>
      //
      <Box mt={4}>
        <Typography variant="subtitle1" gutterBottom>
          Classes Information
        </Typography>
      </Box>
      {isAddClassPaperOpen ? (
        <Typography variant="subtitle1" gutterBottom>
          Classes Information
        </Typography>
      ) : (
        <CourseClass
          openAddClassPaper={openAddClassPaper}
          setIsEditingExistingClass={setIsEditingExistingClass}
          setClassData={setClassData}
        />
      )}
      <Box mt={4}>
        <Typography variant="subtitle1" gutterBottom>
          Enrolee Info
        </Typography>
      </Box>
      // Filtering enrolee info
    </Fragment>
  );
}

CourseDetails.propTypes = {
  selectCourse: PropTypes.func.isRequired,
};

export default CourseDetails;
