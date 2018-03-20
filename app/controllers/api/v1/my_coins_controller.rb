class Api::V1::MyCoinsController < ActionController::Base
  def show
    mycoins = MyCoin.where(user_id: params[:id])

    render json: mycoins
  end

  def create
    coin = MyCoin.create(mycoin_params)

    mycoins = MyCoin.where(user_id: params[:user_id])

    render json: mycoins
  end

  def destroy
    MyCoin.destroy(params[:id])

    mycoins = MyCoin.where(user_id: params[:user_id])

    render json: mycoins
  end

  private

  def mycoin_params
    params.permit(:coin_id, :user_id)
  end

end
