# frozen_string_literal: true
module DiscourseClassroom
  class VideosController < ApplicationController
    requires_plugin DiscourseClassroom::PLUGIN_NAME

    before_action :set_video, only: %i[ show edit update destroy ]

    # GET /videos
    def index
      @videos = Video.all
      render json: @videos, each_serializer: VideoSerializer
    end

    # GET /videos/1
    def show
    end

    # GET /videos/new
    def new
      @video = Video.new
    end

    # GET /videos/1/edit
    def edit
    end

    # POST /videos
    def create
      begin
        @video = Video.new(video_params)

        if @video.save
          render json: @video, serializer: VideoSerializer
        else
          render json: { errors: @video.errors.full_messages }
        end
      rescue 
        render json: { errors: @video.errors.full_messages }
        logger.error "Error fetching creating video: #{e.message}"
      end
    end

    # PATCH/PUT /videos/1
    def update
      if @video.update(video_params)
        render json: @video, serializer: VideoSerializer
      else
        render :edit, status: :unprocessable_entity
      end
    end

    # DELETE /videos/1
    def destroy
      @video.destroy!
      render json: success_json
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_video
        @video = Video.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def video_params
        params.require(:video).permit(:classroom_topic_id, :link, :name, :description, :transcript, :notes)
      end
  end
end
