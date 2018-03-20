import React, { Component } from 'react';
import { Card, List, Avatar } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import github_logo from '../images/github.svg';
import reddit_logo from '../images/reddit.svg';
import twitter_logo from '../images/twitter.svg';
import telegram_logo from '../images/telegram.svg';
import bitcointalk_logo from '../images/bitcointalk.svg';
import explorer_logo from '../images/explorer.svg';
import coin_logo from '../images/coin.svg';
import mineable_logo from '../images/mineable.svg';
import token_logo from '../images/token.svg';
import website_logo from '../images/website.svg';
import slack_logo from '../images/slack.svg';

import { createMyCoin, deleteMyCoin } from '../actions';

import { Checkbox } from 'antd';


class Coin extends Component{
  constructor(props){
    super(props);

    let my_coins = []
    this.props.mycoins.map((mycoin) => {my_coins.push(mycoin.coin_id)})
    if (my_coins.includes(this.props.coin.id)){
      this.state = {checked: true};
    }else{
      this.state = {checked: false};
    }

  }
  componentDidMount(){

  }
  getTypeList(coin){
    let type_list = [];
    if(coin.type_name && coin.type_name == 'Coin'){type_list.push({'logo': coin_logo })};
    if(coin.type_name && coin.type_name == 'Token'){type_list.push({'logo': token_logo })};
    if(coin.type_attr){type_list.push({'logo': mineable_logo })};

    return type_list.map((type) => {
      return (
        <div className="elem">
          <img src={type.logo} key={type.logo} alt=""/>
        </div>
        );
    });
  }
  getSocialList(coin){
    let social_list = [];
    if(coin.website){social_list.push({'site': coin.website, 'logo': website_logo })};
    if(coin.github){social_list.push({'site': coin.github, 'logo': github_logo })};
    if(coin.reddit){social_list.push({'site': coin.reddit, 'logo': reddit_logo })};
    if(coin.twitter){social_list.push({'site': coin.twitter, 'logo': twitter_logo })};
    if(coin.telegram){social_list.push({'site': coin.telegram, 'logo': telegram_logo })};
    if(coin.slack){social_list.push({'site': coin.slack, 'logo': slack_logo })};
    if(coin.bitcointalk){social_list.push({'site': coin.bitcointalk, 'logo': bitcointalk_logo })};
    if(coin.explorer){social_list.push({'site': coin.explorer, 'logo': explorer_logo })};

    return social_list.map((social) => {
      return (
        <div className="elem">
          <a href={social.site} ><img src={social.logo} alt=""/></a>
        </div>
        );
    });
  }

  onChange = (e) => {
    // TODO DELETE IF CHECKED = FALSE
    if (e.target.checked == true){this.props.createMyCoin(this.props.currentUser, this.props.coin.id)
    }else{
      const my_coin = this.props.mycoins.find(mycoin => (mycoin.coin_id === this.props.coin.id))
      this.props.deleteMyCoin(this.props.currentUser, my_coin.id)
    }

    this.setState({
      checked: e.target.checked,
    });
  }
  render(){
    return(
        <tr>
            <td className="coin-checkbox">
              <Checkbox checked={this.state.checked} onChange={this.onChange} />
            </td>
            <td>
              <Link to={`/coins/${this.props.coin.coin_id}`} key={this.props.coin.id}>
                <div className="row-box row-box-1">
                  <div className="elem">{this.props.coin.name}</div>
                </div>
              </Link>
            </td>
            <td>
              <div className="row-box row-box-2">
                {this.getTypeList(this.props.coin)}
                {this.getSocialList(this.props.coin)}
              </div>
            </td>
        </tr>
    );
  }
}

function mapStateToProps(state){
  return{
    currentUser: state.currentUser,
    mycoins: state.mycoins
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {createMyCoin: createMyCoin,
      deleteMyCoin:deleteMyCoin},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Coin);
