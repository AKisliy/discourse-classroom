# frozen_string_literal: true

module ::DiscourseClassroom
  class ClassroomController < ::ApplicationController
    requires_plugin PLUGIN_NAME

    def index
      render {}
    end
  end
end
