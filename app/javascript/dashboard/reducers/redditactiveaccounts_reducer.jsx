export default function(state = [], action){
  switch(action.type){
    case 'FETCH_REDDIT_ACTIVE':
      return action.payload;
    default:
      return state;
  }
}
