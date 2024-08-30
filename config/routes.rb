# frozen_string_literal: true

# DiscourseClassroom::Engine.routes.draw do
#   get "/" => "classroom#respond"
# end

# DiscourseClassroom::Engine.routes.draw do
#   get "/examples" => "examples#index"
#   # define routes here
# end

DiscourseClassroom::Engine.routes.draw do
    resources :classroom_topics do
      resources :videos
    end
    namespace :admin, constraints: StaffConstraint.new do
        get 'snack' => 'snack#index'
      end
end

Discourse::Application.routes.append do 
    mount ::DiscourseClassroom::Engine, at: "/classroom"

    get "/classroom/classroom-topics" =>
        "discourse_classroom/classroom_topics#index"
end
