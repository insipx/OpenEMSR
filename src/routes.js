import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import NotFound from './components/notFound';
import {AdministerMeds} from './components/AdministerMeds';
import {VitalSigns} from './components/VitalSigns';
import FormsIndex from './containers/form_index';

export default (
  <Route path="/" component={App} >
      <IndexRoute component={FormsIndex} />
      <Route path="administer-meds" component={AdministerMeds} />
      <Route path="vital-signs" component={VitalSigns} />
  </Route>
);
