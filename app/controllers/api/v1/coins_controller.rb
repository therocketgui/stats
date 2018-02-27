class Api::V1::CoinsController < ActionController::Base

  def index
    coins = Coin.all
    render json: coins
  end

  def show
    coin = Coin.find(params[:id])
    render json: coin
  end

end
