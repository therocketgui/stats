import React, { Component } from 'react';
import { Card, List, Avatar } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCoins } from '../actions';
import { Link } from 'react-router-dom';

class Coin extends Component{
  componentDidMount(){

  }
  render(){
    return(
      <li>
        <Link to={`/coins/${this.props.coin.coin_id}`}>
          <Card title={this.props.coin.name} extra={<a href="#">More</a>} style={{ width: 300 }}>
            <p>{this.props.coin.symbol}</p>
            <p>{this.props.coin.type_name}</p>
            <p>{this.props.coin.type_attr}</p>
            <p>{this.props.coin.website}</p>
            <p>{this.props.coin.github}</p>
            <p>{this.props.coin.reddit}</p>
            <p>{this.props.coin.twitter}</p>
            <p>{this.props.coin.telegram}</p>
            <p>{this.props.coin.slack}</p>
            <p>{this.props.coin.bitcointalk}</p>
            <p>{this.props.coin.explorer}</p>
          </Card>
        </Link>
      </li>
    );
  }
}


export default Coin;
