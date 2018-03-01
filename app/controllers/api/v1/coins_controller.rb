class Api::V1::CoinsController < ActionController::Base

  def index
    coins = Coin.all
    coins.each do |coin|
      @raw_data = CmcRaw.where(["coin_id = ? and type_name = ?", coin.coin_id, 'price_btc'])
      coin.attributes[:price_btc] = raw_data.coin_id
    end
    render json: coins
  end

  def show
    coin = Coin.find(params[:id])
    render json: coin
  end

end
