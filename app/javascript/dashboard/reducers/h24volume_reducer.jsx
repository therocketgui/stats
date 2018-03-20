export default function(state = [], action){
  switch(action.type){
    case 'FETCH_H24_VOLUME':
      return action.payload;
    default:
      return state;
  }
}
