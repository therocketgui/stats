export default function(state = [], action){
  switch(action.type){
    case 'FETCH_CMC_RAWS':
      return action.payload;
    default:
      return state;
  }
}
