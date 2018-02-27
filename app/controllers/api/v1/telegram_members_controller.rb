class Api::V1::TelegramMembersController < ActionController::Base
  def index
    coins = TelegramMember.all
    render json: coins
  end
  def show
    coin = TelegramMember.where(coin_id: params[:id])
    render json: coin
  end

end
