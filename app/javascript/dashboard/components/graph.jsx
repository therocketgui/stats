import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCoins } from '../actions';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

class Graph extends Component{
  render(){
    return(
      <LineChart width={550} height={350} data={this.props.data}>
        <Line type="monotone" dataKey="data" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="created_at" />
        <YAxis domain={['auto', 'auto']} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
      </LineChart>
    );
  }
}


export default Graph;
