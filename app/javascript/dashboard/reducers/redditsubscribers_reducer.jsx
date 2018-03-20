export default function(state = [], action){
  switch(action.type){
    case 'FETCH_REDDIT_SUBSCRIBERS':
      return action.payload;
    default:
      return state;
  }
}
