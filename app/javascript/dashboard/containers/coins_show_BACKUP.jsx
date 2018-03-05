// import React, { Component } from 'react';

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { fetchCoin } from '../actions';

// class CoinsShow extends Component {
//   componentWillMount(){
//     this.props.fetchCoin(this.props.match.params.id);
//     console.log(this.props.selectedCoin);
//   }
//   render(){
//     if (!this.props.car){
//       return <p>Loading...</p>;
//     }
//     return (
//       <div className="app">
//         <p>{this.props.match.params.id}</p>
//         <p>{this.props.selectedCoin.name}</p>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state){
//   return{
//     selectedCoin: state.selectedCoin
//     };
// }

// function mapDispatchToProps(dispatch){
//   return bindActionCreators(
//     {fetchCoin: fetchCoin},
//     dispatch
//     );
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CoinsShow);
