class CallsController < ApplicationController
  def index
    @calls = Call.all
    @sorted_calls = @calls.sort_by { |num| -num[:id] }
  end

  def show
    @call = Call.find(params[:id])
  end
end
