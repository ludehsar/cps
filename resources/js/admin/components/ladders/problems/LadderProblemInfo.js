import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ListItemText, Button, Toolbar, withStyles } from "@material-ui/core";

const styles = {
  toolbar: {
    justifyContent: "space-between"
  }
};

function LadderProblemInfo(props) {
  const { classes } = props;

  const [ladder, setLadder] = useState(null);

  const fetchLadder = useCallback((id) => {
    axios.get('/api/ladders/' + id).then((res) => {
      setLadder(res.data);
    });
  });

  useEffect(() => {
    const url = window.location.href;
    const urlArr = url.split("/");
    const id = urlArr[urlArr.length - 1];
    fetchLadder(id);
  }, []);

  return (
    <Toolbar className={classes.toolbar}>
      <ListItemText primary={ladder ? ladder.ladder_name : 'Invalid Ladder'} secondary={ladder ? ladder.ladder_description : 'Invalid ladder.'} />
    </Toolbar>
  );
}

LadderProblemInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LadderProblemInfo);
