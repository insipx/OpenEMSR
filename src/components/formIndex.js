import React, { Component } from 'react';
import _ from 'lodash';

import Paper from 'material-ui/Paper';

import { Form } from './form';

//render the forms
const renderForms = (props)  => (props.forms.map( (form) => {
  return (
    <Form hintText={form} key={form} />
  );
}
));

export const FormIndex = (props) => {
  console.log("GETTING TO LINE 18 in FORMINDEX");
  if(_.isEmpty(props.forms)) {
    return <li> No Results </li>;
  }

  //pass props to renderForms instead of form array when start working with
  //API

  return (
    <div>
      {renderForms(props)}
    </div>
  );
};
