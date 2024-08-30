# frozen_string_literal: true
class ClassroomTopicSerializer < ApplicationSerializer
  attributes :id, :title, :order_number
  has_many :videos, serializer: VideoSerializer, embed: :object
end
