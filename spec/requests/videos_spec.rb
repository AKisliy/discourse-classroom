# frozen_string_literal: true
require 'rails_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to test the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator. If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails. There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.

RSpec.describe "/videos", type: :request do
  
  # This should return the minimal set of attributes required to create a valid
  # Video. As you add validations to Video, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  describe "GET /index" do
    it "renders a successful response" do
      Video.create! valid_attributes
      get videos_url
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      video = Video.create! valid_attributes
      get video_url(video)
      expect(response).to be_successful
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_video_url
      expect(response).to be_successful
    end
  end

  describe "GET /edit" do
    it "renders a successful response" do
      video = Video.create! valid_attributes
      get edit_video_url(video)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Video" do
        expect {
          post videos_url, params: { video: valid_attributes }
        }.to change(Video, :count).by(1)
      end

      it "redirects to the created video" do
        post videos_url, params: { video: valid_attributes }
        expect(response).to redirect_to(video_url(Video.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Video" do
        expect {
          post videos_url, params: { video: invalid_attributes }
        }.not_to change(Video, :count)
      end

    
      it "renders a response with 422 status (i.e. to display the 'new' template)" do
        post videos_url, params: { video: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested video" do
        video = Video.create! valid_attributes
        patch video_url(video), params: { video: new_attributes }
        video.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the video" do
        video = Video.create! valid_attributes
        patch video_url(video), params: { video: new_attributes }
        video.reload
        expect(response).to redirect_to(video_url(video))
      end
    end

    context "with invalid parameters" do
    
      it "renders a response with 422 status (i.e. to display the 'edit' template)" do
        video = Video.create! valid_attributes
        patch video_url(video), params: { video: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested video" do
      video = Video.create! valid_attributes
      expect {
        delete video_url(video)
      }.to change(Video, :count).by(-1)
    end

    it "redirects to the videos list" do
      video = Video.create! valid_attributes
      delete video_url(video)
      expect(response).to redirect_to(videos_url)
    end
  end
end
