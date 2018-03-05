import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCoins, searchCoins } from '../actions';
import Coin from './coin';
import { Link } from 'react-router-dom';
import SearchBar from '../containers/search_bar';

class CoinList extends Component{
  constructor(props) {
    super(props);
    this.state = {coinsearch: []};
  }
  componentWillMount(){
    this.props.fetchCoins();
  }
  componentDidUpdate(){
    if (this.state.coinsearch.length == 0){
      this.setState({
        coinsearch: this.props.coins
      });
      // console.log(this.state.coinsearch);
    }
  }
  search = (query) => {
     // SEARCH HANDLER
     this.props.searchCoins(this.state.coinsearch, query);
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
    coins: state.coins
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {fetchCoins: fetchCoins,
     searchCoins: searchCoins},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);
