class Api::V1::TwitterFollowersController < ActionController::Base
  def index
    coins = TwitterFollower.all
    render json: coins
  end
  def show
    coin = TwitterFollower.where(coin_id: params[:id])
    render json: coin
  end

end
