import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

import MenuItem from 'material-ui/MenuItem';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const menuItems = { Home: '/', 'Administer Meds': '/administer-meds/', 'Vital Signs': '/vital-signs/' };

const styles = {
  spanSocial: {
    float: ' left',
    paddingLeft: '25%',
    paddingTop: 20,
  }
};

const getMenuItem = (key, value) => {
  return (
      <Link to={value} key={value}>
        <MenuItem>
            {key}
        </MenuItem>
      </Link>
  );
}

const renderMenuItems = () => {
  const result = [];
   _.forEach(menuItems, (value, key) => {
      result.push(getMenuItem(key, value));
  });
  return result.map((item) => item);
};

export const MenuItems = props => (
    <div>
      {renderMenuItems()}
    </div>
  );
