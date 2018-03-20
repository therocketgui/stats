export default function(state = [], action){
  switch(action.type){
    case 'FETCH_PRICE_USD':
      return action.payload;
    default:
      return state;
  }
}
