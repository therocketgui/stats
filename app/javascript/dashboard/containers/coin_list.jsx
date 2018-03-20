  import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCoins, searchCoins, searchCoinsMe, fetchMyCoins, fetchCoinsMe } from '../actions';
import Coin from './coin';
import { Link } from 'react-router-dom';
import SearchBar from '../containers/search_bar';

class CoinList extends Component{
  constructor(props) {
    super(props);
    this.state = {coinsearch: []};
  }
  componentWillMount(){
    if (this.props.userid) {
      this.props.fetchCoinsMe(this.props.userid);
    }else{
      this.props.fetchCoins();
    }
    this.props.fetchMyCoins(this.props.currentUser);
  }

  search = (query) => {
     // SEARCH HANDLER
     if(query){
      if(this.props.userid){
        this.props.searchCoinsMe(this.props.userid, query);
      }else{
        this.props.searchCoins(query);
      }
     }else{
      if(this.props.userid){
        this.props.fetchCoins(this.props.userid, query);
      }else{
        this.props.fetchCoins();
      }
     }
     console.log(query);
  };
  render(){
    return(
      <div>
        <SearchBar search={this.search} />

        <table className="coin-list">
          <thead>
            <tr>
              <th>Coin</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.coins.map((coin) => <Coin coin={coin} key={coin.id} />)}
          </tbody>
        </table>

      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    coins: state.coins,
    mycoins: state.mycoins,
    currentUser: state.currentUser
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {fetchCoins: fetchCoins,
     fetchCoinsMe: fetchCoinsMe,
     fetchMyCoins: fetchMyCoins,
     searchCoins: searchCoins,
     searchCoinsMe: searchCoinsMe},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);
