export default function(state = [], action){
  switch(action.type){
    case 'FETCH_CMC_USDS':
      return action.payload;
    default:
      return state;
  }
}
