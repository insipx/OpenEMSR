import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import NotFound from './components/notFound';
import AdministerMeds from './components/AdministerMeds';
import VitalSigns from './components/VitalSigns';
import Home from './components/home';

export default (
  <Route path="/" component={App} >
      <Route path="home" component={Home} />
      <Route path="administer-meds" component={AdministerMeds} />
      <Route path="vital-signs" component={VitalSigns} />
  </Route>
);
