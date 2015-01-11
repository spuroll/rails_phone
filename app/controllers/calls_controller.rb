class CallsController < ApplicationController
  def index
    @calls = Call.all
    @sorted_calls = @calls.sort_by { |num| -num[:id] }
  end

  def show
    @call = Call.find(params[:id])
  end
  
  def create
    @call = Call.new(call_params)
    @call.save
    redirect_to(:action => 'index')
  end
  
  private
  
  def call_params 
    params.require(:call).permit(:number, :duration, :note)
  end
  
end
