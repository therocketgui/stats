class Api::V1::MarketsController < ActionController::Base

  def index
    coins = Market.all
    render json: coins
  end

end
