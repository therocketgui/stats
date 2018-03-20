import React, { Component } from 'react';
import CoinList from './coin_list';
import NavBar from '../containers/navbar';
import { connect } from 'react-redux';

class CoinsIndex extends Component {
  get_coinList = () =>{
    if(this.props.match.params.userid){
      return <CoinList userid={this.props.match.params.userid} />
      console.log(this.props.match.params.userid)
    }else{
      return <CoinList />
    }
  }
  render(){
    return (
      <div>
        <div className="nav">
          <NavBar currentUser={this.props.currentUser} />
        </div>
        <div className="app app-index">
          {this.get_coinList()}
        </div>
      </div>

    );
  }
}

function mapStateToProps(state){
  return{
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, null)(CoinsIndex);
