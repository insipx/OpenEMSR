import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

export const Form = ({hintText}) => (
  <Paper zDepth={2} style={{paddingBottom: 25, paddingTop: 10, paddingLeft: 10, paddingRight: 10, marginBottom: 20}}>
    <h4> {hintText} </h4>
    <TextField hintText={`${hintText}`} underlineShow={false}
      style={{ overflowY:'hidden'}}/>
    <Divider />
  </Paper>
);

Form.propTypes = {
  hintText: React.PropTypes.string.isRequired
};
