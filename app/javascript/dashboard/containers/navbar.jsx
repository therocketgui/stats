import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'antd';
import coin_logo from '../images/coin.svg';

import { fetchCoins, fetchCoinsMe } from '../actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class NavBar extends Component {
  getCoins = () =>{
    this.props.fetchCoins()
  }
  getCoinsMe = () =>{
    this.props.fetchCoinsMe(this.props.currentUser)
  }
  render(){
    const menu = (
      <Menu>
        <Menu.Item>
          <a rel="noopener noreferrer" href="#">  Profile  </a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer" href="#">  Settings  </a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer" data-method="delete" href="/users/sign_out">  Logout  </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="nav">
      <div className="main-nav">
        <div className="FlexGrid MainNavigation-inner">
          <div className="FlexItem">

          </div>
          <div className="FlexItem">
            <div className="MainNavigation-middle">
              <div className="FlexGrid">
                <div className="FlexItem FlexLeft">
                  <Link to="/coins"><div className="MainNavigation-item" onClick={this.getCoins}>All Coins</div></Link>
                </div>
                <div className="FlexItem FlexLogo">
                  <img src={coin_logo} alt="" className="MainNavigation-logo"/>
                </div>
                <div className="FlexItem FlexRight">
                  <Link to={"/coins/me/"+this.props.currentUser}><div className="MainNavigation-item"  onClick={this.getCoinsMe} >My Coins</div></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="FlexItem">
            <div className="FlexAlignRight">
              <div className="ProfileLogo">
                <Dropdown overlay={menu}>
                  <a className="ant-dropdown-link" href="#">
                    <img src="http://via.placeholder.com/150x150" alt=""/><Icon type="down" />
                  </a>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {fetchCoins: fetchCoins,
     fetchCoinsMe: fetchCoinsMe},
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(NavBar);
