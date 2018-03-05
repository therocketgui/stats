import React, { Component } from 'react';
import { Card, List, Avatar } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCoins } from '../actions';
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


class Coin extends Component{
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
    if(coin.website){social_list.push({'site': coin.github, 'logo': website_logo })};
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
          <a href={social.site} key={social.site} ><img src={social.logo} alt=""/></a>
        </div>
        );
    });
  }
  render(){
    return(
        <tr>
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


export default Coin;
