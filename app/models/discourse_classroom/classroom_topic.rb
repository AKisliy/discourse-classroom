# frozen_string_literal: true
module ::DiscourseClassroom
    class ClassroomTopic < ::ActiveRecord::Base
        has_many :videos, dependent: :destroy

        self.table_name = "classroom_topics"
    end
end
