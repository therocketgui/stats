class Api::V1::CmcRawsController < ActionController::Base
  def index
    coins = CmcRaw.all
    render json: coins
  end

  def show
    coin = CmcRaw.where(coin_id: params[:id])
    render json: coin
  end

end
