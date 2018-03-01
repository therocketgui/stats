import React, { Component } from 'react';

import { Card } from 'antd';

class Coin extends Component{
  componentDidMount(){

  }
  render(){
    return(
      <li>
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
      </li>
    );
  }
}


export default Coin;
