import React from 'react';
import Navbar from './Navbar.js';
require('../sass/home.scss');

class Page extends React.Component {
  render () {
    return (
      <div>
        <Navbar />

        <main>
          <div>
            <span class="overview-title">Open Orders</span>
            <span class="overview-text"></span>
          </div>
          <div>
            <span class="overview-title">24 Hour Volume</span>
            <span class="overview-text"></span>
          </div>
          <div>
            <span class="overview-title">Uptime</span>
            <span class="overview-text"></span>
          </div>

          <div>
            Markets:
            {}
          </div>

        </main>

      </div>
    );
  }
}

export default Page;
