# frozen_string_literal: true
require 'rails_helper'

RSpec.describe "classroom_topics/index", type: :view do
  before(:each) do
    assign(:classroom_topics, [
      ClassroomTopic.create!(
        title: "Title",
        order_number: 2
      ),
      ClassroomTopic.create!(
        title: "Title",
        order_number: 2
      )
    ])
  end

  it "renders a list of classroom_topics" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Title".to_s), count: 2
    assert_select cell_selector, text: Regexp.new(2.to_s), count: 2
  end
end
