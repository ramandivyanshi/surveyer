  class QuizzesController < ApplicationController
    before_action :ensure_user_not_logged_in
  
    def index
      render
    end
  end