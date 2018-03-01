export default function(state = [], action){
  switch(action.type){
    case 'FETCH_TELEGRAM_MEMBERS':
      return action.payload;
    default:
      return state;
  }
}
