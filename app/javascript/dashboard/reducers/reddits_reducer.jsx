export default function(state = [], action){
  switch(action.type){
    case 'FETCH_REDDITS':
      return action.payload;
    default:
      return state;
  }
}
