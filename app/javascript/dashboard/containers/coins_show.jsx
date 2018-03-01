import React, { Component } from 'react';
import CoinList from './coin_list';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { fetchCoins } from '../actions';

class CoinsShow extends Component {
  componentDidMount(){
    // console.log(this.props.match.params.id);
    if (!this.props.coin) {
      this.props.fetchCoin(this.props.match.params.id);
     }
  }
  render(){
    if (!this.props.coin){
      <p>Loading...</p>;
    }
    return (
      <div className="app">
        <p>{this.props.coin.name}</p>
        <p>{this.props.coin.symbol}</p>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  const id = parseInt(ownProps.match.params.id, 10);
  const coin = state.coin.find(p => p.id === id);
  return { coin };
}

export default connect(mapStateToProps, null)(CoinsShow);
