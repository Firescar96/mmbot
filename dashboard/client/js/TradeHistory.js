import React from 'react';
import Navbar from './Navbar.js';
require('../sass/home.scss');

class Page extends React.Component {
  constructor () {
    super();
    this.state = {
      marketData: [],
      selectedMarket: '',
    };
  }
  changeSelectorType (event) {
    this.setState({selectorType: event.target.value, shouldUpdateDOM: true});
    networkGraph.setSelectorType(event.target.value);
  }
  render () {
    let markets = this.state.marketData.map(data => {
      return (<div>
        <input id={data.Market + '-selector'} type="checkbox" className="tgl tgl-flat"
          checked={this.state.selectedMarket.localeCompare(data.Market) === 0 ? 'checked' : ''}
          onChange={this.changeSelectorType} value={data.Market}/>
        <label htmlFor={data.Market + '-selector'} className="tgl-btn"></label>
      </div>
      );
    });

    return (
      <div>
        <Navbar />

        <main>
          Choose a market
          {markets}

        </main>

      </div>
    );
  }
}

export default Page;
