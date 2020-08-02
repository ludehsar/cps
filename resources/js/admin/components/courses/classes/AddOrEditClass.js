import React, { useState, useCallback, useRef, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { Editor } from '@tinymce/tinymce-react';
import {
  Grid,
  Button,
  Box,
  withTheme,
  withStyles,
  TextField,
  InputAdornment } from "@material-ui/core";
import FormDialog from "../../../../shared/components/FormDialog";
import ColoredButton from "../../../../shared/components/ColoredButton";
import HighlightedInformation from "../../../../shared/components/HighlightedInformation";
import ButtonCircularProgress from "../../../../shared/components/ButtonCircularProgress";

const styles = {
  //
};

const AddOrEditClass = function (props) {
  const { open, onClose, onSuccess } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const inputCourseName = useRef();
  const inputCourseDescription = useRef();
  const inputCoursePrice = useRef();

  const addNewCourse = useCallback(() => {
    if (inputCoursePrice.current.value < '0') {
      setStatus('invalidCoursePrice');
      return;
    }
    setIsLoading(true);
    axios.post('/api/courses/new', {
      course_name: inputCourseName.current.value,
      course_description: inputCourseDescription.current.value,
      course_price: inputCoursePrice.current.value,
    }).then(() => {
      setIsLoading(false);
      onSuccess();
    }).catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
  });

  return (
    <Fragment>
      <FormDialog
        open={open}
        onClose={onClose}
        loading={isLoading}
        method="post"
        onFormSubmit={(e) => {
          e.preventDefault();
          addNewCourse();
        }}
        hideBackdrop
        headline="Add A New Course"
        content={
          <Fragment>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Course Name"
              inputRef={inputCourseName}
              autoFocus
              autoComplete="off"
              type="text"
              FormHelperTextProps={{ error: false }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Course Description"
              inputRef={inputCourseDescription}
              autoComplete="off"
              type="text"
              multiline={true}
              rows='5'
              rowsMax='5'
              FormHelperTextProps={{ error: false }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              error={status === "invalidCoursePrice"}
              required
              fullWidth
              label="Course Price"
              inputRef={inputCoursePrice}
              autoComplete="off"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">৳</InputAdornment>
              }}
              defaultValue='0'
              onChange={() => {
                if (status === "invalidCoursePrice") {
                  setStatus(null);
                }
              }}
              helperText={
                status === "invalidCoursePrice" ? (
                  <span>
                    Invalid price.
                  </span>
                ) : (
                  ""
                )
              }
              FormHelperTextProps={{ error: true }}
            />
          </Fragment>
        }
        actions={
          <Fragment>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              disabled={isLoading}
              size="large"
            >
              Create A New Course
              {isLoading && <ButtonCircularProgress />}
            </Button>
          </Fragment>
        }
      />
    </Fragment>
  );
};

AddOrEditClass.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(AddOrEditClass);