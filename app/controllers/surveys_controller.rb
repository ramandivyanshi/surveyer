class SurveysController < ApplicationController
  before_action :ensure_user_not_logged_in
  before_action :load_survey, only: [:show, :edit, :update, :destroy]

  def index
    @surveys = current_user.surveys
  end

  def new
    @survey = Survey.new
  end

  def show
    render
  end

  def create
    @survey = current_user.surveys.build(survey_params)
    if @survey.save
      flash[:success] = "Succesfully created the survey."
      render status: :ok, json: { notice: "Succesfully created the survey." }
    else 
      @survey.errors.full_messages.each do |message|
        flash.now[:danger] ||= message
      end
      render status: :unprocessable_entity, json: { errors: @survey.errors.full_messages }
    end
  end

  def edit
    render
  end

  def update
    if @survey.update(survey_params)
      flash[:success] = "Succesfully updated the survey name."
      render status: :ok, json: { notice: "Successfully updated survey name." }
    else
      render status: :unprocessable_entity, json:{ errors: @task.errors.full_messages }
    end
  end

  def destroy
    if @survey.destroy
      flash[:success] = "Succesfully deleted Survey."
      render status: :ok, json: { notice: "Successfully deleted survey." }
    else
      render status: :unprocessable_entity, json: { errors: @survey.errors.full_messages }
    end
  end

  private 
  def survey_params
    params.require(:survey).permit(:name, :user_id)
  end

  def load_survey
    @survey = Survey.find(params[:id]) rescue not_found
    rescue ActiveRecord::RecordNotFound => errors
      render json: {errors: errors}
  end
end