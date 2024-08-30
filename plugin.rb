# frozen_string_literal: true

# name: discourse-classroom
# about: Plugin to create separate page with videos
# meta_topic_id: TODO
# version: 0.0.1
# authors: AKisliy
# url: TODO
# required_version: 2.7.0

module ::DiscourseClassroom
  PLUGIN_NAME = "discourse-classroom"
end

require_relative "lib/discourse_classroom/engine"


# after_initialize do
#   Discourse::Application.routes.append do
#     get 'classroom' => 'classroom#index'
#   end
# end

register_asset 'stylesheets/classroom.scss'


Discourse::Application.routes.append do
  get '/classroom' => 'admin/plugins#index'
end

after_initialize do
  Discourse::Application.routes.append do
    get 'classroom' => 'classroom#index'
  end
end

