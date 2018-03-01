// TODO: add and export your own actions

export function fetchCoins(){
  return fetch(`/api/v1/coins`)
    .then(response => response.json())
    .then((data) =>{
      return{
        type: 'FETCH_COINS',
        payload: data
      };
    });
}

export function fetchCoin(coin_id){
  return fetch(`/api/v1/coins/${coin_id}`)
    .then(response => response.json())
    .then((data) =>{
      return{
        type: 'FETCH_COIN',
        payload: data
      };
    });
}

export function fetchCmcRaws(coin_id){
  return fetch(`/api/v1/cmc_raws/${coin_id}`)
    .then(response => response.json())
    .then((data) =>{
      return{
        type: 'FETCH_CMC_RAWS',
        payload: data
      };
    });
}

export function fetchCmcUsds(coin_id){
  return fetch(`/api/v1/cmc_usds/${coin_id}`)
    .then(response => response.json())
    .then((data) =>{
      return{
        type: 'FETCH_CMC_USDS',
        payload: data
      };
    });
}

export function fetchReddits(coin_id){
  return fetch(`/api/v1/reddits/${coin_id}`)
    .then(response => response.json())
    .then((data) =>{
      return{
        type: 'FETCH_REDDITS',
        payload: data
      };
    });
}

export function fetchTwitterFollowers(coin_id){
  return fetch(`/api/v1/twitter_followers/${coin_id}`)
    .then(response => response.json())
    .then((data) =>{
      return{
        type: 'FETCH_TWITTER_FOLLOWERS',
        payload: data
      };
    });
}

export function fetchTwitterTweets(coin_id){
  return fetch(`/api/v1/twitter_tweets/${coin_id}`)
    .then(response => response.json())
    .then((data) =>{
      return{
        type: 'FETCH_TWITTER_TWEETS',
        payload: data
      };
    });
}

export function fetchTelegramMembers(coin_id){
  return fetch(`/api/v1/twitter_members/${coin_id}`)
    .then(response => response.json())
    .then((data) =>{
      return{
        type: 'FETCH_TELEGRAM_MEMBERS',
        payload: data
      };
    });
}
