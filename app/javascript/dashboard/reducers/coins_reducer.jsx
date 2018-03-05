export default function(state = [], action){
  switch(action.type){
    case 'FETCH_COINS':
      return action.payload;
    case 'FETCH_COIN':
      return [ action.payload ];
    case 'SEARCH_COINS':
      // console.log(action.coins);
      // if (action.search){ action.search = action.search.toLowerCase() };
      // function reddit(val){if(val.reddit){ return val.reddit.toLowerCase().includes(action.search.toLowerCase())}};
      // function telegram(val){if(val.telegram){ return val.telegram.toLowerCase().includes(action.search.toLowerCase())}};
      // function slack(val){if(val.slack){ return val.slack.toLowerCase().includes(action.search.toLowerCase())}};
      // function twitter(val){if(val.twitter){ return val.twitter.toLowerCase().includes(action.search.toLowerCase())}};
      // function explorer(val){if(val.explorer){ return val.explorer.toLowerCase().includes(action.search.toLowerCase())}};
      // function website(val){if(val.website){ return val.website.toLowerCase().includes(action.search.toLowerCase())}};
      // function bitcointalk(val){if(val.bitcointalk){ return val.bitcointalk.toLowerCase().includes(action.search.toLowerCase())}};

      return action.coins.filter((val) =>
        val.name.toLowerCase().includes(action.search.toLowerCase()) ||
        val.symbol.toLowerCase().includes(action.search.toLowerCase())
        // reddit(val) ||
        // telegram(val) ||
        // slack(val) ||
        // twitter(val) ||
        // explorer(val) ||
        // website(val) ||
        // bitcointalk(val)
        );

    default:
      return state;
  }
}
