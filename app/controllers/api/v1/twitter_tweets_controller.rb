class Api::V1::TwitterTweetsController < ActionController::Base
  def index
    coins = TwitterTweet.all
    render json: coins
  end
  def show
    coin = TwitterTweet.where(coin_id: params[:id])
    render json: coin
  end

end
