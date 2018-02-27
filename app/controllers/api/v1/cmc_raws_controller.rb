class Api::V1::CmcRawsController < ActionController::Base

  def show
    coin = CmcRaw.where(coin_id: params[:id])
    render json: coin
  end

end
