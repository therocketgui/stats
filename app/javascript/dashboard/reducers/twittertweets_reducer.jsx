export default function(state = [], action){
  switch(action.type){
    case 'FETCH_TWITTER_TWEETS':
      return action.payload;
    default:
      return state;
  }
}
