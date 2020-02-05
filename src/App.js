import React from 'react';
import {Route,Switch} from 'react-router-dom';
import PropTypes from "prop-types";
import BrandPages from 'views/masters/brand';
import ProductPages from 'views/masters/product';
import UserPages from 'views/masters/user';
import CategoryPages from 'views/masters/category';
import CustomerPages from 'views/masters/customer';

import 'assets/css/classic.css'; 
import 'assets/css/styles.css'; 
import '../node_modules/font-awesome/css/font-awesome.css';

const App = ({location}) => (
  <div>
    <Switch>
      <Route location={location} path="/master/brand" exact component={BrandPages} />
      <Route location={location} path="/master/product" exact component={ProductPages} />
      <Route location={location} path="/master/user" exact component={UserPages} />
      <Route location={location} path="/master/Category" exact component={CategoryPages} />
      <Route location={location} path="/master/customer" exact component={CustomerPages} />
    </Switch>
  </div>
)

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App