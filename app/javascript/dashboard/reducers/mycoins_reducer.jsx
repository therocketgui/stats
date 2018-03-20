export default function(state = [], action){
  switch(action.type){
    case 'FETCH_MYCOINS':
      return action.payload;
    case 'CREATE_MYCOIN':
      return action.payload;
    case 'DELETE_MYCOIN':
      return action.payload;
    default:
      return state;
  }
}
