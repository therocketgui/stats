import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NumberFormat from 'react-number-format';
import CoinTable from '../containers/coin_table';
import CoinTableAll from '../containers/coin_table_all';
import EventList from '../containers/event_list';

import { fetchPriceUsd, fetchH24Volume, fetchMarketCap, fetchPriceBtc, fetchCoin, fetchCmcRaws, fetchCmcUsds, fetchRedditSubscribers, fetchRedditActive, fetchTwitterFollowers, fetchTwitterTweets, fetchTelegramMembers } from '../actions';
import Graph from '../components/graph';
import NavBar from '../containers/navbar';
import SubNavBar from '../containers/sub_navbar';
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
  constructor(props){
    super(props);
    this.state = {graph: []};
  }

  componentDidMount(){
    this.props.fetchCoin(this.props.match.params.id);

    this.props.fetchRedditSubscribers(this.props.match.params.id);
    this.props.fetchRedditActive(this.props.match.params.id);
    this.props.fetchTwitterTweets(this.props.match.params.id);
    this.props.fetchTwitterFollowers(this.props.match.params.id);
    this.props.fetchTelegramMembers(this.props.match.params.id);
    this.props.fetchPriceBtc(this.props.match.params.id);
    this.props.fetchPriceUsd(this.props.match.params.id);
    this.props.fetchH24Volume(this.props.match.params.id);
    this.props.fetchMarketCap(this.props.match.params.id);

  }
  get24growth(value, value_24h){
    let h24growth = (((value/value_24h)*100) - 100).toFixed(2);
    if (h24growth > 0){return(<span className="positive">+{h24growth}%</span>);}else if(h24growth < 0){return(<span className="negative">{h24growth}%</span>);}else{return(<span className="neutral">{h24growth}%</span>)};
  }
  getNumberFormat(value, prefix=null){
    if(value){return <NumberFormat value={value} displayType={'text'} thousandSeparator={true} prefix={prefix} />}else{return 'null'};
  }
  changeGraph(data){
    // console.log(data);
    this.setState({
        graph: data
    });
  }
  generateTradeList(){
    let trade_list = [];
    trade_list.push({'url': 'price/usd', 'name': 'Price Usd', 'numberFormat': '$', 'logo': coin_logo, 'value': this.props.coin.price_usd, 'value_24h': this.props.coin.price_usd_24h, 'data': this.props.priceusd});
    trade_list.push({'url': 'price/btc', 'name': 'Price BTC', 'numberFormat': 'BTC', 'logo': coin_logo, 'value': this.props.coin.price_btc, 'value_24h': this.props.coin.price_btc_24h, 'data': this.props.pricebtc});
    trade_list.push({'url': 'volume/usd', 'name': '24h Volume', 'numberFormat': '$', 'logo': coin_logo, 'value': this.props.coin.h24_volume_usd, 'value_24h': this.props.coin.h24_volume_usd_24h, 'data': this.props.h24volume});
    trade_list.push({'url': 'marketcap/usd','name': 'Market Cap', 'numberFormat': '$', 'logo': coin_logo, 'value': this.props.coin.market_cap_usd, 'value_24h': this.props.coin.market_cap_usd_24h, 'data': this.props.marketcap});

    return trade_list;
  }
  generateSocialList(){
    let social_list = [];
    if(this.props.coin.twitter){social_list.push({'url': 'twitter/followers', 'numberFormat': '', 'name': 'Followers', 'site': this.props.coin.twitter, 'value': this.props.coin.twitter_followers, 'value_24h': this.props.coin.twitter_followers_24h, 'logo': twitter_logo, 'data': this.props.twitterfollowers })};
    if(this.props.coin.twitter){social_list.push({'url': 'twitter/tweets', 'numberFormat': '', 'name': 'Tweets', 'site': this.props.coin.twitter, 'value': this.props.coin.twitter_tweets, 'value_24h': this.props.coin.twitter_tweets_24h, 'logo': twitter_logo, 'data': this.props.twittertweets })};
    if(this.props.coin.telegram){social_list.push({'url': 'telegram/members', 'numberFormat': '', 'name': 'Members', 'site': this.props.coin.telegram, 'value': this.props.coin.telegram_members, 'value_24h': this.props.coin.telegram_members_24h, 'logo': telegram_logo, 'data': this.props.telegrammembers })};
    if(this.props.coin.reddit){social_list.push({'url': 'reddit/subscribers', 'numberFormat': '', 'name': 'Subscribers', 'site': this.props.coin.reddit, 'value': this.props.coin.reddit_subscribers, 'value_24h': this.props.coin.reddit_subscribers_24h, 'logo': reddit_logo, 'data': this.props.redditsubscribers })};
    if(this.props.coin.reddit){social_list.push({'url': 'reddit/active', 'numberFormat': '', 'name': 'Active', 'site': this.props.coin.reddit, 'value': this.props.coin.reddit_active_accounts, 'value_24h': this.props.coin.reddit_active_accounts_24h, 'logo': reddit_logo, 'data': this.props.redditactiveaccounts })};

    return social_list;

  }
  getAllDataPoints = () =>{
    let datapoints = this.generateTradeList().concat(this.generateSocialList());

    return datapoints.map((datapoint) => {
      return (
        <tr onClick={() => this.changeGraph(datapoint.data)} key={datapoint.name}>
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
                <p>{this.getNumberFormat(datapoint.value)}</p>
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
        );
    });
  }
  render(){
    if (!this.props.coin){
      return <p>Loading...</p>;
    }
    const social_list = this.generateSocialList();
    const trade_list = this.generateTradeList();
    const all_data_list = social_list.concat(trade_list);


    if (this.props.match.params.type == 'data'){
      return(
        <div>
          <NavBar currentUser={this.props.currentUser} />
          <SubNavBar coin={this.props.coin} />
          <div className="data-container">
            <div className="data data-list">
              <div>
                <CoinTableAll datapoints={all_data_list} coin={this.props.coin} />
              </div>
            </div>
            <div className="data data-graph">
              <div className="graph">
                <Graph data={this.state.graph} />
              </div>
            </div>
          </div>
        </div>
        );

    }else if (this.props.match.params.type == 'events'){
      return(
        <div>
          <NavBar currentUser={this.props.currentUser} />
          <SubNavBar coin={this.props.coin} />
          <EventList />
        </div>
        );

    }else{
      return(
        <div>
          <NavBar currentUser={this.props.currentUser} />
          <SubNavBar coin={this.props.coin} />
          <div className="app app-show">
            <div className="row">
              <div className="app-show-left">
                <CoinTable row_list={trade_list} />
              </div>
              <div className="app-show-right">
                <CoinTable row_list={social_list} />
              </div>
            </div>
          </div>
        </div>
        );
    }
    }

}

function mapStateToProps(state, ownProps){
  const idFromUrl = ownProps.match.params.id;
  const coin = state.coins.find(p => p.coin_id == idFromUrl);
  // console.log(coin);
  // console.log(state.coins);
  return {
    coin: coin,
    currentUser: state.currentUser,
    redditsubscribers: state.redditsubscribers,
    redditactiveaccounts: state.redditactiveaccounts,
    telegrammembers: state.telegrammembers,
    twittertweets: state.twittertweets,
    twitterfollowers: state.twitterfollowers,
    cmcraws: state.cmcraws,
    cmcusds: state.cmcusds,
    pricebtc: state.pricebtc,
    priceusd: state.priceusd,
    h24volume: state.h24volume,
    marketcap: state.marketcap
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { fetchCoin,
      fetchRedditSubscribers: fetchRedditSubscribers,
      fetchRedditActive: fetchRedditActive,
      fetchTelegramMembers: fetchTelegramMembers,
      fetchTwitterTweets: fetchTwitterTweets,
      fetchTwitterFollowers: fetchTwitterFollowers,
      fetchCmcRaws: fetchCmcRaws,
      fetchCmcUsds: fetchCmcUsds,
      fetchPriceBtc: fetchPriceBtc,
      fetchPriceUsd: fetchPriceUsd,
      fetchH24Volume: fetchH24Volume,
      fetchMarketCap: fetchMarketCap },
      dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CoinsShow);
