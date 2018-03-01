export default function(state = [], action){
  switch(action.type){
    case 'FETCH_COINS':
      return action.payload;
    case 'FETCH_COIN':
      return [ action.payload ]
    default:
      return state;
  }
}
