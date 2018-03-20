import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SubNavBar extends Component {
  render(){
    return (
      <div className="subnav">
      <div className="sub-nav">
        <div className="FlexGrid SubMainNavigation-inner">
          <div className="FlexItem">
            <div>{this.props.coin.symbol} : {this.props.coin.name}</div>
          </div>
          <div className="FlexItem">
            <div className="SubNavigation-middle">
              <div className="FlexGrid">
                <div className="FlexItem">
                  <div>
                    <ul className="Tabs">
                      <li className="Tabs-tab">
                        <Link to={`/coins/${this.props.coin.coin_id}`}>Main</Link>
                      </li>
                      <li className="Tabs-tab">
                        <Link to={`/coins/${this.props.coin.coin_id}/data`}>Data</Link>
                      </li>
                      <li className="Tabs-tab">
                        <Link to={`/coins/${this.props.coin.coin_id}/events`}>Events</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="FlexItem">

          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default SubNavBar;
