import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import {FormIndex} from '../components/formIndex';

const formArray = ['something', 'something else', 'sometihing else', 'another ting', 'just more', 'MOAR FORMS', 'CHANGE THIS', 'js', 'mas', 'fill', 'it', 'up', 'as', 'muchs', 'asd', 'possibly'];

export default class FormsIndexContainer extends Component {

  render() {
    return (
      <Grid style={{overflowY:'hidden', overflowX: 'hidden'}}>
        <Row style={{overflowY:'hidden', overflowX:'hidden'}}>
          <Col lg={6} md={8} xs={8} xsOffset={4} mdOffset={2} lgOffset={3} style={{overflowY: 'hidden', overflowX:'hidden'}}>
            <FormIndex forms={formArray} style={ {overflowY: 'hidden', overflowX: 'hidden' }}/>
          </Col>
        </Row>
      </Grid>
    );
  }

}
