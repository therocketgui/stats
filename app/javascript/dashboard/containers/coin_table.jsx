import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

class CoinTable extends Component {
  getNumberFormat(value, prefix=null){
    if(value){return <NumberFormat value={value} displayType={'text'} thousandSeparator={true} prefix={prefix} />}else{return 'null'};
  }
  get24growth(value, value_24h){
    let h24growth = (((value/value_24h)*100) - 100).toFixed(2);
    if (h24growth > 0){return(<span className="positive">+{h24growth}%</span>);}else if(h24growth < 0){return(<span className="negative">{h24growth}%</span>);}else{return(<span className="neutral">{h24growth}%</span>)};
  }
  render(){
    console.log(this.props.row_list);
    return (
      <table>

        <thead>
          <tr>
            <th>Network</th>
            <th>Value</th>
            <th>24h</th>
          </tr>
        </thead>

        <tbody>

         {this.props.row_list.map((row) => {
          return(
            <tr>
              <td>
                <div className="row-box">
                  <div className="elem">
                    <a href={row.site} key={row.site} ><img className="data-logo" src={row.logo} alt=""/></a>
                  </div>
                  <div className="elem">
                    <p>{row.name}</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="row-box">
                  <div className="elem">
                    <p>{this.getNumberFormat(row.value, row.numberFormat)}</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="row-box">
                  <div className="elem">
                    <p>{this.get24growth(row.value, row.value_24h)}</p>
                  </div>
                </div>
              </td>
            </tr>
            )
          })}

        </tbody>
      </table>
    );
  }
}

export default CoinTable;
