# frozen_string_literal: true
require "rails_helper"

RSpec.describe ClassroomTopicsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/classroom_topics").to route_to("classroom_topics#index")
    end

    it "routes to #new" do
      expect(get: "/classroom_topics/new").to route_to("classroom_topics#new")
    end

    it "routes to #show" do
      expect(get: "/classroom_topics/1").to route_to("classroom_topics#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/classroom_topics/1/edit").to route_to("classroom_topics#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/classroom_topics").to route_to("classroom_topics#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/classroom_topics/1").to route_to("classroom_topics#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/classroom_topics/1").to route_to("classroom_topics#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/classroom_topics/1").to route_to("classroom_topics#destroy", id: "1")
    end
  end
end
