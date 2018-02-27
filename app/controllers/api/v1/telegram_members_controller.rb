class Api::V1::TelegramMembersController < ActionController::Base

  def show
    coin = TelegramMember.where(coin_id: params[:id])
    render json: coin
  end

end
