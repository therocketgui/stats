import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCoins } from '../actions';

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

class Graph extends Component{
  render(){
    return(
      <LineChart width={600} height={300} data={this.props.data}>
        <Line type="monotone" dataKey="data" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="created_at" />
        <YAxis />
      </LineChart>
    );
  }
}


export default Graph;
