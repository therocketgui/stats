class Api::V1::RedditsController < ActionController::Base

  def index
    coins = Reddit.all
    render json: coins
  end

  def show
    # coin = Reddit.where(coin_id: params[:id])
    coin = Reddit.where(["coin_id = ? and type_name = ?", params[:id], "reddit_subscribers"])
    render json: coin
  end

end
