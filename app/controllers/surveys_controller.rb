  class SurveysController < ApplicationController
    before_action :ensure_user_not_logged_in
  
    def index
      render
    end

    def new
      @survey = Survey.new
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

    private

    def survey_params
      params.require(:survey).permit(:name, :user_id)
    end
  end