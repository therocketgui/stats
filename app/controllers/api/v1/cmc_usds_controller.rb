class Api::V1::CmcUsdsController < ActionController::Base
  def index
    coins = CmcUsd.all
    render json: coins
  end

  def show
    coin = CmcUsd.where(coin_id: params[:id])
    render json: coin
  end

end
