import Home from './Home.js';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

render((
  <BrowserRouter>
    <Route path="*" component={Home}/>
  </BrowserRouter>
), document.getElementById('root'));
