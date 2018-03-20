import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import history from '../history.js';

class CoinTableAll extends Component {
  getNumberFormat(value, prefix=null){
    if(value){return <NumberFormat value={value} displayType={'text'} thousandSeparator={true} prefix={prefix} />}else{return 'null'};
  }
  get24growth(value, value_24h){
    let h24growth = (((value/value_24h)*100) - 100).toFixed(2);
    if (h24growth > 0){return(<span className="positive">+{h24growth}%</span>);}else if(h24growth < 0){return(<span className="negative">{h24growth}%</span>);}else{return(<span className="neutral">{h24growth}%</span>)};
  }
  // changeGraph(data){
  //   // console.log(data);
  //   this.setState({
  //       graph: data
  //   });
  // }
  goToUrl(url){
    // const { history } = this.props;
    history.push(url);
  }
  render(){

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>24h</th>
            <th>7d</th>
          </tr>
        </thead>
        <tbody>
          {this.props.datapoints.map((datapoint) => {
          return (
            <tr onClick={() => this.goToUrl(`/coins/${this.props.coin.coin_id}/data/${datapoint.url}`)} key={datapoint.name}>

                <td>
                  <div className="row-box">
                    <div className="elem">
                      <a href={datapoint.site} key={datapoint.site} ><img className="data-logo" src={datapoint.logo} alt=""/></a>
                    </div>
                    <div className="elem">
                      <p>{datapoint.name}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="row-box">
                    <div className="elem">
                      <p>{this.getNumberFormat(datapoint.value, datapoint.numberFormat)}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="row-box">
                    <div className="elem">
                      {this.get24growth(datapoint.value, datapoint.value_24h)}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="row-box">
                    <div className="elem">

                    </div>
                  </div>
                </td>

            </tr>

            )
          })}
          <tr><td></td><td></td><td></td><td></td></tr>
          <tr><td></td><td></td><td></td><td></td></tr>
          <tr><td></td><td></td><td></td><td></td></tr>
          <tr><td></td><td></td><td></td><td></td></tr>
        </tbody>
      </table>
    );
  }
}

export default CoinTableAll;
