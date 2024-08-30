# frozen_string_literal: true
class VideoSerializer < ApplicationSerializer
  attributes :id, :link, :name, :description, :transcript, :notes
  has_one :classroom_topic, serializer: ClassroomTopicSerializer
end
