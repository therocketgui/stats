import React, { Component } from 'react';
import CoinList from './coin_list';

class CoinsIndex extends Component {
  render(){
    return (
      <div className="app app-index">
        <CoinList />
      </div>
    );
  }
}

export default CoinsIndex;
