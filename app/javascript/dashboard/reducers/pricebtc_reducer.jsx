export default function(state = [], action){
  switch(action.type){
    case 'FETCH_PRICE_BTC':
      return action.payload;
    default:
      return state;
  }
}
