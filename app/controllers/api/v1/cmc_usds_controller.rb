class Api::V1::CmcUsdsController < ActionController::Base

  def show
    coin = CmcUsd.where(coin_id: params[:id])
    render json: coin
  end

end
