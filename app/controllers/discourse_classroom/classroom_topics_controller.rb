# frozen_string_literal: true
module ::DiscourseClassroom
  class ClassroomTopicsController < ::ApplicationController
    requires_plugin DiscourseClassroom::PLUGIN_NAME

    before_action :set_classroom_topic, only: %i[ show edit update destroy ]

    # GET /classroom_topics
    def index
      begin
        @classroom_topics = ClassroomTopic.includes(:videos).order(created_at: :asc).all
        render json: @classroom_topics, each_serializer: ClassroomTopicSerializer
      rescue => e
        logger.error "Error fetching classroom topics: #{e.message}"
        render json: { error: "Internal Server Error" }, status: 500
      end
    end 

    # GET /classroom_topics/1
    def show
    end

    # GET /classroom_topics/new
    def new
      @classroom_topic = ClassroomTopic.new
    end

    # GET /classroom_topics/1/edit
    def edit
    end

    # POST /classroom_topics
    def create
      @classroom_topic = ClassroomTopic.new(classroom_topic_params)

      if @classroom_topic.save
        #redirect_to @classroom_topic, notice: "Classroom topic was successfully created."
        render json: @classroom_topic, serializer: ClassroomTopicSerializer
      else
        render :new, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /classroom_topics/1
    def update
      if @classroom_topic.update(classroom_topic_params)
        redirect_to @classroom_topic, notice: "Classroom topic was successfully updated.", status: :see_other
      else
        render :edit, status: :unprocessable_entity
      end
    end

    # DELETE /classroom_topics/1
    def destroy
      @classroom_topic.destroy!
      redirect_to classroom_topics_url, notice: "Classroom topic was successfully destroyed.", status: :see_other
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_classroom_topic
        @classroom_topic = ClassroomTopic.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def classroom_topic_params
        params.require(:classroom_topic).permit(:title, :order_number)
      end
  end
end
