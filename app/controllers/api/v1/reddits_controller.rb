class Api::V1::RedditsController < ActionController::Base

  def index
    coins = Reddit.all
    render json: coins
  end

  def show_subscribers
    # coin = Reddit.where(coin_id: params[:id])
    coin = Reddit.where(["coin_id = ? and type_name = ?", params[:id], "reddit_subscribers"])
    render json: coin
  end

  def show_active
    # coin = Reddit.where(coin_id: params[:id])
    coin = Reddit.where(["coin_id = ? and type_name = ?", params[:id], "reddit_active_accounts"])
    render json: coin
  end

end
