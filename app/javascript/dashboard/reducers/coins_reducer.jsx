export default function(state = [], action){
  switch(action.type){
    case 'FETCH_COINS':
      return action.payload;
    case 'FETCH_COINSME':
      return action.payload;
    case 'FETCH_COIN':
      return action.payload;
    case 'SEARCH_COINS':
      return action.payload;
    case 'SEARCH_COINS_ME':
      return action.payload;
    default:
      return state;
  }
}
