class ApplicationController < ActionController::Base
  helper_method :ensure_user_logged_in, :logged_in?, :current_user, :not_found, :render_404

  private
  def ensure_user_not_logged_in
    unless logged_in?
      respond_to do |format|
        format.html do
          redirect_to new_sessions_path
        end
        format.json { render status: :unauthorized, json: { error: "You do not have access." } }
      end
    end
  end

  def logged_in?
    current_user.present?
  end

  def current_user
    if session[:user_id]
      @current_user ||= User.find(session[:user_id])
    end
  end

  def ensure_user_logged_in
    if logged_in?
      return redirect_to surveys_path
    end
  end

  def not_found
    raise ActionController::RoutingError.new('Not Found')
  rescue
    render_404
  end

  def render_404
    render file: "#{Rails.root}/public/404", status: :not_found
  end
end