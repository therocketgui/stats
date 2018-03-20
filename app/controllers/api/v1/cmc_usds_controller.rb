class Api::V1::CmcUsdsController < ActionController::Base
  def index
    coins = CmcUsd.all
    render json: coins
  end

  def show
    coin = CmcUsd.where(coin_id: params[:id])
    render json: coin
  end

  def price_usd
    coin = CmcUsd.where(["coin_id = ? and type_name = ?", params[:id], "price_usd"])
    render json: coin
  end

  def h24_volume_usd
    coin = CmcUsd.where(["coin_id = ? and type_name = ?", params[:id], "24h_volume_usd"])
    render json: coin
  end

  def market_cap_usd
    coin = CmcUsd.where(["coin_id = ? and type_name = ?", params[:id], "market_cap_usd"])
    render json: coin
  end

end
