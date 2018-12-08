import React from 'react';
require('../sass/navbar.scss');

class Navbar extends React.Component {
  constructor () {
    super();
    this.state = {
      selectedTab: 'overview',
    };
  }
  changeSelectorType (event) {
    this.setState({selectorType: event.target.value});
    networkGraph.setSelectorType(event.target.value);
  }
  render () {
    return (
      <nav>
        <label htmlFor={'overview-selector'} className="tgl-btn">
          <input id={'overview-selector'} type="radio"
            checked={this.state.selectedTab.localeCompare('overview') === 0 ? 'checked' : ''}
            onChange={this.changeSelectorType} value="overview"/>
          <span>Overview</span>
        </label>
        <label htmlFor={'open-selector'} className="tgl-btn">
          <input id={'open-selector'} type="radio"
            checked={this.state.selectedTab.localeCompare('orders') === 0 ? 'checked' : ''}
            onChange={this.changeSelectorType} value="orders"/>
          <span>Open Orders</span>
        </label>
        <label htmlFor={'trade-selector'} className="tgl-btn">
          <input id={'trade-selector'} type="radio"
            checked={this.state.selectedTab.localeCompare('history') === 0 ? 'checked' : ''}
            onChange={this.changeSelectorType} value="history"/>
          <span>Trade History</span>
        </label>
      </nav>
    );
  }
}

export default Navbar;
