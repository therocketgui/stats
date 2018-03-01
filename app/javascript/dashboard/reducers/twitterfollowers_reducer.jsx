export default function(state = [], action){
  switch(action.type){
    case 'FETCH_TWITTER_FOLLOWERS':
      return action.payload;
    default:
      return state;
  }
}
