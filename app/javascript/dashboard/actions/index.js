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

export function fetchCoinsMe(user_id){
  return fetch(`/api/v1/coins/me/${user_id}`)
    .then(response => response.json())
    .then((data) =>{
      return{
        type: 'FETCH_COINSME',
        payload: data
      };
    });
}

export function searchCoins(search){
  return fetch(`/api/v1/coins/search/${search}`)
    .then(response => response.json())
    .then((data) =>{
      return{
        type: 'SEARCH_COINS_ME',
        payload: data
      };
    });
}

export function searchCoinsMe(user_id, search){
  return fetch(`/api/v1/coins/search/${user_id}/${search}`)
    .then(response => response.json())
    .then((data) =>{
      return{
        type: 'SEARCH_COINS',
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

export function fetchPriceBtc(coin_id){
  return fetch(`/api/v1/cmc_raws/price_btc/${coin_id}`)
    .then(response => response.json())
    .then((data) =>{
      return{
        type: 'FETCH_PRICE_BTC',
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

export function fetchPriceUsd(coin_id){
  return fetch(`/api/v1/cmc_usds/price_usd/${coin_id}`)
    .then(response => response.json())
    .then((data) =>{
      return{
        type: 'FETCH_PRICE_USD',
        payload: data
      };
    });
}
export function fetchH24Volume(coin_id){
  return fetch(`/api/v1/cmc_usds/h24_volume_usd/${coin_id}`)
    .then(response => response.json())
    .then((data) =>{
      return{
        type: 'FETCH_H24_VOLUME',
        payload: data
      };
    });
}
export function fetchMarketCap(coin_id){
  return fetch(`/api/v1/cmc_usds/market_cap_usd/${coin_id}`)
    .then(response => response.json())
    .then((data) =>{
      return{
        type: 'FETCH_MARKET_CAP',
        payload: data
      };
    });
}

export function fetchRedditSubscribers(coin_id){
  return fetch(`/api/v1/reddits/subscribers/${coin_id}`)
    .then(response => response.json())
    .then((data) =>{
      return{
        type: 'FETCH_REDDIT_SUBSCRIBERS',
        payload: data
      };
    });
}
export function fetchRedditActive(coin_id){
  return fetch(`/api/v1/reddits/active/${coin_id}`)
    .then(response => response.json())
    .then((data) =>{
      return{
        type: 'FETCH_REDDIT_ACTIVE',
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
  return fetch(`/api/v1/telegram_members/${coin_id}`)
    .then(response => response.json())
    .then((data) =>{
      return{
        type: 'FETCH_TELEGRAM_MEMBERS',
        payload: data
      };
    });
}

export function fetchMyCoins(user_id) {
  return fetch(`/api/v1/my_coins/${user_id}`)
    .then(response => response.json())
    .then((data) =>{
      return{
        type: 'FETCH_MYCOINS',
        payload: data
      };
    });
}

export function createMyCoin(user_id, coin_id) {
  return fetch(`/api/v1/my_coins/create/${user_id}/${coin_id}`)
    .then(response => response.json())
    .then((data) =>{
      return{
        type: 'CREATE_MYCOIN',
        payload: data
      };
    });
}

export function deleteMyCoin(user_id, id) {
  return fetch(`/api/v1/my_coins/delete/${user_id}/${id}`)
    .then(response => response.json())
    .then((data) =>{
      return{
        type: 'DELETE_MYCOIN',
        payload: data
      };
    });
}
