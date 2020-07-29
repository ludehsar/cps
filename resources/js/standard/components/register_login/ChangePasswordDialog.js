import React, { useState, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import {
  TextField,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  withStyles,
} from "@material-ui/core";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";

const styles = (theme) => ({
  dialogContent: {
    paddingTop: theme.spacing(2),
  },
  dialogActions: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
});

function ChangePassword(props) {
  const { status, setStatus, onSuccess, onClose, classes } = props;
  const [isLoading, setIsLoading] = useState(false);
  const inputEmail = useRef();

  const sendPasswordEmail = useCallback(() => {
    setStatus(null);
    setIsLoading(true);
    axios.post('/password/email', {
      email: inputEmail.current.value,
    }).then(() => {
      setIsLoading(false);
      onSuccess();
      onClose();
    }).catch((res) => {
      const errors = res.response.data.errors;
      if (errors.email) setStatus(errors.email[0]);
      setIsLoading(false);
      return;
    });
  }, [setIsLoading, setStatus, inputEmail, onSuccess, onClose]);

  return (
    <Dialog
      open
      hideBackdrop
      onClose={onClose}
      disableBackdropClick={isLoading}
      disableEscapeKeyDown={isLoading}
      maxWidth="xs"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendPasswordEmail();
        }}
      >
        <DialogContent className={classes.dialogContent}>
          <Typography paragraph>
            Enter your email address below and we will send you verification code to reset your password.
          </Typography>
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            error={status === "We can't find a user with that email address."}
            label="Email Address"
            inputRef={inputEmail}
            autoFocus
            autoComplete="off"
            type="email"
            onChange={() => {
              if (status === "We can't find a user with that email address.") {
                setStatus(null);
              }
            }}
            helperText={(() => {
              if (status === "We can't find a user with that email address.") {
                return status;
              }
              return null;
            })()}
            FormHelperTextProps={{ error: true }}
          />
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            disabled={isLoading}
          >
            Reset password
            {isLoading && <ButtonCircularProgress />}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

ChangePassword.propTypes = {
  onClose: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  status: PropTypes.string,
  setStatus: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(ChangePassword);
