import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCoin, fetchCmcRaws, fetchCmcUsds, fetchReddits, fetchTwitterFollowers, fetchTwitterTweets, fetchTelegramMembers } from '../actions';
import Graph from '../components/graph';
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

class CoinsShow extends Component{
  componentWillMount(){
    if (!this.props.coin){
      this.props.fetchCoin(this.props.match.params.id);
    };
    this.props.fetchReddits(this.props.match.params.id);
    this.props.fetchTelegramMembers(this.props.match.params.id);
  }
  getSocialList(coin){
    let social_list = [];
    if(coin.twitter){social_list.push({'name': 'twitter followers', 'site': coin.twitter, 'logo': twitter_logo })};
    if(coin.telegram){social_list.push({'name': 'telegram members', 'site': coin.telegram, 'logo': telegram_logo })};
    if(coin.reddit){social_list.push({'name': 'reddit subscribers', 'site': coin.reddit, 'logo': reddit_logo })};

    return social_list.map((social) => {
      return (
        <tr>
          <td>
            <div className="row-box">
              <div className="elem">
                <a href={social.site} key={social.site} ><img src={social.logo} alt=""/></a>
              </div>
              <div className="elems">
                <p>{social.name}</p>
              </div>
            </div>
          </td>
        </tr>
        );
    });
  }
  render(){
    if (!this.props.coin){
      return <p>Loading...</p>;
    }
    return(
      <div className="app app-show">
        <div className="app-show-left">
          <table>
            <thead>
              <tr>
                <th>Network</th>
              </tr>
            </thead>
            <tbody>
              {this.getSocialList(this.props.coin)}
            </tbody>
          </table>
        </div>
        <div className="app-show-right">
          <div className="graph-box">
            The Graph
          </div>
        </div>
      </div>
      );
  }
}

function mapStateToProps(state, ownProps){
  const idFromUrl = ownProps.match.params.id;
  const coin = state.coins.find(p => p.coin_id === idFromUrl);
  return {
    coin: coin,
    reddits: state.reddits,
    telegrammembers: state.telegrammembers,
    twittertweets: state.twittertweets,
    twitterfollowers: state.twitterfollowers
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { fetchCoin: fetchCoin,
      fetchReddits: fetchReddits,
      fetchTelegramMembers: fetchTelegramMembers,
      fetchTwitterTweets: fetchTwitterTweets,
      fetchTwitterFollowers: fetchTwitterFollowers }
    , dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CoinsShow);
