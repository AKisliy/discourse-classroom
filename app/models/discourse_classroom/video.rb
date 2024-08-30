# frozen_string_literal: true
module ::DiscourseClassroom
  class Video < ::ActiveRecord::Base
    belongs_to :classroom_topic, 
                class_name: "DiscourseClassroom::ClassroomTopic", 
                foreign_key: :classroom_topic_id

    self.table_name = "videos"
  end
end