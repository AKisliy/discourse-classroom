module DiscourseClassroom
  module Admin
    class SnackController < ::Admin::AdminController

      def index
        render json: { name: "donut", description: "delicious!" }
      end
    end
  end
end