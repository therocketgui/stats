export default function(state = [], action){
  switch(action.type){
    case 'FETCH_MARKET_CAP':
      return action.payload;
    default:
      return state;
  }
}
