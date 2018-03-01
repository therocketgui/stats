class Api::V1::RedditsController < ActionController::Base

  def index
    coins = Reddit.all
    render json: coins
  end

  def show
    coin = Reddit.where(coin_id: params[:id])
    render json: coin
  end

end
