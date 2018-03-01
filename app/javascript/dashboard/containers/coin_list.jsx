import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCoins } from '../actions';
import Coin from './coin';

class CoinList extends Component{
  componentDidMount(){
    this.props.fetchCoins();
  }
  render(){
    return(
      <div>
        <ul>
          {this.props.coins.map((coin => <Coin coin={coin} key={coin.id}/>))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    coins: state.coins
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {fetchCoins: fetchCoins},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);
