import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

export const Form = (props) => {
  <Paper zDepth={2}>
    <TextField hintText="props.hintText" underlineShow={false} />
    <Divider />
  </Paper>
}
